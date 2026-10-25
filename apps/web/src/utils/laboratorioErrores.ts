// Opción 2: decide qué confusión trabajar en el laboratorio a partir de las 6 respuestas.
// Solo importa tipos para poder probarse con Node sin el resto del proyecto.
import type { TipoId } from "../data/practicaAvoirEtre";
import type { ConfusionId } from "../data/practicaAvoirEtreOpcion2";

export type ResultadoPregunta = { id: string; respondida: boolean; correcta: boolean };
type ConfusionMinima = { id: ConfusionId; tipo: TipoId; pareja: { id: string }[] };

export type Modo = "con-fallos" | "sin-fallos" | "incompleto";

export type Eleccion = {
  modo: Modo;
  confusion: ConfusionId; // la que se trabaja en el laboratorio
  conFallos: ConfusionId[]; // todas las que tuvieron algún fallo, en orden
  sinResponder: number;
  orden: TipoId[]; // orden recomendado de las sesiones del reto
};

// Sin fallos se propone explicar la confusión más informativa (cambio de auxiliar).
const CONFUSION_POR_DEFECTO: ConfusionId = "C3";

export const elegirConfusion = (
  resultados: ResultadoPregunta[],
  confusiones: ConfusionMinima[],
  ordenEstandar: TipoId[],
): Eleccion => {
  const porId = new Map(resultados.map((r) => [r.id, r]));
  const sinResponder = resultados.filter((r) => !r.respondida).length;

  // Un fallo es una respuesta dada e incorrecta; sin responder no cuenta como fallo.
  const conFallos = confusiones
    .filter((c) =>
      c.pareja.some((p) => {
        const r = porId.get(p.id);
        return r?.respondida && !r.correcta;
      }),
    )
    .map((c) => c.id);

  const modo: Modo = conFallos.length ? "con-fallos" : sinResponder ? "incompleto" : "sin-fallos";
  const confusion = conFallos[0] ?? CONFUSION_POR_DEFECTO;

  const prioritarios = confusiones.filter((c) => conFallos.includes(c.id)).map((c) => c.tipo);
  const orden = [...prioritarios, ...ordenEstandar.filter((t) => !prioritarios.includes(t))];

  return { modo, confusion, conFallos, sinResponder, orden };
};
