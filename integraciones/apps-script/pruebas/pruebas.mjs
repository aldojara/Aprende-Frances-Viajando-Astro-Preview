// Pruebas de Codigo.gs con el entorno simulado: node integraciones/apps-script/pruebas/pruebas.mjs
import assert from "node:assert/strict";
import { crearEntorno } from "./entorno-simulado.mjs";

const PROPIEDADES = {
  CORREOS_PERMITIDOS: "prueba@ejemplo.com, Otra@Ejemplo.com",
  SITIO_URL: "http://localhost:4321/",
  REMITENTE_NOMBRE: "Remitente de prueba",
};
const MIN = 60 * 1000;
const T0 = Date.UTC(2026, 9, 25, 10, 0, 0);
let clave = 0;
const nuevaClave = () => `clave-prueba-${String(++clave).padStart(4, "0")}`;
const reto = (extra = {}) => ({
  tipo: "reto",
  correo: "prueba@ejemplo.com",
  origen: "resumen",
  orden: "T3-T1-T2-T4-T5",
  variante: "opcion-3-diseno-d",
  objetivo: "",
  avisos: false,
  clave: nuevaClave(),
  ...extra,
});

const preparar = (extra = {}) => {
  const e = crearEntorno({ ...PROPIEDADES, ...extra });
  e.control.ahora = T0;
  e.gs.configurarHoja();
  return e;
};

