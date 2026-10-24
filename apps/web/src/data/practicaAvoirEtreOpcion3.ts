// Laboratorio · Opción 3 «Mira, entiende y vuelve a probar».
// Mismos 8 ejercicios que la opción 1, etiquetados por tipo de error, con ayuda para cada error.
// BORRADOR: todo el francés debe revisarlo y aprobarlo el autor antes de publicar.
import type { Pregunta, TipoId } from "./practicaAvoirEtre";
import { practica } from "./practicaAvoirEtre";
import { confusiones } from "./practicaAvoirEtreOpcion2";

export type TipoVideo = Extract<TipoId, "T1" | "T2" | "T3">;

// Tipo de error que trabaja cada ejercicio de la práctica de la opción 1.
const tipoPorEjercicio: Record<string, TipoVideo> = {
  p1: "T3", // sortir sin complemento
  p2: "T3", // sortir + complemento directo
  p3: "T1", // aller
  p4: "T1", // manger (verbo sin être)
  p5: "T2", // se lever
  p6: "T1", // naître
  p7: "T1", // rester
  p8: "T3", // monter + complemento directo
};

export const ejercicios: (Pregunta & { tipo: TipoVideo })[] = practica.map((pregunta) => ({
  ...pregunta,
  tipo: tipoPorEjercicio[pregunta.id],
}));

// Clip específico de cada ejercicio (10–20 s). Mientras falte, el error muestra su explicación escrita
// y el aviso «vídeo pendiente». El primero será el de sortir para p2 (guion en Documentos_Proyecto).
export const videoPorEjercicio: Partial<Record<string, string>> = {};

// La frase completa con la respuesta correcta en el hueco.
export const fraseCorrecta = (pregunta: Pregunta) =>
  pregunta.enunciado.replace("___", pregunta.opciones[pregunta.correcta]);

export type Ayuda = {
  tipo: TipoVideo;
  titulo: string;
  resumen: string;
  ejemploNuevo: Pregunta;
  pista: string;
};

const ejemploDe = (id: "C1" | "C2" | "C3") => confusiones.find((c) => c.id === id)!.ejemploNuevo;

export const ayudas: Record<TipoVideo, Ayuda> = {
  T1: {
    tipo: "T1",
    titulo: "Verbos de movimiento: ¿por qué être?",
    resumen:
      "Los verbos de movimiento o cambio de estado de la lista (aller, venir, partir, arriver, rester, naître…) van con être. Los demás, con avoir.",
    ejemploNuevo: ejemploDe("C1"),
    pista: "Pista: ¿arriver está en la lista de verbos de movimiento?",
  },
  T2: {
    tipo: "T2",
    titulo: "Verbos pronominales: siempre être",
    resumen: "Si el verbo lleva «se» (se lever, se réveiller…), es pronominal y va con être.",
    ejemploNuevo: ejemploDe("C2"),
    pista: "Pista: «se réveiller» lleva «se».",
  },
  T3: {
    tipo: "T3",
    titulo: "Sortir, monter, passer…: ¿sale él o saca algo?",
    resumen:
      "Sortir, monter, descendre, passer, rentrer y retourner van con être si la persona se mueve, y con avoir si llevan complemento directo (sacar, subir, bajar algo).",
    ejemploNuevo: ejemploDe("C3"),
    pista: "Pista: ¿baja él o baja algo? Busca el «¿qué?».",
  },
};

// Para quien no falla: desafío corto en lugar de vídeo.
export const desafio: Pregunta[] = [
  {
    id: "o3-d1",
    enunciado: "Les plantes ? Elle les ___ avant la pluie.",
    opciones: ["a rentré", "a rentrées"],
    correcta: 1,
    explicacion:
      "Con avoir y el complemento directo (les = les plantes) antes del verbo, el participio concuerda: femenino plural.",
  },
  {
    id: "o3-d2",
    enunciado: "___ une semaine à Montréal.",
    opciones: ["Je suis passé(e)", "J'ai passé"],
    correcta: 1,
    explicacion: "«Une semaine» responde a «¿qué?» (el tiempo que pasé) → avoir.",
  },
  {
    id: "o3-d3",
    enunciado: "Elles ___ du train à Lyon.",
    opciones: ["sont descendues", "ont descendu"],
    correcta: 0,
    explicacion: "Ellas bajan (sin complemento directo) → être, y concordancia femenina plural.",
  },
];
