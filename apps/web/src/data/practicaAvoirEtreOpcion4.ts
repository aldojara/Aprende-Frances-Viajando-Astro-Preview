// Laboratorio · Opción 4 «Una pista para decidir».
// Mismos 8 ejercicios que la opción 1. Si la persona falla, una sola pregunta guiada adaptada a la
// frase (misma estructura por tipo: ¿sale o saca algo? · ¿está en la lista? · ¿es pronominal?).
// BORRADOR: todo el francés y las pistas deben revisarlos Codex y el autor antes de publicar.
// Cuidado al editar: la lista de être NO es «verbos de movimiento» (marcher, courir → avoir) y
// sortir, monter… cambian a avoir cuando llevan complemento directo.
import type { Pregunta } from "./practicaAvoirEtre";
import { confusiones } from "./practicaAvoirEtreOpcion2";
import { ejercicios as ejerciciosOpcion3, type TipoVideo } from "./practicaAvoirEtreOpcion3";

export type Pista = {
  pregunta: string;
  respuestas: [string, string];
  correcta: 0 | 1;
  razon: string; // se muestra siempre tras responder la pista, acierte o no
  conLista?: boolean; // muestra la lista de verbos con être junto a la pregunta
};

// Mismos ejercicios y tipos que la opción 3 (T1 lista de être, T2 pronominales, T3 cambian de auxiliar).
export const ejercicios = ejerciciosOpcion3;

export const pistas: Record<string, Pista> = {
  p1: {
    pregunta: "En esta frase, ¿salimos nosotros o sacamos algo?",
    respuestas: ["Salimos nosotros", "Sacamos algo"],
    correcta: 0,
    razon:
      "«Avec des amis» dice con quién, no qué se saca: no se saca nada. Si el sujeto sale, sortir va con être y el participio concuerda: nous sommes sorti(e)s.",
  },
  p2: {
    pregunta: "¿Ella sale o saca algo?",
    respuestas: ["Ella sale", "Saca algo"],
    correcta: 1,
    razon:
      "Saca algo: «la voiture» responde a «¿qué saca?». Cuando sortir lleva algo que se saca, va con avoir: elle a sorti la voiture. Y sin -e: con avoir, el participio no concuerda con el sujeto.",
  },
  p3: {
    pregunta: "¿Está aller en la lista de verbos que van con être?",
    respuestas: ["Sí", "No"],
    correcta: 0,
    conLista: true,
    razon: "Sí: aller está en la lista y siempre va con être. «J'ai allé» no existe: je suis allé(e).",
  },
  p4: {
    pregunta: "¿Está manger en la lista de verbos que van con être?",
    respuestas: ["Sí", "No"],
    correcta: 1,
    conLista: true,
    razon:
      "No: manger no está en la lista y no es pronominal, así que va con avoir, como la gran mayoría de los verbos: ils ont mangé.",
  },
  p5: {
    pregunta: "¿Es un verbo pronominal? Fíjate en «te»: tu te lèves.",
    respuestas: ["Sí: se lever", "No: lever"],
    correcta: 0,
    razon:
      "Sí: el pronombre te es de la misma persona que tu, así que el verbo es se lever (levantarse). Todos los verbos pronominales van con être: tu t'es levé(e). Sin pronombre, lever algo va con avoir: tu as levé la main.",
  },
  p6: {
    pregunta: "¿Está naître en la lista de verbos que van con être?",
    respuestas: ["Sí", "No"],
    correcta: 0,
    conLista: true,
    razon: "Sí: naître (nacer) está en la lista, así que va con être y el participio concuerda con Marie: Marie est née.",
  },
  p7: {
    pregunta: "¿Está rester en la lista de verbos que van con être?",
    respuestas: ["Sí", "No"],
    correcta: 0,
    conLista: true,
    razon:
      "Sí: rester (quedarse) está en la lista, aunque no indica movimiento. Por eso conviene aprender la lista: no se deduce del significado. Nous sommes resté(e)s.",
  },
  p8: {
    pregunta: "¿Él sube, o sube algo?",
    respuestas: ["Él sube", "Sube algo"],
    correcta: 1,
    razon:
      "Sube algo: «les valises» responde a «¿qué sube?». Cuando monter lleva algo que se sube, va con avoir: il a monté les valises.",
  },
};

// Lista que se muestra con las pistas de tipo «¿está en la lista?». No es exhaustiva y lo dice.
export const listaEtre = {
  verbos: [
    "aller", "venir", "arriver", "partir", "entrer", "sortir", "monter", "descendre", "passer",
    "rentrer", "retourner", "tomber", "rester", "naître", "mourir", "devenir", "revenir",
  ],
  notas: [
    "Además, todos los verbos pronominales (se lever, se réveiller…). Hay algunos verbos más, menos frecuentes.",
    "No es una lista de «verbos de movimiento»: marcher, courir o voyager van con avoir.",
    "Algunos, como sortir, monter, descendre, passer, rentrer o retourner, van con avoir cuando llevan algo que se saca, se sube, se baja… (il a monté les valises).",
  ],
};

// Nombres propios de esta opción para los tipos: evitan «verbos de movimiento» como criterio.
export const nombreTipo: Record<TipoVideo, string> = {
  T1: "Verbos de la lista de être",
  T2: "Verbos pronominales",
  T3: "Verbos que cambian de auxiliar",
};

// Caso nuevo opcional, uno por tipo (los de la opción 2). La explicación de T1 se reescribe aquí para
// no presentar la lista como «de movimiento».
const ejemploDe = (id: "C1" | "C2" | "C3") => confusiones.find((c) => c.id === id)!.ejemploNuevo;

export const casoNuevo: Record<TipoVideo, Pregunta> = {
  T1: {
    ...ejemploDe("C1"),
    explicacion: "Arriver está en la lista de verbos con être → être, con concordancia en plural.",
  },
  T2: ejemploDe("C2"),
  T3: ejemploDe("C3"),
};
