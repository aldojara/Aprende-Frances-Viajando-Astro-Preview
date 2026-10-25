/** @OnlyCurrentDoc */
// La línea anterior limita el permiso de Hojas de cálculo a la hoja en la que está instalado el script.

/**
 * Formularios de «¿Avoir o être?» (opción 3 · Diseño D).
 * Guarda cada solicitud en la hoja «Solicitudes» y envía el correo (acceso al reto o ficha en PDF).
 * Toda la configuración va en Propiedades del script (ver README.md); este archivo no contiene datos personales.
 *
 * Reglas:
 * - Interruptor MODO_PRUEBA: con «no» se acepta cualquier dirección; con «si», sin la propiedad o con cualquier otro
 *   valor, solo las de CORREOS_PERMITIDOS. Se comprueba antes de guardar y antes de cada envío.
 * - Una misma clave de envío (doble clic, reintento del navegador) nunca crea otra fila ni otro correo.
 * - Pedir de nuevo el mismo acceso se permite, con un intervalo mínimo y un máximo cada 24 h.
 * - Cada solicitud escribe su fila una sola vez, con el resultado del primer envío.
 * - Si el envío falla, la tarea programada lo reintenta con esperas crecientes hasta MAX_INTENTOS.
 *   Una fila que quedó «enviando» (ejecución interrumpida) pasa a «revisar» y no se reenvía sola.
 */

var HOJA = "Solicitudes";
var COLUMNAS = [
  "id", "fecha", "tipo", "correo", "origen", "orden", "variante", "objetivo", "avisos", "clave",
  "estado", "intentos", "ultimo_intento", "proximo_intento", "enviado", "error",
];
var TIPOS = ["reto", "ficha"];
var ORIGENES = ["resumen", "error", "final", "ventana_pdf"];
var OBJETIVOS = ["", "Viajar", "Trabajo o estudios", "Vivir en un país francófono", "Un examen", "Clases o gusto", "Otro"];
var CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var ORDEN_VALIDO = /^T[1-5](-T[1-5]){4}$/;
var VARIANTE_VALIDA = /^[a-z0-9-]{1,40}$/;
var CLAVE_VALIDA = /^[A-Za-z0-9-]{8,64}$/;
var MINUTO = 60 * 1000;
var INTERRUMPIDO_MINUTOS = 15;

// ---------- Entrada web ----------

// La página consulta el modo al cargar para mostrar u ocultar el aviso de modo de prueba.
function doGet() {
  return responder_({ ok: true, servicio: "formularios-afv", modoPrueba: config_().modoPrueba });
}

function doPost(e) {
  var datos;
  try {
    datos = JSON.parse(e.postData.contents);
  } catch (err) {
    return responder_({ ok: false, motivo: "datos_no_validos" });
  }
  try {
    return responder_(registrar_(datos, new Date()));
  } catch (err) {
    console.error(err);
    return responder_({ ok: false, motivo: "error_interno" });
  }
}

function responder_(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(ContentService.MimeType.JSON);
}

// ---------- Registro ----------

function registrar_(datos, ahora) {
  var c = config_();
  var correo = normalizar_(datos.correo);
  var tipo = String(datos.tipo || "");
  var origen = String(datos.origen || "");
  var clave = String(datos.clave || "");

  if (TIPOS.indexOf(tipo) < 0 || ORIGENES.indexOf(origen) < 0 || !CLAVE_VALIDA.test(clave)) {
    return { ok: false, motivo: "datos_no_validos" };
  }
  if (!CORREO_VALIDO.test(correo) || correo.length > 254) return { ok: false, motivo: "correo_no_valido" };
  // Modo de prueba: antes de guardar nada.
  if (!permitido_(c, correo)) return { ok: false, motivo: "no_permitido" };

  var orden = tipo === "reto" ? String(datos.orden || "") : "";
  var variante = String(datos.variante || "");
  if (tipo === "reto" && !ORDEN_VALIDO.test(orden)) return { ok: false, motivo: "datos_no_validos" };
  if (!VARIANTE_VALIDA.test(variante)) return { ok: false, motivo: "datos_no_validos" };
  var objetivo = tipo === "reto" && OBJETIVOS.indexOf(String(datos.objetivo || "")) >= 0 ? String(datos.objetivo || "") : "";
  var avisos = tipo === "reto" && datos.avisos === true ? "si" : "no";

  var cerrojo = LockService.getScriptLock();
  if (!cerrojo.tryLock(20000)) return { ok: false, motivo: "ocupado" };
  try {
    var hoja = hoja_();
    var filas = leerFilas_(hoja);

    // Misma clave: es la misma solicitud (doble clic o reintento); se devuelve lo que ya hay.
    var misma = filas.filter(function (f) { return f.clave === clave; })[0];
    if (misma) return { ok: true, envio: estadoPublico_(misma.estado), repetida: true };

    // Pedir de nuevo el mismo acceso: con intervalo mínimo y máximo por 24 h.
    var recientes = filas.filter(function (f) {
      return f.correo === correo && f.tipo === tipo && ahora.getTime() - fecha_(f.fecha) < 24 * 60 * MINUTO;
    });
    var ultima = recientes[recientes.length - 1];
    if (ultima && (ahora.getTime() - fecha_(ultima.fecha) < c.intervaloMinutos * MINUTO || recientes.length >= c.maximo24h)) {
      return { ok: true, envio: estadoPublico_(ultima.estado), limitada: true };
    }

    var fila = {
      id: Utilities.getUuid(),
      fecha: ahora,
      tipo: tipo,
      correo: correo,
      origen: origen,
      orden: orden,
      variante: variante,
      objetivo: objetivo,
      avisos: avisos,
      clave: clave,
      estado: "pendiente",
      intentos: 0,
      ultimo_intento: "",
      proximo_intento: ahora,
      enviado: "",
      error: "",
      _fila: hoja.getLastRow() + 1,
    };
    // Una sola escritura por solicitud: la fila se guarda ya con el resultado del primer envío
    // (cada escritura obliga a actualizar la hoja si está abierta en el navegador).
    intentarEnvio_(hoja, fila, c, ahora, true);
    return { ok: true, envio: estadoPublico_(fila.estado) };
  } finally {
    cerrojo.releaseLock();
  }
}

