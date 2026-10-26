// Unidad 1 · Passé composé. Contenido del documento fuente aprobado el 26 oct 2026
// (Documentos_Proyecto/2026-10-26_Fuente_passe-compose.md). Español neutro latinoamericano.
import type { Unidad } from "./tipos";

export const passeCompose: Unidad = {
  slug: "passe-compose",
  titulo: "Passé composé",
  nivel: ["A2"],
  minutos: 12,
  objetivo: "Cuenta lo que hiciste: un viaje, un fin de semana, un día.",

  ideaClave: {
    titulo: "«Comí» y «he comido» se dicen igual",
    texto:
      "En español hay dos pasados para una acción terminada: «comí» y «he comido». En el francés de todos los días, los dos se dicen igual, con el passé composé.",
    tabla: [
      { es: "Ayer comí crepes.", fr: "Hier, j'ai mangé des crêpes." },
      { es: "Hoy he comido crepes.", fr: "Aujourd'hui, j'ai mangé des crêpes." },
    ],
    nota: "Existe otro tiempo, el passé simple, pero solo aparece en libros y textos escritos formales. Para hablar y escribir mensajes, el passé composé es el pasado de las acciones terminadas.",
  },

  videoTeoria: {
    url: "https://www.youtube.com/watch?v=QoonSm52zcc",
    titulo: "Passé composé en francés: guía completa (avoir, être y concordancia)",
  },

  usos: [
    { titulo: "Una acción terminada en un momento concreto", ejemplo: "Hier, nous avons visité Rennes." },
    { titulo: "Una acción terminada que importa ahora", ejemplo: "J'ai perdu mon billet !", nota: "Y ahora no lo tengo." },
    {
      titulo: "Una serie de acciones, una detrás de otra",
      ejemplo: "Je suis arrivé à la gare, j'ai acheté un billet et j'ai pris le train.",
    },
    { titulo: "Una experiencia (alguna vez, nunca, ya)", ejemplo: "Tu as déjà mangé une galette ?" },
  ],
  usosNota:
    "Para describir el escenario o una costumbre del pasado («era», «hacía», «solía») no se usa el passé composé, sino el imparfait.",

  formacion: {
    regla: "Auxiliar (avoir o être) en presente + participio pasado.",
    tabla: {
      cabeceras: ["Sujeto", "visiter (con avoir)", "partir (con être)"],
      filas: [
        ["je / j'", "j'ai visité", "je suis parti(e)"],
        ["tu", "tu as visité", "tu es parti(e)"],
        ["il / elle / on", "il a visité · elle a visité", "il est parti · elle est partie"],
        ["nous", "nous avons visité", "nous sommes parti(e)s"],
        ["vous", "vous avez visité", "vous êtes parti(e)(s)"],
        ["ils / elles", "ils ont visité · elles ont visité", "ils sont partis · elles sont parties"],
      ],
    },
    pasos: [
      {
        pregunta: "¿El verbo es pronominal (se lever, se promener, se perdre…)?",
        respuesta: "être",
      },
      {
        pregunta: "¿Es uno de los 17 verbos de movimiento o cambio de estado?",
        respuesta: "être",
        detalle:
          "aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, rentrer, passer, devenir, revenir, y sus derivados (repartir, ressortir, remonter…)",
      },
      { pregunta: "¿Ninguna de las dos?", respuesta: "avoir", detalle: "La gran mayoría de los verbos." },
    ],
    notas: [
      "Monter, descendre, sortir, rentrer, retourner y passer van con avoir cuando llevan complemento directo (responden a «¿qué?»): Je suis monté(e). / J'ai monté la valise. · Je suis passé(e) par Lyon. / J'ai passé une semaine à Lyon.",
      "Con être, el participio concuerda con el sujeto: -e si es femenino y -s si es plural. Il est parti. · Elle est partie. · Ils sont partis. · Elles sont parties. · Elle s'est perdue.",
      "Con avoir, el participio no concuerda con el sujeto: Elles ont visité le musée.",
    ],
  },

  consulta: [
    {
      titulo: "Participios irregulares que más se usan al viajar",
      tabla: {
        cabeceras: ["Infinitivo", "Participio"],
        filas: [
          ["avoir", "eu"], ["être", "été"], ["faire", "fait"], ["prendre", "pris"],
          ["mettre", "mis"], ["voir", "vu"], ["pouvoir", "pu"], ["vouloir", "voulu"],
          ["devoir", "dû"], ["venir", "venu"], ["boire", "bu"], ["lire", "lu"],
          ["écrire", "écrit"], ["ouvrir", "ouvert"], ["recevoir", "reçu"], ["connaître", "connu"],
          ["vivre", "vécu"], ["dire", "dit"], ["pleuvoir", "plu"], ["naître", "né"],
        ],
      },
      puntos: ["Regulares: -er → -é (visiter → visité) · -ir → -i (finir → fini) · -re → -u (attendre → attendu)."],
    },
    {
      titulo: "Negación, preguntas y adverbios",
      puntos: [
        "Ne… pas rodea al auxiliar: Je n'ai pas visité le musée. · Elle n'est pas venue.",
        "Con pronominales, ne va delante del pronombre: Je ne me suis pas levé(e) tôt.",
        "Otras negaciones: Je ne suis jamais allé à Paris. · Je n'ai rien acheté. · Je n'ai pas encore réservé l'hôtel.",
        "Preguntas: Tu as pris le train ? (entonación) · Est-ce que vous êtes allés à la plage ? · Avez-vous visité le château ? (formal)",
        "Adverbios cortos (déjà, bien, mal, beaucoup, trop, souvent, vraiment) entre el auxiliar y el participio: J'ai déjà visité Lyon. · J'ai bien dormi.",
        "Las expresiones de tiempo (hier, ce matin…) van al principio o al final de la frase.",
      ],
    },
    {
      titulo: "Expresiones de tiempo",
      tabla: {
        cabeceras: ["Francés", "Español"],
        filas: [
          ["hier · avant-hier", "ayer · anteayer"],
          ["ce matin", "esta mañana"],
          ["le week-end dernier", "el fin de semana pasado"],
          ["la semaine dernière · l'année dernière", "la semana pasada · el año pasado"],
          ["l'été dernier", "el verano pasado"],
          ["il y a deux jours", "hace dos días"],
          ["en 2023", "en 2023"],
          ["déjà · jamais · pas encore", "ya · nunca · todavía no"],
        ],
      },
    },
  ],

  practica: {
    titulo: "¿Avoir o être?",
    texto: "¿Dudas entre avoir y être? Practica con frases reales y corrección al momento.",
    url: "/practica/avoir-o-etre/",
  },

  gruposErrores: [
    { id: "tiempo", titulo: "¿Qué pasado uso?", descripcion: "El tiempo y las expresiones de tiempo.", tiposPractica: ["T5"] },
    { id: "auxiliar", titulo: "El auxiliar: ¿avoir o être?", tiposPractica: ["T1", "T2"] },
    { id: "participio", titulo: "El participio", descripcion: "Cómo se forma y cuándo concuerda.", tiposPractica: ["T4"] },
    { id: "orden", titulo: "El orden de las palabras" },
  ],

  errores: [
    {
      grupo: "tiempo",
      corto: "«je mangeais» por «comí»",
      mal: "Hier, je mangeais une pizza. (para decir «ayer comí»)",
      bien: "Hier, j'ai mangé une pizza.",
      porque:
        "Se cree que el passé composé es solo «he comido» y se busca otro tiempo para «comí». La frase existe, pero significa «estaba comiendo»: no equivale a «comí».",
      tipoPractica: "T5",
    },
    {
      grupo: "tiempo",
      corto: "«fait deux jours» por «hace dos días»",
      mal: "Je suis arrivé(e) fait deux jours.",
      bien: "Je suis arrivé(e) il y a deux jours.",
      porque: "Traducción literal de «hace dos días».",
    },
    {
      grupo: "auxiliar",
      corto: "J'ai allé",
      mal: "J'ai allé à Nice.",
      bien: "Je suis allé(e) à Nice.",
      porque: "En español todo va con «haber». En francés, los verbos de movimiento van con être.",
      tipoPractica: "T1",
    },
    {
      grupo: "auxiliar",
      corto: "Je m'ai levé",
      mal: "Je m'ai levé tard.",
      bien: "Je me suis levé(e) tard.",
      porque: "«Me he levantado» lleva «haber»; los pronominales franceses van siempre con être.",
      tipoPractica: "T2",
    },
    {
      grupo: "participio",
      corto: "J'ai prendu · Il a pleuvé",
      mal: "J'ai prendu le bus. · Il a pleuvé.",
      bien: "J'ai pris le bus. · Il a plu.",
      porque: "Se forma el participio como si fuera regular.",
    },
    {
      grupo: "participio",
      corto: "Elle est allé",
      mal: "Elle est allé au marché.",
      bien: "Elle est allée au marché.",
      porque: "En español el participio no cambia («ella ha ido»). Con être, en francés sí cambia.",
      tipoPractica: "T4",
    },
    {
      grupo: "participio",
      corto: "Elles ont visitées",
      mal: "Elles ont visitées le musée.",
      bien: "Elles ont visité le musée.",
      porque: "Se aplica la concordancia también con avoir, por exceso de celo.",
      tipoPractica: "T4",
    },
    {
      grupo: "orden",
      corto: "Je n'ai visité pas",
      mal: "Je n'ai visité pas Rennes.",
      bien: "Je n'ai pas visité Rennes.",
      porque: "En español «no» va delante de todo. En francés, ne… pas rodea al auxiliar.",
    },
    {
      grupo: "orden",
      corto: "Déjà j'ai visité",
      mal: "Déjà j'ai visité Lyon. · J'ai visité déjà Lyon.",
      bien: "J'ai déjà visité Lyon.",
      porque: "En español «ya» va delante («ya visité»); en francés, déjà va entre el auxiliar y el participio.",
    },
  ],

  ejemplos: {
    titulo: "Un fin de semana en Bretaña",
    intro: "La historia la cuenta una mujer: por eso algunos participios van en femenino.",
    items: [
      { fr: "Le week-end dernier, je suis partie en Bretagne avec mon frère.", es: "El fin de semana pasado me fui a Bretaña con mi hermano.", nota: "partir → être; concordancia femenina" },
      { fr: "Nous avons pris le train à Paris.", es: "Tomamos el tren en París.", nota: "prendre → pris" },
      { fr: "Nous sommes arrivés à Rennes vers midi.", es: "Llegamos a Rennes a eso del mediodía.", nota: "nous = ella y su hermano → masculino plural" },
      { fr: "On a loué des vélos.", es: "Alquilamos bicicletas.", nota: "on = nosotros (oral)" },
      { fr: "J'ai goûté une galette de sarrasin.", es: "Probé una galette de trigo sarraceno.", nota: "-er → -é" },
      { fr: "Il a plu tout l'après-midi.", es: "Llovió toda la tarde.", nota: "pleuvoir → plu" },
      { fr: "Je me suis perdue dans la vieille ville.", es: "Me perdí en el centro histórico.", nota: "pronominal → être" },
      { fr: "Nous sommes restés deux nuits à Saint-Malo.", es: "Nos quedamos dos noches en Saint-Malo.", nota: "rester → être" },
      { fr: "Nous avons passé une soirée magnifique sur la plage.", es: "Pasamos una noche increíble en la playa.", nota: "passer + algo → avoir" },
      { fr: "Je n'ai pas vu le Mont-Saint-Michel.", es: "No vi el Mont-Saint-Michel.", nota: "ne… pas alrededor del auxiliar" },
      { fr: "Mon frère a perdu son billet de retour !", es: "¡Mi hermano perdió su boleto de regreso!", nota: "resultado en el presente" },
      { fr: "Tu as déjà visité la Bretagne ?", es: "¿Ya visitaste Bretaña?", nota: "déjà entre el auxiliar y el participio" },
    ],
  },

  aplicacion: {
    consigna: "Cuenta tu último viaje o tu último fin de semana en 5 frases.",
    requisitos: ["un verbo con être", "un verbo pronominal", "una negación", "una expresión de tiempo"],
    modelo:
      "Samedi, je suis allé(e) à Séville. J'ai pris le bus de 8 h. Je me suis promené(e) dans le centre. Je n'ai pas visité l'Alcázar. Je suis rentré(e) dimanche soir.",
  },

  resumen: [
    "Passé composé = auxiliar en presente + participio.",
    "«Comí» y «he comido» → passé composé en los dos casos.",
    "Être con pronominales y con los 17 verbos de movimiento (salvo si llevan complemento directo); avoir con todos los demás.",
    "Con être, el participio concuerda con el sujeto; con avoir, no.",
    "Ne… pas rodea al auxiliar; los adverbios cortos van entre el auxiliar y el participio.",
  ],

  relacionados: [
    { titulo: "Passé composé vs imparfait", url: "/gramatica/passe-compose-vs-imparfait/", estado: "disponible" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/", estado: "proximamente" },
  ],
};
