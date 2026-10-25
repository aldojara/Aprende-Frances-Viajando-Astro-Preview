// Opción 3: decide qué ayuda mostrar a partir de las respuestas (lista de errores, desafío o aviso).
// Solo importa tipos para poder probarse con Node sin el resto del proyecto.
import type { TipoId } from "../data/practicaAvoirEtre";
import type { TipoVideo } from "../data/practicaAvoirEtreOpcion3";

export type ResultadoEjercicio = { id: string; respondida: boolean; correcta: boolean };

export type Recuento = { correctas: number; incorrectas: number; sinResponder: number };

// «todo-correcto» exige responder todas las frases; sin fallos pero con frases vacías es
// «parcial-sin-fallos»: no permite concluir que se domina todo.
export type DecisionAyuda =
  | { modo: "sin-respuestas"; recuento: Recuento; vacias: string[] }
  | { modo: "todo-correcto"; recuento: Recuento; vacias: string[]; orden: TipoId[] }
  | { modo: "parcial-sin-fallos"; recuento: Recuento; vacias: string[]; orden: TipoId[] }
  | {
      modo: "con-fallos";
      recuento: Recuento;
      vacias: string[];
      fallos: string[]; // ejercicios fallados, en el orden de la práctica
      tipos: TipoVideo[]; // tipos con fallos, el de más fallos primero
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
  const fallos = resultados.filter((r) => r.respondida && !r.correcta).map((r) => r.id);
  const vacias = resultados.filter((r) => !r.respondida).map((r) => r.id);
  const recuento: Recuento = {
    correctas: resultados.filter((r) => r.respondida && r.correcta).length,
    incorrectas: fallos.length,
    sinResponder: vacias.length,
  };

  if (vacias.length === resultados.length) return { modo: "sin-respuestas", recuento, vacias };

  if (!fallos.length) {
    return {
      modo: vacias.length ? "parcial-sin-fallos" : "todo-correcto",
      recuento,
      vacias,
      orden: ordenEstandar,
    };
  }

  const porTipo = new Map<TipoVideo, number>();
  fallos.forEach((id) => {
    const tipo = tipoPorId[id];
    if (tipo) porTipo.set(tipo, (porTipo.get(tipo) ?? 0) + 1);
  });

  // Más fallos primero; empate → orden pedagógico.
  const tipos = [...porTipo.keys()].sort(
    (a, b) => porTipo.get(b)! - porTipo.get(a)! || ORDEN_VIDEO.indexOf(a) - ORDEN_VIDEO.indexOf(b),
  );

  // El reto empieza por el tipo del primer error de la lista, que es el que se abre de entrada.
  const primero = tipoPorId[fallos[0]] ?? tipos[0];
  return {
    modo: "con-fallos",
    recuento,
    vacias,
    fallos,
    tipos,
    orden: ordenDesde(primero, tipos, ordenEstandar),
  };
};