// ---------- Envío y reintentos ----------

// primerEnvio: la fila aún no está en la hoja; se escribe una sola vez, al final.
function intentarEnvio_(hoja, fila, c, ahora, primerEnvio) {
  // Modo de prueba: también antes de cada envío (la lista o el modo pueden haber cambiado).
  if (!permitido_(c, fila.correo)) {
    fila.estado = "no_permitido";
    fila.proximo_intento = "";
    escribirFila_(hoja, fila);
    return;
  }
  if (MailApp.getRemainingDailyQuota() < 1) {
    // Sin cuota no se gasta un intento: se vuelve a probar en una hora.
    fila.proximo_intento = new Date(ahora.getTime() + 60 * MINUTO);
    fila.error = "Cuota diaria de correo agotada";
    escribirFila_(hoja, fila);
    return;
  }

  fila.estado = "enviando";
  fila.intentos = Number(fila.intentos || 0) + 1;
  fila.ultimo_intento = ahora;
  if (!primerEnvio) {
    // Reintento: se marca «enviando» antes de enviar para detectar una ejecución interrumpida.
    escribirFila_(hoja, fila);
    SpreadsheetApp.flush();
  }

  try {
    MailApp.sendEmail(mensaje_(fila, c));
    fila.estado = "enviado";
    fila.enviado = new Date();
    fila.proximo_intento = "";
    fila.error = "";
  } catch (err) {
    fila.error = String((err && err.message) || err).slice(0, 300);
    if (fila.intentos >= c.maxIntentos) {
      fila.estado = "fallido";
      fila.proximo_intento = "";
    } else {
      var espera = c.esperas[Math.min(fila.intentos - 1, c.esperas.length - 1)];
      fila.estado = "pendiente";
      fila.proximo_intento = new Date(ahora.getTime() + espera * MINUTO);
    }
  }
  escribirFila_(hoja, fila);
}

/** Tarea programada: reintenta los envíos pendientes cuyo momento ha llegado. */
function procesarPendientes() {
  var cerrojo = LockService.getScriptLock();
  if (!cerrojo.tryLock(5000)) return;
  try {
    var c = config_();
    var hoja = hoja_();
    var ahora = new Date();
    leerFilas_(hoja).forEach(function (fila) {
      if (fila.estado === "enviando" && ahora.getTime() - fecha_(fila.ultimo_intento) > INTERRUMPIDO_MINUTOS * MINUTO) {
        // No se sabe si salió: no se reenvía para no duplicar; se revisa a mano.
        fila.estado = "revisar";
        fila.error = "Ejecución interrumpida durante el envío";
        escribirFila_(hoja, fila);
        return;
      }
      if (fila.estado === "pendiente" && fecha_(fila.proximo_intento) <= ahora.getTime()) {
        intentarEnvio_(hoja, fila, c, ahora);
      }
    });
  } finally {
    cerrojo.releaseLock();
  }
}

