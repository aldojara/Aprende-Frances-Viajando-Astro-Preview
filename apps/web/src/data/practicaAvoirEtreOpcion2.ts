// Laboratorio · Opción 2 «Práctica por fases»: 3 parejas de contraste y laboratorio de errores.
// BORRADOR: todo el francés debe revisarlo y aprobarlo el autor antes de publicar.
import type { Pregunta, TipoId } from "./practicaAvoirEtre";

export type ConfusionId = "C1" | "C2" | "C3";

export type Confusion = {
  id: ConfusionId;
  tipo: TipoId; // sesión del reto que la trabaja
  nombre: string;
  pareja: [Pregunta, Pregunta];
  comparacion: [string, string];
  pregunta: string;
  razones: { texto: string; correcta: boolean; respuesta: string }[];
  ejemploNuevo: Pregunta;
};

export const confusiones: Confusion[] = [
  {
    id: "C1",
    tipo: "T1",
    nombre: "verbos de movimiento frente a los demás",
    pareja: [
      {
        id: "o2-1a",
        enunciado: "Samedi, ___ au marché.",
        opciones: ["je suis allé(e)", "j'ai allé"],
        correcta: 0,
        explicacion: "Aller es un verbo de movimiento de la lista: va con être.",
      },
      {
        id: "o2-1b",
        enunciado: "Au marché, ___ des fraises.",
        opciones: ["je suis acheté(e)", "j'ai acheté"],
        correcta: 1,
        explicacion: "Acheter (comprar) no es de movimiento ni pronominal: va con avoir.",
      },
    ],
    comparacion: ["Je suis allé(e) au marché.", "J'ai acheté des fraises."],
    pregunta: "¿Qué explica que una frase use être y la otra avoir?",
    razones: [
      {
        texto: "Aller está en la lista de verbos de movimiento; acheter no.",
        correcta: true,
        respuesta: "Exacto. El auxiliar depende del verbo: los de la lista (aller, venir, partir…) van con être.",
      },
      {
        texto: "La segunda frase dice qué se compró, por eso cambia.",
        correcta: false,
        respuesta: "No es eso: acheter va con avoir siempre, diga o no qué se compró. Lo que decide es el verbo.",
      },
      {
        texto: "En español también cambia: «he ido» y «he comprado».",
        correcta: false,
        respuesta: "En español ambos usan «haber». Por eso confunde: el francés distingue y el español no.",
      },
    ],
    ejemploNuevo: {
      id: "o2-1n",
      enunciado: "Ils ___ en retard à la réunion.",
      opciones: ["ont arrivé", "sont arrivés"],
      correcta: 1,
      explicacion: "Arriver es de la lista de movimiento → être, con concordancia en plural.",
    },
  },
  {
    id: "C2",
    tipo: "T2",
    nombre: "verbos pronominales",
    pareja: [
      {
        id: "o2-2a",
        enunciado: "Ce matin, elle ___ à sept heures.",
        opciones: ["s'est levée", "a levé"],
        correcta: 0,
        explicacion: "Se lever (levantarse) es pronominal: todos los pronominales van con être.",
      },
      {
        id: "o2-2b",
        enunciado: "En classe, elle ___ la main.",
        opciones: ["s'est levée", "a levé"],
        correcta: 1,
        explicacion: "Lever la main (levantar la mano) no es pronominal: va con avoir.",
      },
    ],
    comparacion: ["Elle s'est levée à sept heures.", "Elle a levé la main."],
    pregunta: "¿Qué explica el cambio de auxiliar?",
    razones: [
      {
        texto: "Se lever es pronominal (ella se levanta a sí misma); lever la main no lo es.",
        correcta: true,
        respuesta: "Exacto. Con «se» (me, te, se, nous, vous) el verbo es pronominal y va con être.",
      },
      {
        texto: "Lever es de movimiento, así que a veces va con être.",
        correcta: false,
        respuesta: "Lever no está en la lista de movimiento. Lo que pone être es el «se» del pronominal.",
      },
      {
        texto: "Depende de la hora o del momento del día.",
        correcta: false,
        respuesta: "El momento no influye. Mira si el verbo lleva «se».",
      },
    ],
    ejemploNuevo: {
      id: "o2-2n",
      enunciado: "Nous ___ tôt pour prendre le train.",
      opciones: ["nous sommes réveillé(e)s", "avons réveillé"],
      correcta: 0,
      explicacion: "Se réveiller es pronominal → être, con concordancia en plural.",
    },
  },
  {
    id: "C3",
    tipo: "T3",
    nombre: "verbos que cambian de auxiliar",
    pareja: [
      {
        id: "o2-3a",
        enunciado: "Hier soir, Léa ___ avec ses collègues.",
        opciones: ["est sortie", "a sorti"],
        correcta: 0,
        explicacion: "Léa misma sale; no hay «¿qué?» → être, con concordancia femenina.",
      },
      {
        id: "o2-3b",
        enunciado: "Léa ___ son passeport de son sac.",
        opciones: ["est sortie", "a sorti"],
        correcta: 1,
        explicacion: "Saca «¿qué?» → son passeport (complemento directo) → avoir.",
      },
    ],
    comparacion: ["Léa est sortie avec ses collègues.", "Léa a sorti son passeport."],
    pregunta: "¿Qué explica que el mismo verbo, sortir, cambie de auxiliar?",
    razones: [
      {
        texto: "Con complemento directo (sacar algo), sortir va con avoir; si es ella quien sale, con être.",
        correcta: true,
        respuesta: "Exacto. Pregúntate «¿sale ella o saca algo?». Lo mismo pasa con monter, descendre, passer, rentrer y retourner.",
      },
      {
        texto: "Depende de si el pasado es reciente o lejano.",
        correcta: false,
        respuesta: "El tiempo transcurrido no influye. Lo que cambia es si el verbo lleva complemento directo.",
      },
      {
        texto: "Sortir admite los dos auxiliares con el mismo sentido.",
        correcta: false,
        respuesta: "No: cada auxiliar cambia el sentido. «Est sortie» = salió; «a sorti» = sacó algo.",
      },
    ],
    ejemploNuevo: {
      id: "o2-3n",
      enunciado: "Il ___ les valises du train.",
      opciones: ["est descendu", "a descendu"],
      correcta: 1,
      explicacion: "Baja «¿qué?» → les valises → avoir.",
    },
  },
];

// Paso 1: las 6 frases en el orden de las parejas.
export const paso1: Pregunta[] = confusiones.flatMap((confusion) => confusion.pareja);
