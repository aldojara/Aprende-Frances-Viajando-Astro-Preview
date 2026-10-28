// Unidad 2 · Imparfait. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/02_imparfait/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 2: quien ya vive en Quebec).
import type { Unidad } from "./tipos";

export const imparfait: Unidad = {
  slug: "imparfait",
  titulo: "Imparfait",
  nivel: ["A2", "B1"],
  minutos: 12,
  objetivo: "Describe cómo era tu vida y lo que hacías antes.",

  ideaClave: {
    titulo: "«Vivía» y «hacía» se dicen con el imparfait",
    texto:
      "El imparfait funciona casi igual que el pretérito imperfecto del español. La dificultad está en otra parte: elegir entre imparfait y passé composé cuando cuentas algo.",
    tabla: [
      { es: "Vivía en Bogotá.", fr: "J'habitais à Bogotá." },
      { es: "Hacía mucho frío.", fr: "Il faisait très froid." },
    ],
    etiquetaFr: "Francés (imparfait)",
    nota: "Una primera ayuda, la regla de la película: el imparfait presenta el escenario, en desarrollo (cómo era, qué pasaba); el passé composé, lo que pasa, como un hecho completo (qué pasó).",
  },

  videoTeoria: {
    url: "https://www.youtube.com/watch?v=Gw8ORoN_NBo",
    titulo: "Domina el imparfait: el tiempo de los recuerdos en francés",
  },

  usos: [
    { titulo: "Una costumbre del pasado", ejemplo: "Le samedi, j'allais au marché Jean-Talon.", nota: "«Iba» cada sábado." },
    { titulo: "Una descripción: lugar, tiempo, personas, edad", ejemplo: "Il faisait froid et la rue était vide." },
    {
      titulo: "Una acción en curso que otra interrumpe",
      ejemplo: "Je dormais quand le téléphone a sonné.",
      nota: "La acción que interrumpe va en passé composé.",
    },
    { titulo: "Un estado o un sentimiento", ejemplo: "J'avais peur de parler au téléphone." },
  ],
  usosNota: "Para un hecho presentado como terminado («fui», «llegué», «me asusté») se usa el passé composé, aunque sea un sentimiento: j'ai eu peur.",

  formacion: {
    regla: "Raíz de «nous» en presente (sin -ons) + -ais, -ais, -ait, -ions, -iez, -aient.",
    formula: ["Raíz de «nous» en presente (sin -ons)", "-ais, -ais, -ait, -ions, -iez, -aient"],
    tablaTitulo: "Tabla de conjugación: parler, finir y être",
    tabla: {
      cabeceras: ["Sujeto", "parler (nous parlons)", "finir (nous finissons)", "être (irregular)"],
      filas: [
        ["je / j'", "je parlais", "je finissais", "j'étais"],
        ["tu", "tu parlais", "tu finissais", "tu étais"],
        ["il / elle / on", "il parlait", "il finissait", "il était"],
        ["nous", "nous parlions", "nous finissions", "nous étions"],
        ["vous", "vous parliez", "vous finissiez", "vous étiez"],
        ["ils / elles", "ils parlaient", "ils finissaient", "ils étaient"],
      ],
    },
    notasTitulo: "Detalles de conjugación y ortografía",
    notas: [
      "Être es el único irregular: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Falloir y pleuvoir no tienen forma con nous: il fallait, il pleuvait.",
      "Ejemplo: nous prenons → pren- → je prenais.",
      "-ger y -cer: je mangeais, je commençais (la e y la ç desaparecen con nous y vous: nous mangions, nous commencions).",
      "Verbos en -ier: doble i con nous y vous (nous étudiions, vous étudiiez).",
      "Pronunciación: las formas parlais, parlait y parlaient se pronuncian igual; solo nous y vous se distinguen (parlions, parliez).",
    ],
  },

  consulta: [
    {
      titulo: "Verbos frecuentes en imparfait",
      tabla: {
        cabeceras: ["Infinitivo", "Imparfait"],
        filas: [
          ["avoir", "j'avais"], ["être", "j'étais"], ["faire", "je faisais"], ["aller", "j'allais"],
          ["prendre", "je prenais"], ["venir", "je venais"], ["pouvoir", "je pouvais"], ["vouloir", "je voulais"],
          ["devoir", "je devais"], ["savoir", "je savais"], ["voir", "je voyais"], ["dire", "je disais"],
          ["lire", "je lisais"], ["écrire", "j'écrivais"], ["boire", "je buvais"], ["vivre", "je vivais"],
          ["connaître", "je connaissais"], ["mettre", "je mettais"], ["pleuvoir", "il pleuvait"],
          ["neiger", "il neigeait"], ["falloir", "il fallait"],
        ],
      },
    },
    {
      titulo: "¿Imparfait o passé composé?",
      puntos: [
        "Imparfait: escenario, costumbre, acción en curso, estado o sentimiento. Responde a «¿cómo era?» y «¿qué pasaba?».",
        "Passé composé: un hecho o un conjunto de hechos presentado como terminado (una vez, varias veces o uno detrás de otro). Responde a «¿qué pasó?».",
        "Juntos: Je regardais la télé quand tu es arrivé.",
        "Pistas de imparfait: tous les jours, chaque, d'habitude, souvent, toujours, avant, à l'époque, quand j'étais petit(e).",
        "Pistas de passé composé: hier, un jour, soudain, tout à coup, ce matin, la semaine dernière.",
        "Son pistas, no reglas: Hier, il faisait froid (una descripción) · Pendant mon séjour, j'ai pris le métro tous les jours (un conjunto terminado). Elige el tiempo por cómo presentas la situación: en desarrollo o completa.",
      ],
    },
    {
      titulo: "Expresiones de tiempo",
      tabla: {
        cabeceras: ["Francés", "Español"],
        filas: [
          ["avant · autrefois", "antes · antiguamente"],
          ["à l'époque", "en esa época"],
          ["quand j'étais petit(e)", "cuando era niño(a)"],
          ["d'habitude", "normalmente"],
          ["tous les jours · chaque samedi", "todos los días · cada sábado"],
          ["le lundi", "los lunes"],
          ["souvent · toujours · parfois", "a menudo · siempre · a veces"],
          ["pendant que", "mientras"],
        ],
      },
    },
  ],

  // Aún no hay práctica propia del imparfait (bloque E). La práctica enlazada es la de los auxiliares del passé
  // composé: el texto no promete practicar el imparfait.
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica del imparfait: repasa la elección del auxiliar en el passé composé, que usarás al combinar los dos tiempos.",
    url: "/practica/avoir-o-etre/",
  },

  gruposErrores: [
    { id: "tiempo", titulo: "¿Imparfait o passé composé?", descripcion: "Qué pasado usar.", tiposPractica: ["T5"] },
    { id: "formacion", titulo: "Cómo se forma", descripcion: "La raíz y la ortografía." },
    { id: "traduccion", titulo: "Lo que el español dice distinto" },
  ],

  errores: [
    {
      grupo: "tiempo",
      corto: "Hábito en passé composé",
      mal: "Quand j'habitais à Bogotá, je suis allé(e) au marché tous les samedis.",
      bien: "Quand j'habitais à Bogotá, j'allais au marché tous les samedis.",
      porque:
        "En español sería «iba», pero al pensar en una acción terminada se elige el passé composé. Tous les, chaque y d'habitude suelen pedir imparfait.",
      tipoPractica: "T5",
    },
    {
      grupo: "tiempo",
      corto: "Il a fait froid (escena)",
      mal: "Quand je suis arrivé(e), il a fait très froid.",
      bien: "Quand je suis arrivé(e), il faisait très froid.",
      porque: "El frío es el escenario de la llegada: descripción → imparfait («hacía»).",
      tipoPractica: "T5",
    },
    {
      grupo: "tiempo",
      corto: "J'allais (una sola vez)",
      mal: "Samedi dernier, j'allais au cinéma. (para «el sábado pasado fui al cine»)",
      bien: "Samedi dernier, je suis allé(e) au cinéma.",
      porque: "Después de aprender el imparfait se usa de más. «Fui», una vez, en un momento concreto → passé composé.",
      tipoPractica: "T5",
    },
    {
      grupo: "formacion",
      corto: "Je finisais",
      mal: "Je finisais mes devoirs.",
      bien: "Je finissais mes devoirs.",
      porque: "El error es partir de «je finis» (finis-); la raíz sale de «nous finissons» (finiss-), con doble s.",
    },
    {
      grupo: "formacion",
      corto: "Je mangais · commencais",
      mal: "Je mangais. · Je commencais.",
      bien: "Je mangeais. · Je commençais.",
      porque: "Sin la e o la ç cambia el sonido: mangais sonaría «mangué».",
    },
    {
      grupo: "formacion",
      corto: "Nous étudions (pasado)",
      mal: "Nous étudions ensemble. (para «estudiábamos»)",
      bien: "Nous étudiions ensemble.",
      porque: "Con -ier, el imparfait lleva doble i con nous y vous; con una sola i es presente.",
    },
    {
      grupo: "traduccion",
      corto: "Il était (por «había»)",
      mal: "Il était beaucoup de neige.",
      bien: "Il y avait beaucoup de neige.",
      porque: "«Había» (que existía) se dice il y avait, no il était.",
    },
    {
      grupo: "traduccion",
      corto: "J'étais mangeant",
      mal: "J'étais mangeant quand tu as appelé.",
      bien: "Je mangeais quand tu as appelé.",
      porque: "«Estaba comiendo» no se traduce palabra por palabra: el imparfait solo ya lo dice (o j'étais en train de manger).",
    },
    {
      grupo: "traduccion",
      corto: "J'allais à appeler",
      mal: "J'allais à appeler ma mère.",
      bien: "J'allais appeler ma mère.",
      porque: "«Iba a llamar» lleva «a» en español; en francés, aller + infinitivo, sin preposición.",
    },
  ],

  ejemplos: {
    titulo: "Mis primeros meses en Montreal",
    intro: "La historia la cuenta Andrés, que llegó de Bogotá con su familia. El imparfait describe cómo era todo; el passé composé, lo que pasó.",
    items: [
      { fr: "Quand je suis arrivé à Montréal, je ne parlais pas bien français.", es: "Cuando llegué a Montreal, no hablaba bien francés.", nota: "llegada (passé composé) + situación (imparfait)" },
      { fr: "Nous habitions dans un petit appartement à Côte-des-Neiges.", es: "Vivíamos en un departamento pequeño en Côte-des-Neiges.", nota: "nous habitons → habit-" },
      { fr: "Il faisait très froid et il neigeait presque tous les jours.", es: "Hacía mucho frío y nevaba casi todos los días.", nota: "descripción del tiempo" },
      { fr: "Le matin, je prenais le métro à sept heures.", es: "En las mañanas tomaba el metro a las siete.", nota: "costumbre; nous prenons → pren-" },
      { fr: "Le soir, j'allais à mon cours de francisation.", es: "En las noches iba a mi curso de francisation (el curso de francés para personas recién llegadas a Quebec).", nota: "costumbre" },
      { fr: "Mes enfants allaient à l'école du quartier.", es: "Mis hijos iban a la escuela del barrio.", nota: "ils → -aient" },
      { fr: "Ma voisine, Mélanie, était très gentille.", es: "Mi vecina, Mélanie, era muy amable.", nota: "être → ét-" },
      { fr: "Elle nous aidait avec les papiers.", es: "Nos ayudaba con los trámites.", nota: "costumbre" },
      { fr: "Un jour, pendant que je faisais les courses, j'ai perdu mon portefeuille.", es: "Un día, mientras hacía las compras, perdí mi billetera.", nota: "en curso (imparfait) + lo que pasó (passé composé)" },
      { fr: "J'avais peur de parler au téléphone.", es: "Me daba miedo hablar por teléfono.", nota: "sentimiento" },
      { fr: "Au début, je ne comprenais pas l'accent québécois.", es: "Al principio, no entendía el acento quebequense.", nota: "nous comprenons → compren-" },
      { fr: "Avant, à Bogotá, je travaillais dans une banque.", es: "Antes, en Bogotá, trabajaba en un banco.", nota: "avant → imparfait" },
    ],
  },

  aplicacion: {
    consigna: "Describe cómo era tu vida hace cinco años en 5 frases.",
    requisitos: [
      "una descripción (c'était, il y avait)",
      "una costumbre (d'habitude, tous les jours)",
      "un estado o un sentimiento (j'avais, j'étais)",
      "una acción en curso durante la cual pasa algo (je lisais quand il est arrivé · pendant que je lisais, il est arrivé)",
    ],
    modelo:
      "Il y a cinq ans, j'habitais à Lima, dans un quartier où il y avait beaucoup de bruit. D'habitude, je prenais le bus pour aller au travail. J'étais souvent fatigué(e). Le dimanche, je mangeais chez mes parents. Un jour, pendant que je travaillais, mon chef m'a proposé un nouveau poste.",
  },

  resumen: [
    "Imparfait = raíz de «nous» + -ais, -ais, -ait, -ions, -iez, -aient.",
    "Être es el único irregular: j'étais.",
    "Imparfait para el escenario, las costumbres, lo que estaba pasando y los sentimientos.",
    "Passé composé para lo que se presenta como terminado (una vez o varias); los dos se combinan al contar algo.",
    "«Había» = il y avait; «iba a + verbo» = j'allais + infinitivo.",
  ],

  relacionados: [
    { titulo: "Participe présent", url: "/gramatica/participe-present/" },
    { titulo: "Gérondif", url: "/gramatica/gerondif/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Passé composé vs imparfait", url: "/gramatica/passe-compose-vs-imparfait/" },
  ],
};