function mensaje_(fila, c) {
  var pie =
    "Has recibido este correo porque lo pediste en " + c.sitio + ". Si no fuiste tú, puedes ignorarlo.";
  if (fila.tipo === "reto") {
    var url = c.sitio + c.rutaReto + "?orden=" + fila.orden + "&variante=" + fila.variante;
    return {
      to: fila.correo,
      name: c.remitente,
      subject: "Tu acceso al reto «¿Avoir o être?»",
      body: "Aquí tienes tu acceso al reto de 5 sesiones:\n" + url + "\n\nGuarda este correo para volver cuando quieras.\n\n" + pie,
      htmlBody:
        "<p>Aquí tienes tu acceso al reto de 5 sesiones:</p>" +
        '<p><a href="' + escapar_(url) + '">Empezar el reto</a></p>' +
        "<p>Guarda este correo para volver cuando quieras.</p>" +
        '<p style="color:#666;font-size:12px">' + escapar_(pie) + "</p>",
    };
  }
  var ficha = c.sitio + c.rutaFicha;
  return {
    to: fila.correo,
    name: c.remitente,
    subject: "Tu ficha «¿Avoir o être?» en PDF",
    body: "Aquí tienes la ficha en PDF:\n" + ficha + "\n\n" + pie,
    htmlBody:
      "<p>Aquí tienes la ficha en PDF:</p>" +
      '<p><a href="' + escapar_(ficha) + '">Descargar la ficha</a></p>' +
      '<p style="color:#666;font-size:12px">' + escapar_(pie) + "</p>",
  };
}

// ---------- Configuración inicial (se ejecutan a mano una vez) ----------

/** Crea la hoja «Solicitudes» con sus columnas si no existe. */
function configurarHoja() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName(HOJA) || libro.insertSheet(HOJA);
  hoja.getRange(1, 1, 1, COLUMNAS.length).setValues([COLUMNAS]).setFontWeight("bold");
  hoja.setFrozenRows(1);
}

/** Instala (o reinstala) la tarea que reintenta los envíos cada 15 minutos. */
function instalarTareaProgramada() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "procesarPendientes") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("procesarPendientes").timeBased().everyMinutes(15).create();
}

/** Muestra en el registro la configuración leída (sin las direcciones). */
function comprobarConfiguracion() {
  var c = config_();
  console.log(JSON.stringify({
    modoPrueba: c.modoPrueba,
    direccionesPermitidas: c.permitidos.length,
    sitio: c.sitio,
    remitente: c.remitente,
    esperas: c.esperas,
    maxIntentos: c.maxIntentos,
    intervaloMinutos: c.intervaloMinutos,
    maximo24h: c.maximo24h,
    cuotaRestante: MailApp.getRemainingDailyQuota(),
  }));
}

// ---------- Utilidades ----------

function config_() {
  var p = PropertiesService.getScriptProperties();
  var leer = function (clave, defecto) {
    var valor = p.getProperty(clave);
    return valor === null || valor === "" ? defecto : valor;
  };
  return {
    // Solo «no» abre el formulario a cualquier dirección; lo demás (o la propiedad ausente) mantiene la lista.
    modoPrueba: String(leer("MODO_PRUEBA", "si")).trim().toLowerCase() !== "no",
    permitidos: String(leer("CORREOS_PERMITIDOS", "")).split(/[\s,;]+/).map(normalizar_).filter(Boolean),
    sitio: String(leer("SITIO_URL", "")).replace(/\/+$/, ""),
    remitente: leer("REMITENTE_NOMBRE", "Aprende Francés Viajando"),
    rutaReto: "/practica/avoir-o-etre/reto/",
    rutaFicha: leer("FICHA_RUTA", "/descargas/ficha-avoir-o-etre-borrador.pdf"),
    esperas: String(leer("REINTENTOS_ESPERA_MINUTOS", "60,1500")).split(",").map(Number).filter(function (n) { return n > 0; }),
    maxIntentos: Number(leer("MAX_INTENTOS", "3")),
    intervaloMinutos: Number(leer("REPETICION_MINUTOS", "10")),
    maximo24h: Number(leer("REPETICION_MAX_24H", "3")),
  };
}

function permitido_(c, correo) {
  return !c.modoPrueba || c.permitidos.indexOf(correo) >= 0;
}

function hoja_() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(HOJA);
  if (!hoja) throw new Error("Falta la hoja «" + HOJA + "»: ejecuta configurarHoja().");
  return hoja;
}

function leerFilas_(hoja) {
  var ultima = hoja.getLastRow();
  if (ultima < 2) return [];
  return hoja.getRange(2, 1, ultima - 1, COLUMNAS.length).getValues().map(function (valores, i) {
    var fila = { _fila: i + 2 };
    COLUMNAS.forEach(function (nombre, j) { fila[nombre] = valores[j]; });
    return fila;
  });
}

function escribirFila_(hoja, fila) {
  hoja.getRange(fila._fila, 1, 1, COLUMNAS.length).setValues([
    COLUMNAS.map(function (nombre) { return fila[nombre] === undefined ? "" : fila[nombre]; }),
  ]);
}

function normalizar_(correo) {
  return String(correo || "").trim().toLowerCase();
}

function fecha_(valor) {
  if (valor instanceof Date) return valor.getTime();
  var t = new Date(valor).getTime();
  return isNaN(t) ? 0 : t;
}

function estadoPublico_(estado) {
  if (estado === "enviado") return "enviado";
  if (estado === "pendiente" || estado === "enviando") return "pendiente";
  return "fallido";
}

function escapar_(texto) {
  return String(texto).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}
