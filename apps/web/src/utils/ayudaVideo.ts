// Opción 3: decide qué vídeo de ayuda ofrecer a partir de las respuestas.
// Solo importa tipos para poder probarse con Node sin el resto del proyecto.
import type { TipoId } from "../data/practicaAvoirEtre";
import type { TipoVideo } from "../data/practicaAvoirEtreOpcion3";

export type ResultadoEjercicio = { id: string; respondida: boolean; correcta: boolean };

export type Recuento = { correctas: number; incorrectas: number; sinResponder: number };

export type DecisionAyuda =
  | { modo: "sin-respuestas"; recuento: Recuento }
  | { modo: "sin-fallos"; recuento: Recuento; orden: TipoId[] }
  | {
      modo: "con-fallos";
      recuento: Recuento;
      tipos: TipoVideo[]; // tipos con fallos, el principal primero
      falladoPorTipo: Partial<Record<TipoVideo, string>>; // primer ejercicio fallado de cada tipo
      orden: TipoId[];
    };

const ORDEN_VIDEO: TipoVideo[] = ["T1", "T2", "T3"];

// Orden del reto: el tipo elegido primero, luego el resto de tipos con fallos y el orden estándar.
export const ordenDesde = (
  primero: TipoVideo,
  tiposConFallos: TipoVideo[],
  ordenEstandar: TipoId[],
): TipoId[] => {
  const prioritarios = [primero, ...tiposConFallos.filter((t) => t !== primero)];
  return [...prioritarios, ...ordenEstandar.filter((t) => !prioritarios.includes(t as TipoVideo))];
};

export const decidirAyuda = (
  resultados: ResultadoEjercicio[],
  tipoPorId: Record<string, TipoVideo>,
  ordenEstandar: TipoId[],
): DecisionAyuda => {
  // Un fallo es una respuesta dada e incorrecta; sin responder no cuenta como fallo.
  const recuento: Recuento = {
    correctas: resultados.filter((r) => r.respondida && r.correcta).length,
    incorrectas: resultados.filter((r) => r.respondida && !r.correcta).length,
    sinResponder: resultados.filter((r) => !r.respondida).length,
  };

  if (recuento.sinResponder === resultados.length) return { modo: "sin-respuestas", recuento };

  const porTipo = new Map<TipoVideo, string[]>();
  resultados
    .filter((r) => r.respondida && !r.correcta)
    .forEach((f) => {
      const tipo = tipoPorId[f.id];
      if (tipo) porTipo.set(tipo, [...(porTipo.get(tipo) ?? []), f.id]);
    });

  if (!porTipo.size) return { modo: "sin-fallos", recuento, orden: ordenEstandar };

  // Más fallos primero; empate → orden pedagógico.
  const tipos = [...porTipo.keys()].sort(
    (a, b) =>
      porTipo.get(b)!.length - porTipo.get(a)!.length ||
      ORDEN_VIDEO.indexOf(a) - ORDEN_VIDEO.indexOf(b),
  );
  const falladoPorTipo = Object.fromEntries(tipos.map((t) => [t, porTipo.get(t)![0]]));

  return {
    modo: "con-fallos",
    recuento,
    tipos,
    falladoPorTipo,
    orden: ordenDesde(tipos[0], tipos, ordenEstandar),
  };
};
