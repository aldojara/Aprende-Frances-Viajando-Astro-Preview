// Opción 3: decide qué vídeo de ayuda ofrecer a partir de las respuestas.
// Solo importa tipos para poder probarse con Node sin el resto del proyecto.
import type { TipoId } from "../data/practicaAvoirEtre";
import type { TipoVideo } from "../data/practicaAvoirEtreOpcion3";

export type ResultadoEjercicio = { id: string; respondida: boolean; correcta: boolean };

export type DecisionAyuda =
  | { modo: "sin-fallos"; sinResponder: number; orden: TipoId[] }
  | {
      modo: "con-fallos";
      principal: TipoVideo;
      fallado: string; // ejercicio fallado del tipo principal (para mostrar su respuesta)
      otros: TipoVideo[];
      sinResponder: number;
      orden: TipoId[];
    };

const ORDEN_VIDEO: TipoVideo[] = ["T1", "T2", "T3"];

export const decidirAyuda = (
  resultados: ResultadoEjercicio[],
  tipoPorId: Record<string, TipoVideo>,
  ordenEstandar: TipoId[],
): DecisionAyuda => {
  const sinResponder = resultados.filter((r) => !r.respondida).length;
  // Un fallo es una respuesta dada e incorrecta; sin responder no cuenta como fallo.
  const fallos = resultados.filter((r) => r.respondida && !r.correcta);

  const porTipo = new Map<TipoVideo, string[]>();
  fallos.forEach((f) => {
    const tipo = tipoPorId[f.id];
    if (tipo) porTipo.set(tipo, [...(porTipo.get(tipo) ?? []), f.id]);
  });

  if (!porTipo.size) return { modo: "sin-fallos", sinResponder, orden: ordenEstandar };

  // Más fallos primero; empate → orden pedagógico.
  const tipos = [...porTipo.keys()].sort(
    (a, b) =>
      porTipo.get(b)!.length - porTipo.get(a)!.length ||
      ORDEN_VIDEO.indexOf(a) - ORDEN_VIDEO.indexOf(b),
  );
  const [principal, ...otros] = tipos;
  const orden = [...tipos, ...ordenEstandar.filter((t) => !tipos.includes(t as TipoVideo))];

  return {
    modo: "con-fallos",
    principal,
    fallado: porTipo.get(principal)![0],
    otros,
    sinResponder,
    orden,
  };
};
