// Unidad 1 · Passé composé. Contenido del documento fuente aprobado el 26 oct 2026
// (Documentos_Proyecto/05_Unidades/01_passe-compose/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (27 oct 2026).
import type { Unidad } from "./tipos";

export const passeCompose: Unidad = {
  slug: "passe-compose",
  titulo: "Passé composé",
  nivel: ["A2"],
  minutos: 12,
  objetivo: "Cuenta lo que hiciste: tu día, tu semana, lo que ya lograste.",

  ideaClave: {
    titulo: "«Comí» y «he comido» se dicen igual",
    texto:
      "En español hay dos pasados para una acción terminada: «comí» y «he comido». En el francés de todos los días, los dos se dicen igual, con el passé composé.",
    tabla: [
      { es: "Ayer llamé a mi mamá.", fr: "Hier, j'ai appelé ma mère." },
      { es: "Hoy he llamado a mi mamá.", fr: "Aujourd'hui, j'ai appelé ma mère." },
    ],
    nota: "Existe otro tiempo, el passé simple, pero solo aparece en libros y textos escritos formales. Para hablar y escribir mensajes, el passé composé es el pasado de las acciones terminadas.",
  },

  videoTeoria: {
    url: "https://www.youtube.com/watch?v=QoonSm52zcc",
    titulo: "Passé composé en francés: guía completa (avoir, être y concordancia)",
  },

  usos: [
    { titulo: "Una acción terminada en un momento concreto", ejemplo: "Hier, j'ai passé mon examen de français.", nota: "Passer un examen es presentarlo, no aprobarlo." },
    { titulo: "Una acción terminada que importa ahora", ejemplo: "J'ai perdu mes clés !", nota: "Y ahora no las tengo." },
    {
      titulo: "Una serie de acciones, una detrás de otra",
      ejemplo: "Je suis arrivé à l'aéroport, j'ai récupéré mes valises et j'ai pris le bus.",
    },
    { titulo: "Una experiencia (alguna vez, nunca, ya)", ejemplo: "Tu as déjà vu la neige ?" },
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
      "Monter, descendre, sortir, rentrer, retourner y passer van con avoir cuando llevan complemento directo (responden a «¿qué?»): Je suis monté(e). / J'ai monté la valise. · Je suis passé(e) par Québec. / J'ai passé une semaine à Québec.",
      "Con être, el participio concuerda con el sujeto: -e si es femenino y -s si es plural. Il est parti. · Elle est partie. · Ils sont partis. · Elles sont parties. · Elle s'est perdue.",
      "Con avoir, el participio no concuerda con el sujeto: Elles ont visité le musée.",
    ],
  },

  consulta: [
    {
      titulo: "Participios irregulares que más se usan",
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
        "Ne… pas rodea al auxiliar: Je n'ai pas compris la question. · Elle n'est pas venue.",
        "Con pronominales, ne va delante del pronombre: Je ne me suis pas levé(e) tôt.",
        "Otras negaciones: Je ne suis jamais allé(e) à Québec. · Je n'ai rien acheté. · Je n'ai pas encore trouvé d'appartement.",
        "Preguntas: Tu as pris le métro ? (entonación) · Est-ce que vous êtes allés à la réunion ? · Avez-vous rempli le formulaire ? (formal)",
        "Adverbios cortos (déjà, bien, mal, beaucoup, trop, souvent, vraiment) entre el auxiliar y el participio: J'ai déjà envoyé les documents. · J'ai bien dormi.",
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
      mal: "J'ai allé à Montréal.",
      bien: "Je suis allé(e) à Montréal.",
      porque: "En español todo va con «haber». En francés, varios verbos de movimiento (aller, venir, arriver, partir…) van con être.",
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
      mal: "Elle est allé au cours de français.",
      bien: "Elle est allée au cours de français.",
      porque: "En español el participio no cambia («ella ha ido»). Con être, en francés sí cambia.",
      tipoPractica: "T4",
    },
    {
      grupo: "participio",
      corto: "Elles ont visitées",
      mal: "Elles ont visitées l'appartement.",
      bien: "Elles ont visité l'appartement.",
      porque: "Se aplica la concordancia también con avoir, por exceso de celo.",
      tipoPractica: "T4",
    },
    {
      grupo: "orden",
      corto: "Je n'ai compris pas",
      mal: "Je n'ai compris pas la question.",
      bien: "Je n'ai pas compris la question.",
      porque: "En español «no» va delante de todo. En francés, ne… pas rodea al auxiliar.",
    },
    {
      grupo: "orden",
      corto: "Déjà j'ai envoyé",
      mal: "Déjà j'ai envoyé les documents. · J'ai envoyé déjà les documents.",
      bien: "J'ai déjà envoyé les documents.",
      porque: "En español «ya» va delante («ya envié»); en francés, déjà va entre el auxiliar y el participio.",
    },
  ],

  ejemplos: {
    titulo: "Mi primera semana en Montreal",
    intro: "La historia la cuenta Daniela, que llegó a Montreal con su esposo: por eso algunos participios van en femenino.",
    items: [
      { fr: "La semaine dernière, je suis arrivée à Montréal avec mon mari.", es: "La semana pasada llegué a Montreal con mi esposo.", nota: "arriver → être; concordancia femenina" },
      { fr: "Nous avons pris le bus de l'aéroport jusqu'au centre-ville.", es: "Tomamos el autobús del aeropuerto hasta el centro.", nota: "prendre → pris" },
      { fr: "Nous sommes allés directement chez ma cousine.", es: "Fuimos directo a la casa de mi prima.", nota: "nous = ella y su esposo → masculino plural" },
      { fr: "On a ouvert un compte à la banque.", es: "Abrimos una cuenta en el banco.", nota: "on = nosotros (oral); ouvrir → ouvert" },
      { fr: "J'ai acheté des bottes d'hiver.", es: "Compré botas de invierno.", nota: "-er → -é" },
      { fr: "Il a neigé tout l'après-midi.", es: "Nevó toda la tarde.", nota: "neiger → neigé (como pleuvoir → il a plu)" },
      { fr: "Je me suis perdue dans le métro.", es: "Me perdí en el metro.", nota: "pronominal → être" },
      { fr: "Nous sommes restés une semaine chez elle.", es: "Nos quedamos una semana en su casa.", nota: "rester → être" },
      { fr: "Nous avons passé une soirée magnifique avec ses voisins.", es: "Pasamos una noche increíble con sus vecinos.", nota: "passer + algo → avoir" },
      { fr: "Je n'ai pas encore trouvé de travail.", es: "Todavía no encontré trabajo.", nota: "ne… pas encore alrededor del auxiliar (y de en vez de un o des)" },
      { fr: "Mon mari a perdu sa carte de métro !", es: "¡Mi esposo perdió su tarjeta del metro!", nota: "resultado en el presente" },
      { fr: "Tu as déjà goûté la poutine ?", es: "¿Ya probaste la poutine?", nota: "déjà entre el auxiliar y el participio" },
    ],
  },

  aplicacion: {
    consigna: "Cuenta tu semana pasada en 5 frases.",
    requisitos: ["un verbo con être", "un verbo pronominal", "una negación", "una expresión de tiempo"],
    modelo:
      "Lundi, je suis allé(e) à mon cours de français. J'ai pris le métro à 8 h. Je me suis inscrit(e) à la bibliothèque. Je n'ai pas fini mes devoirs. Samedi soir, je suis rentré(e) tard.",
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
