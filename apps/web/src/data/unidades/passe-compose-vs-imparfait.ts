// Unidad 6 · Passé composé vs imparfait. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/06_passe-compose-vs-imparfait/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 2: quien ya vive en Quebec).
// Sustituye a la lección antigua de src/content/content/passe-compose-vs-imparfait.md (que queda como ficha para los listados).
// Sin práctica propia (bloque E). La tarjeta enlaza ¿Avoir o être? diciendo lo que practica de verdad (el auxiliar),
// sin prometer la elección entre los dos tiempos; no hay botones por grupo de errores (decisión del usuario, 27 oct 2026).
import type { Unidad } from "./tipos";

export const passeComposeVsImparfait: Unidad = {
  slug: "passe-compose-vs-imparfait",
  titulo: "Passé composé vs imparfait",
  nivel: ["A2", "B1"],
  minutos: 12,
  objetivo: "Cuenta algo que te pasó: elige entre el hecho que avanza y el escenario que lo rodea.",

  ideaClave: {
    titulo: "Si distingues «llegué» y «llegaba», ya tienes la base",
    texto:
      "El español también tiene dos pasados para contar: el pretérito perfecto simple («llegué») y el pretérito imperfecto («llegaba»). Muchas veces corresponden al passé composé y al imparfait. Lo que decide es cómo presentas la acción: completa o en desarrollo.",
    tabla: [
      { es: "Llegué a Montreal en enero.", fr: "Je suis arrivé(e) à Montréal en janvier." },
      { es: "Hacía mucho frío.", fr: "Il faisait très froid." },
    ],
    etiquetaFr: "Francés",
    nota: "Ojo: una etapa con duración cerrada suele ir en passé composé, igual que «viví» en español: j'ai habité trois ans à Lima.",
  },

  usos: [
    {
      titulo: "El escenario y el hecho que pasa",
      ejemplo: "Il neigeait quand je suis arrivé(e) à Montréal.",
      nota: "Escenario en imparfait; hecho en passé composé.",
    },
    { titulo: "Una costumbre y una vez concreta", ejemplo: "Le samedi, j'allais au marché. Samedi dernier, je suis allé(e) au cinéma." },
    { titulo: "Algo en curso y lo que lo interrumpe", ejemplo: "Je cuisinais quand ma sœur a appelé." },
    { titulo: "Una etapa con fin", ejemplo: "J'ai habité trois ans à Lima.", nota: "Duración cerrada: passé composé." },
  ],
  usosNota: "En un relato, los dos tiempos se combinan: el imparfait describe lo que rodea a los hechos; el passé composé hace avanzar la historia.",

  formacion: {
    regla: "Passé composé: auxiliar (avoir o être) en presente + participio. Imparfait: raíz de «nous» en presente + -ais, -ais, -ait, -ions, -iez, -aient (excepción: être → j'étais).",
    pasosTitulo: "¿Passé composé o imparfait? En 3 preguntas",
    pasos: [
      {
        pregunta: "¿Describes el escenario, sin límites en el tiempo: el lugar, el clima, la hora, cómo era alguien o algo?",
        respuesta: "imparfait",
      },
      {
        pregunta: "¿Es una costumbre que describes como hábito, o algo que estaba pasando en ese momento?",
        respuesta: "imparfait",
        detalle: "Si cuentas acciones repetidas como un conjunto terminado, van en passé composé: Pendant mon séjour, j'ai pris le métro tous les jours.",
      },
      {
        pregunta: "¿Es un hecho que pasó y terminó (una vez, un número de veces que cuentas, como deux fois, o uno detrás de otro)?",
        respuesta: "passé composé",
        detalle: "Si dudas, piensa en el español: «llegué» suele ser passé composé y «llegaba», imparfait. Funciona muchas veces, no siempre.",
      },
    ],
    notasTitulo: "Para elegir bien",
    notas: [
      "Las expresiones de tiempo son pistas, no reglas: Hier, il faisait froid (una descripción) · La semaine dernière, je travaillais quand tu as appelé (una acción en curso).",
      "Cuando quand une algo que estaba pasando con algo que lo interrumpe, lo primero va en imparfait y lo segundo, en passé composé: Je dormais quand le téléphone a sonné.",
    ],
  },

  consulta: [
    {
      titulo: "Los mismos verbos en los dos tiempos (con je)",
      tabla: {
        cabeceras: ["Verbo", "Passé composé", "Imparfait"],
        filas: [
          ["être", "j'ai été", "j'étais"],
          ["avoir", "j'ai eu", "j'avais"],
          ["faire", "j'ai fait", "je faisais"],
          ["aller", "je suis allé(e)", "j'allais"],
          ["prendre", "j'ai pris", "je prenais"],
          ["venir", "je suis venu(e)", "je venais"],
        ],
      },
    },
    {
      titulo: "Verbos que cambian de sentido (según el contexto)",
      tabla: {
        cabeceras: ["Verbo", "Imparfait", "Passé composé"],
        filas: [
          ["savoir", "je savais · sabía", "j'ai su · supe, me enteré"],
          ["pouvoir", "je pouvais · podía", "j'ai pu · pude, logré"],
          ["vouloir", "je voulais · quería", "j'ai voulu · quise (a veces: intenté)"],
          ["connaître", "je connaissais · conocía", "j'ai connu · conocí (a alguien); según el contexto, viví"],
          ["avoir", "j'avais · tenía", "j'ai eu · tuve, recibí"],
        ],
      },
      puntos: ["Son los sentidos más frecuentes; el contexto decide: j'ai connu des hivers difficiles (viví inviernos difíciles)."],
    },
    {
      titulo: "Pistas frecuentes (orientan, no deciden)",
      tabla: {
        cabeceras: ["Suelen ir con imparfait", "Suelen ir con passé composé"],
        filas: [
          ["avant · à l'époque · autrefois", "hier · ce matin · la semaine dernière"],
          ["d'habitude · tous les jours · souvent", "un jour · soudain · tout à coup"],
          ["pendant que · quand j'étais petit(e)", "pendant trois ans · deux fois"],
        ],
      },
    },
  ],

  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica de passé composé vs imparfait: repasa la elección del auxiliar en el passé composé, que usarás al contar en pasado.",
    url: "/practica/avoir-o-etre/",
  },

  gruposErrores: [
    { id: "eleccion", titulo: "¿Qué pasado uso?", descripcion: "El hecho que avanza o el escenario que lo rodea." },
    { id: "espanol", titulo: "Lo que el español ya distingue", descripcion: "Supe y sabía, pude y podía." },
    { id: "formas", titulo: "Las formas al combinar los dos tiempos" },
  ],

  errores: [
    {
      grupo: "eleccion",
      corto: "Costumbre en passé composé",
      mal: "Avant, je suis allé(e) au travail en bus tous les jours. (para describir cómo era tu rutina)",
      bien: "Avant, j'allais au travail en bus tous les jours.",
      porque: "«Iba» todos los días es una costumbre que describe cómo era tu vida: imparfait. El passé composé es posible si presentas la etapa cerrada: pendant dix ans, je suis allé(e) au travail en bus.",
    },
    {
      grupo: "eleccion",
      corto: "Escenario en passé composé",
      mal: "Quand je suis sorti(e), il a fait nuit.",
      bien: "Quand je suis sorti(e), il faisait nuit.",
      porque: "La noche es el escenario de la salida, no un hecho que pasa: imparfait («era de noche»).",
    },
    {
      grupo: "eleccion",
      corto: "Hechos en serie en imparfait",
      mal: "Hier soir, je regardais un film et après je me couchais. (para contar lo que hiciste)",
      bien: "Hier soir, j'ai regardé un film et après je me suis couché(e).",
      porque: "«Vi una película y después me acosté»: son hechos uno detrás de otro que hacen avanzar la historia → passé composé.",
    },
    {
      grupo: "eleccion",
      corto: "Duración cerrada en imparfait",
      mal: "J'habitais trois ans à Lima. (para «viví tres años en Lima»)",
      bien: "J'ai habité trois ans à Lima.",
      porque: "Con una duración cerrada, la etapa se presenta completa: passé composé, como «viví» en español.",
    },
    {
      grupo: "espanol",
      corto: "Je savais (por «supe»)",
      mal: "Hier, je savais que j'avais le poste. (para «ayer supe que tenía el puesto»)",
      bien: "Hier, j'ai appris que j'avais le poste. (o j'ai su)",
      porque: "«Supe» (me enteré) es un momento: passé composé. Je savais significa «sabía».",
    },
    {
      grupo: "espanol",
      corto: "Je pouvais (por «pude»)",
      mal: "Finalement, je pouvais trouver un appartement. (para «al final pude encontrar un departamento»)",
      bien: "Finalement, j'ai pu trouver un appartement.",
      porque: "«Pude» (lo logré) va en passé composé; je pouvais significa «podía» (era posible).",
    },
    {
      grupo: "formas",
      corto: "Je suis allais",
      mal: "Je suis allais au marché.",
      bien: "J'allais au marché. (o je suis allé(e) au marché)",
      porque: "Se mezclan los dos tiempos: el imparfait no lleva auxiliar; el passé composé lleva auxiliar + participio.",
    },
    {
      grupo: "formas",
      corto: "Elle est arrivé",
      mal: "Elle est arrivé pendant que je dormais.",
      bien: "Elle est arrivée pendant que je dormais.",
      porque: "Al combinar los tiempos se olvida la concordancia: con être, en los verbos no pronominales, el participio concuerda con el sujeto.",
    },
  ],

  ejemplos: {
    titulo: "Mi primer día de invierno en Montreal",
    intro: "La historia la cuenta José Luis, que llegó de Medellín en pleno invierno.",
    items: [
      { fr: "C'était le 15 janvier et il faisait moins vingt degrés.", es: "Era el 15 de enero y hacía veinte grados bajo cero.", nota: "escenario → imparfait" },
      { fr: "Je suis arrivé à l'aéroport à six heures du matin.", es: "Llegué al aeropuerto a las seis de la mañana.", nota: "hecho → passé composé" },
      { fr: "Je n'avais pas de vrai manteau d'hiver.", es: "No tenía un abrigo de invierno de verdad.", nota: "estado → imparfait" },
      { fr: "Mon ami Jean-François m'attendait à la sortie.", es: "Mi amigo Jean-François me esperaba a la salida.", nota: "en curso → imparfait" },
      { fr: "Il m'a prêté son écharpe et nous avons pris un taxi.", es: "Me prestó su bufanda y tomamos un taxi.", nota: "hechos en serie → passé composé" },
      { fr: "Pendant que nous avancions, il neigeait sans arrêt.", es: "Mientras avanzábamos, nevaba sin parar.", nota: "dos acciones en curso → imparfait" },
      { fr: "Quand nous sommes arrivés chez lui, sa femme préparait une soupe.", es: "Cuando llegamos a su casa, su esposa preparaba una sopa.", nota: "hecho + lo que estaba pasando" },
      { fr: "Ce soir-là, j'ai su que j'allais aimer cette ville.", es: "Esa noche supe que me iba a gustar esta ciudad.", nota: "j'ai su = supe (un momento)" },
      { fr: "Le premier mois, j'ai habité chez eux.", es: "El primer mes viví en su casa.", nota: "duración cerrada → passé composé" },
      { fr: "Tous les matins, je prenais le métro à la station Jean-Talon.", es: "Todas las mañanas tomaba el metro en la estación Jean-Talon.", nota: "costumbre → imparfait" },
      { fr: "Un jour, je me suis trompé de ligne et je suis arrivé en retard.", es: "Un día me equivoqué de línea y llegué tarde.", nota: "hechos → passé composé" },
      { fr: "Au début, je ne comprenais pas tout, mais j'ai pu m'inscrire à un cours de français.", es: "Al principio no entendía todo, pero pude inscribirme en un curso de francés.", nota: "j'ai pu = pude, logré" },
    ],
  },

  aplicacion: {
    consigna: "Cuenta en 6 frases un día que recuerdes bien: una llegada, una entrevista o un primer día de trabajo o de clases.",
    requisitos: [
      "el escenario (c'était, il faisait, il y avait)",
      "algo que estaba pasando (imparfait)",
      "tres hechos en orden (passé composé)",
      "una frase con quand: lo que estaba pasando y lo que llega",
      "j'ai su o j'ai pu con el sentido de «supe» o «pude»",
    ],
    modelo:
      "C'était un lundi et il pleuvait. J'avais un peu peur. Je suis arrivé(e) au bureau à neuf heures. Ma cheffe m'a présenté(e) à l'équipe et nous avons pris un café. Je lisais les documents quand le téléphone a sonné. Le soir, j'ai su que j'allais bien m'entendre avec mes collègues.",
  },

  resumen: [
    "Passé composé: un hecho presentado como terminado (una vez, un número de veces que cuentas o uno detrás de otro). Imparfait: el escenario, las costumbres descritas como hábito y lo que estaba pasando.",
    "Muchas veces coincide con el español: «llegué» → passé composé; «llegaba» → imparfait.",
    "Las expresiones de tiempo son pistas, no reglas. Una duración cerrada suele ir en passé composé: j'ai habité trois ans à Lima.",
    "Con quand, si un hecho interrumpe algo en curso: lo que estaba pasando, en imparfait; lo que llega, en passé composé.",
    "Savoir, pouvoir y connaître cambian de sentido, como en español: je savais (sabía) · j'ai su (supe).",
  ],

  relacionados: [
    { titulo: "Plus-que-parfait", url: "/gramatica/plus-que-parfait/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
  ],
};
