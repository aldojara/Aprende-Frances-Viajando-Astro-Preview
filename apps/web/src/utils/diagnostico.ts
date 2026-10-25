// Reglas del diagnóstico orientativo (mini análisis v3, §5).
// Solo importa tipos para poder probarse con Node sin el resto del proyecto.
import type { Pregunta, TipoId } from "../data/practicaAvoirEtre";

export const MINIMO_RESPONDIDAS = 12;

export type EstadoTipo = "practicar" | "sin-datos" | "sin-errores";

export type ResultadoTipo = {
  tipo: TipoId;
  respondidas: number;
  fallos: number;
  estado: EstadoTipo;
};

export type ResultadoDiagnostico =
  | { suficiente: false; respondidas: number; total: number }
  | {
      suficiente: true;
      respondidas: number;
      total: number;
      aciertos: number;
      porTipo: ResultadoTipo[];
      orden: TipoId[];
      recomendados: TipoId[];
    };

// respuestas: índice de la opción elegida por id de pregunta; sin clave = sin responder.
export const evaluarDiagnostico = (
  preguntas: Pregunta[],
  respuestas: Record<string, number | undefined>,
  ordenPedagogico: TipoId[],
): ResultadoDiagnostico => {
  const total = preguntas.length;
  const respondidasIds = preguntas.filter((p) => respuestas[p.id] !== undefined);
  const respondidas = respondidasIds.length;

  if (respondidas < MINIMO_RESPONDIDAS) {
    return { suficiente: false, respondidas, total };
  }

  const aciertos = respondidasIds.filter((p) => respuestas[p.id] === p.correcta).length;

  const porTipo: ResultadoTipo[] = ordenPedagogico.map((tipo) => {
    const delTipo = preguntas.filter((p) => p.tipo === tipo && respuestas[p.id] !== undefined);
    const fallos = delTipo.filter((p) => respuestas[p.id] !== p.correcta).length;
    const estado: EstadoTipo =
      fallos > 0 ? "practicar" : delTipo.length < 2 ? "sin-datos" : "sin-errores";
    return { tipo, respondidas: delTipo.length, fallos, estado };
  });

  const posicion = (tipo: TipoId) => ordenPedagogico.indexOf(tipo);

  const practicar = porTipo
    .filter((t) => t.estado === "practicar")
    .sort(
      (a, b) =>
        b.fallos / b.respondidas - a.fallos / a.respondidas ||
        b.fallos - a.fallos ||
        posicion(a.tipo) - posicion(b.tipo),
    );
  const sinDatos = porTipo.filter((t) => t.estado === "sin-datos");
  const sinErrores = porTipo.filter((t) => t.estado === "sin-errores");

  const orden = [...practicar, ...sinDatos, ...sinErrores].map((t) => t.tipo);
  const recomendados = practicar.slice(0, 2).map((t) => t.tipo);

  return { suficiente: true, respondidas, total, aciertos, porTipo, orden, recomendados };
};

const tiposValidos = new Set<string>(["T1", "T2", "T3", "T4", "T5"]);

// Lee ?orden=T3-T4-T1-T2-T5 y lo valida; si no es válido devuelve el orden estándar.
export const leerOrden = (valor: string | null, ordenEstandar: TipoId[]): TipoId[] => {
  const partes = (valor ?? "").split("-");
  const unicas = new Set(partes);
  const valido =
    partes.length === ordenEstandar.length &&
    unicas.size === partes.length &&
    partes.every((parte) => tiposValidos.has(parte));
  return valido ? (partes as TipoId[]) : ordenEstandar;
};