const pruebas = {
  "registra, envía y construye el enlace con el orden"() {
    const e = preparar();
    assert.deepEqual(e.post(reto()), { ok: true, envio: "enviado" });
    const [fila] = e.filas();
    assert.equal(fila.estado, "enviado");
    assert.equal(fila.intentos, 1);
    assert.equal(e.enviados.length, 1);
    assert.equal(e.enviados[0].name, "Remitente de prueba");
    assert.match(e.enviados[0].body, /http:\/\/localhost:4321\/practica\/avoir-o-etre\/reto\/\?orden=T3-T1-T2-T4-T5&variante=opcion-3-diseno-d/);
  },

  "rechaza direcciones fuera de la lista sin guardar ni enviar"() {
    const e = preparar();
    assert.deepEqual(e.post(reto({ correo: "otra.persona@ejemplo.com" })), { ok: false, motivo: "no_permitido" });
    assert.equal(e.filas().length, 0);
    assert.equal(e.enviados.length, 0);
  },

  "MODO_PRUEBA = no: acepta cualquier dirección, la guarda y la envía"() {
    const e = preparar({ MODO_PRUEBA: " No " });
    assert.deepEqual(e.post(reto({ correo: "otra.persona@ejemplo.com" })), { ok: true, envio: "enviado" });
    assert.equal(e.filas()[0].estado, "enviado");
    assert.equal(e.enviados[0].to, "otra.persona@ejemplo.com");
  },

  "MODO_PRUEBA ausente, «si» o mal escrito: solo la lista"() {
    for (const valor of [undefined, "", "si", "SI", "nop", "false", "0"]) {
      const e = preparar(valor === undefined ? {} : { MODO_PRUEBA: valor });
      assert.equal(e.post(reto({ correo: "otra.persona@ejemplo.com" })).motivo, "no_permitido", `valor ${valor}`);
      assert.equal(e.post(reto()).ok, true, `valor ${valor}`);
      assert.equal(e.filas().length, 1);
    }
  },

  "la consulta del modo (GET) dice si está en prueba"() {
    const modo = (extra) => JSON.parse(preparar(extra).gs.doGet().texto).modoPrueba;
    assert.equal(modo({}), true);
    assert.equal(modo({ MODO_PRUEBA: "si" }), true);
    assert.equal(modo({ MODO_PRUEBA: "no" }), false);
  },

  "volver a MODO_PRUEBA = si antes de un reintento: no se envía a direcciones fuera de la lista"() {
    const propiedades = { ...PROPIEDADES, MODO_PRUEBA: "no" };
    const e = crearEntorno(propiedades);
    e.control.ahora = T0;
    e.gs.configurarHoja();
    e.control.fallarEnvio = () => true;
    e.post(reto({ correo: "otra.persona@ejemplo.com" }));
    assert.equal(e.filas()[0].estado, "pendiente");
    propiedades.MODO_PRUEBA = "si";
    e.control.fallarEnvio = () => false;
    e.control.ahora = T0 + 61 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].estado, "no_permitido");
    assert.equal(e.enviados.length, 0);
  },

  "normaliza mayúsculas y espacios del correo"() {
    const e = preparar();
    assert.equal(e.post(reto({ correo: "  OTRA@ejemplo.COM " })).ok, true);
    assert.equal(e.filas()[0].correo, "otra@ejemplo.com");
  },

  "la misma clave (doble clic o reintento) no duplica fila ni correo"() {
    const e = preparar();
    const datos = reto();
    e.post(datos);
    assert.deepEqual(e.post(datos), { ok: true, envio: "enviado", repetida: true });
    assert.equal(e.filas().length, 1);
    assert.equal(e.enviados.length, 1);
  },

  "pedir de nuevo: bloqueado antes del intervalo, permitido después, máximo 3 en 24 h"() {
    const e = preparar();
    e.post(reto());
    e.control.ahora = T0 + 5 * MIN;
    assert.equal(e.post(reto()).limitada, true);
    e.control.ahora = T0 + 11 * MIN;
    assert.equal(e.post(reto()).limitada, undefined);
    e.control.ahora = T0 + 22 * MIN;
    assert.equal(e.post(reto()).limitada, undefined);
    e.control.ahora = T0 + 40 * MIN;
    assert.equal(e.post(reto()).limitada, true, "cuarta en 24 h");
    assert.equal(e.filas().length, 3);
    assert.equal(e.enviados.length, 3);
    e.control.ahora = T0 + 24 * 60 * MIN + 1;
    assert.equal(e.post(reto()).limitada, undefined, "pasadas 24 h");
  },

  "ficha y reto son solicitudes distintas"() {
    const e = preparar();
    e.post(reto());
    const r = e.post({ tipo: "ficha", correo: "prueba@ejemplo.com", origen: "ventana_pdf", variante: "opcion-3-diseno-d", clave: nuevaClave() });
    assert.deepEqual(r, { ok: true, envio: "enviado" });
    const ficha = e.filas()[1];
    assert.equal(ficha.tipo, "ficha");
    assert.equal(ficha.orden, "");
    assert.equal(ficha.avisos, "no");
    assert.match(e.enviados[1].body, /\/descargas\/ficha-avoir-o-etre-borrador\.pdf/);
  },

  "guarda el permiso de avisos solo si se marca"() {
    const e = preparar();
    e.post(reto({ avisos: true, objetivo: "Viajar", origen: "error" }));
    e.post(reto({ correo: "otra@ejemplo.com", avisos: "si", objetivo: "<script>" }));
    const [a, b] = e.filas();
    assert.equal(a.avisos, "si");
    assert.equal(a.objetivo, "Viajar");
    assert.equal(b.avisos, "no", "solo el booleano true cuenta");
    assert.equal(b.objetivo, "", "objetivo fuera de la lista");
  },

  "rechaza datos no válidos"() {
    const e = preparar();
    assert.equal(e.post(reto({ orden: "T1-T2" })).motivo, "datos_no_validos");
    assert.equal(e.post(reto({ tipo: "otro" })).motivo, "datos_no_validos");
    assert.equal(e.post(reto({ clave: "x" })).motivo, "datos_no_validos");
    assert.equal(e.post(reto({ variante: "https://malo" })).motivo, "datos_no_validos");
    assert.equal(e.post(reto({ correo: "sin-arroba" })).motivo, "correo_no_valido");
    assert.equal(JSON.parse(e.gs.doPost({ postData: { contents: "{no json" } }).texto).motivo, "datos_no_validos");
    assert.equal(e.filas().length, 0);
  },

  "si falla el envío: reintentos programados a +60 min y +1500 min, después «fallido»"() {
    const e = preparar();
    e.control.fallarEnvio = () => true;
    assert.deepEqual(e.post(reto()), { ok: true, envio: "pendiente" });
    let fila = e.filas()[0];
    assert.equal(fila.estado, "pendiente");
    assert.equal(fila.intentos, 1);
    assert.equal(new Date(fila.proximo_intento).getTime(), T0 + 60 * MIN);

    e.control.ahora = T0 + 59 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].intentos, 1, "aún no toca");

    e.control.ahora = T0 + 60 * MIN;
    e.gs.procesarPendientes();
    fila = e.filas()[0];
    assert.equal(fila.intentos, 2);
    assert.equal(new Date(fila.proximo_intento).getTime(), T0 + 60 * MIN + 1500 * MIN);

    e.control.ahora = T0 + 60 * MIN + 1500 * MIN;
    e.gs.procesarPendientes();
    fila = e.filas()[0];
    assert.equal(fila.intentos, 3);
    assert.equal(fila.estado, "fallido");
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].intentos, 3, "no pasa del máximo");
    assert.equal(e.enviados.length, 0);
  },

  "un reintento que funciona deja la fila «enviado» y un solo correo"() {
    const e = preparar();
    let fallos = 1;
    e.control.fallarEnvio = () => fallos-- > 0;
    e.post(reto());
    e.control.ahora = T0 + 61 * MIN;
    e.gs.procesarPendientes();
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].estado, "enviado");
    assert.equal(e.enviados.length, 1);
  },

  "una fila interrumpida en «enviando» pasa a «revisar» y no se reenvía"() {
    const e = preparar();
    e.control.fallarEnvio = () => true;
    e.post(reto());
    const hoja = e.hojas.get("Solicitudes");
    const columnas = hoja.celdas[0];
    hoja.celdas[1][columnas.indexOf("estado")] = "enviando";
    e.control.fallarEnvio = () => false;
    e.control.ahora = T0 + 10 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].estado, "enviando", "aún puede estar en curso");
    e.control.ahora = T0 + 16 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].estado, "revisar");
    e.control.ahora = T0 + 3000 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.enviados.length, 0);
  },

  "sin cuota no gasta intentos y vuelve a probar en una hora"() {
    const e = preparar();
    e.control.cuota = 0;
    assert.equal(e.post(reto()).envio, "pendiente");
    const fila = e.filas()[0];
    assert.equal(fila.intentos, 0);
    assert.equal(new Date(fila.proximo_intento).getTime(), T0 + 60 * MIN);
  },

  "si quitan una dirección de la lista, no se reintenta su envío"() {
    const props = { ...PROPIEDADES };
    const e = crearEntorno(props);
    e.control.ahora = T0;
    e.gs.configurarHoja();
    e.control.fallarEnvio = () => true;
    e.post(reto());
    props.CORREOS_PERMITIDOS = "otra@ejemplo.com";
    e.control.fallarEnvio = () => false;
    e.control.ahora = T0 + 61 * MIN;
    e.gs.procesarPendientes();
    assert.equal(e.filas()[0].estado, "no_permitido");
    assert.equal(e.enviados.length, 0);
  },

  "la tarea programada se instala una sola vez, cada 15 minutos"() {
    const e = preparar();
    e.gs.instalarTareaProgramada();
    e.gs.instalarTareaProgramada();
    assert.equal(e.disparadores.length, 1);
    assert.equal(e.disparadores[0].minutos, 15);
  },
};

let fallidas = 0;
for (const [nombre, prueba] of Object.entries(pruebas)) {
  try {
    prueba();
    console.log(`✓ ${nombre}`);
  } catch (error) {
    fallidas += 1;
    console.log(`✗ ${nombre}\n  ${error.message}`);
  }
}
console.log(`\n${Object.keys(pruebas).length - fallidas} de ${Object.keys(pruebas).length} pruebas correctas`);
process.exit(fallidas ? 1 : 0);
