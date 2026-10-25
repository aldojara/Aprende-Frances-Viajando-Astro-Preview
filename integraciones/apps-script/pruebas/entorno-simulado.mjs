// Imitación mínima de los servicios de Google que usa Codigo.gs, para probarlo con Node sin cuenta de Google.
// Solo reproduce lo que el script necesita: una hoja en memoria, propiedades, cerrojo, correo y respuesta web.
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const codigo = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "..", "Codigo.gs"), "utf8");

export const crearEntorno = (propiedades = {}) => {
  const hojas = new Map();
  const enviados = [];
  const disparadores = [];
  const control = { fallarEnvio: () => false, cuota: 100, ahora: null };

  const crearHoja = (nombre) => {
    const celdas = [];
    const hoja = {
      nombre,
      celdas,
      getLastRow: () => celdas.length,
      getRange: (fila, columna, filas = 1, columnas = 1) => ({
        setValues: (valores) => {
          valores.forEach((v, i) => {
            const destino = (celdas[fila - 1 + i] ??= []);
            v.forEach((x, j) => (destino[columna - 1 + j] = x));
          });
          return { setFontWeight: () => undefined };
        },
        getValues: () =>
          Array.from({ length: filas }, (_, i) =>
            Array.from({ length: columnas }, (_, j) => celdas[fila - 1 + i]?.[columna - 1 + j] ?? ""),
          ),
      }),
      setFrozenRows: () => undefined,
    };
    hojas.set(nombre, hoja);
    return hoja;
  };

  const RealDate = Date;
  class FechaControlada extends RealDate {
    constructor(...args) {
      super(...(args.length ? args : [control.ahora ?? RealDate.now()]));
    }
    static now() {
      return control.ahora ?? RealDate.now();
    }
  }

  const contexto = {
    console,
    Date: FechaControlada,
    JSON,
    Math,
    Number,
    String,
    isNaN,
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({
        getSheetByName: (n) => hojas.get(n) ?? null,
        insertSheet: (n) => crearHoja(n),
      }),
      flush: () => undefined,
    },
    PropertiesService: {
      getScriptProperties: () => ({ getProperty: (k) => (k in propiedades ? String(propiedades[k]) : null) }),
    },
    LockService: {
      getScriptLock: () => ({ tryLock: () => true, waitLock: () => undefined, releaseLock: () => undefined }),
    },
    MailApp: {
      getRemainingDailyQuota: () => control.cuota,
      sendEmail: (mensaje) => {
        if (control.fallarEnvio(mensaje)) throw new Error("Fallo simulado del envío");
        control.cuota -= 1;
        enviados.push(mensaje);
      },
    },
    ContentService: {
      MimeType: { JSON: "application/json" },
      createTextOutput: (texto) => ({ texto, setMimeType() { return this; } }),
    },
    Utilities: { getUuid: () => randomUUID() },
    ScriptApp: {
      getProjectTriggers: () => disparadores,
      deleteTrigger: (t) => disparadores.splice(disparadores.indexOf(t), 1),
      newTrigger: (funcion) => ({
        timeBased: () => ({
          everyMinutes: (minutos) => ({
            create: () => disparadores.push({ funcion, minutos, getHandlerFunction: () => funcion }),
          }),
        }),
      }),
    },
  };
  vm.createContext(contexto);
  vm.runInContext(codigo, contexto, { filename: "Codigo.gs" });

  return {
    gs: contexto,
    hojas,
    enviados,
    disparadores,
    control,
    // Llamada como la haría el navegador: devuelve el JSON de la respuesta.
    post: (datos) => JSON.parse(contexto.doPost({ postData: { contents: JSON.stringify(datos) } }).texto),
    filas: () => {
      const hoja = hojas.get("Solicitudes");
      const [cabecera, ...resto] = hoja.celdas;
      return resto.map((v) => Object.fromEntries(cabecera.map((c, i) => [c, v[i]])));
    },
  };
};
