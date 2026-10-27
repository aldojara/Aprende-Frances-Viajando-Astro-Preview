// Unidad 4 · Pronombres complemento (COD, COI, y, en). Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/04_pronombres-complemento/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 2: quien ya vive en Quebec).
// Sustituye a la lección antigua de src/content/content/pronombres-complemento.md (que queda como ficha para los listados).
import type { Unidad } from "./tipos";

export const pronombresComplemento: Unidad = {
  slug: "pronombres-complemento",
  titulo: "Pronombres complemento COD, COI, y, en",
  nivel: ["A2", "B1", "B2"],
  minutos: 15,
  objetivo: "Habla con fluidez sin repetir personas, cosas ni lugares.",

  ideaClave: {
    titulo: "Donde el español calla, el francés pone y o en",
    texto:
      "Le, la y lui funcionan casi como lo, la y le del español. Lo nuevo son y y en: el francés los necesita justo donde el español no dice nada.",
    tabla: [
      { es: "¿Vas a la oficina? — Sí, voy.", fr: "Tu vas au bureau ? — Oui, j'y vais." },
      { es: "¿Tienes hijos? — Sí, tengo dos.", fr: "Tu as des enfants ? — Oui, j'en ai deux." },
    ],
    etiquetaFr: "Francés",
    nota: "Por lo general, el pronombre va antes del verbo, también en passé composé: je l'ai vu (no «j'ai le vu»).",
  },

  usos: [
    { titulo: "Sin preposición: le, la, les", ejemplo: "Le formulaire ? Je le remplis ce soir." },
    { titulo: "à + persona: lui, leur", ejemplo: "Ma propriétaire ? Je lui écris demain." },
    { titulo: "Un lugar (à, en, chez…) o à + cosa: y", ejemplo: "Le Plateau ? J'y habite depuis mars." },
    { titulo: "de + cosa o una cantidad: en", ejemplo: "Des collègues sympathiques ? J'en ai trois." },
  ],
  usosNota:
    "Después de otra preposición (avec, pour, chez, sans) y con penser à + persona, se usa el pronombre tónico: avec lui, je pense à elle.",

  formacion: {
    regla: "Por lo general, el pronombre va antes del verbo que completa: el verbo conjugado o, si completa a un infinitivo, el infinitivo.",
    formula: ["Sujeto", "(ne) + pronombre", "Verbo (+ pas)"],
    tablaTitulo: "Tabla de pronombres por persona",
    tabla: {
      cabeceras: ["Persona", "Sin preposición (COD)", "à + persona (COI)", "Después de otra preposición"],
      filas: [
        ["je", "me (m')", "me (m')", "moi"],
        ["tu", "te (t')", "te (t')", "toi"],
        ["il", "le (l')", "lui", "lui"],
        ["elle", "la (l')", "lui", "elle"],
        ["nous", "nous", "nous", "nous"],
        ["vous", "vous", "vous", "vous"],
        ["ils / elles", "les", "leur", "eux / elles"],
      ],
    },
    notasTitulo: "Dónde va el pronombre",
    notas: [
      "En passé composé, antes del auxiliar: je l'ai vu, je lui ai écrit, j'y suis allé.",
      "Con aller, pouvoir, vouloir o devoir + infinitivo, antes del infinitivo: je vais l'appeler, je peux y aller.",
      "Con faire + infinitivo, el pronombre va delante de faire, o de su auxiliar en passé composé: je le fais réparer, je l'ai fait réparer.",
      "Con laisser, voir o entendre + infinitivo, si el pronombre es la persona que hace la acción, va delante de ese verbo (o de su auxiliar en passé composé): je la laisse partir, je la vois travailler, je l'entends chanter.",
      "En el imperativo afirmativo va después: appelle-le (detalle en las tablas de consulta).",
    ],
  },

  consulta: [
    {
      titulo: "¿Con lui o con le? Verbos que confunden",
      tabla: {
        cabeceras: ["Con lui / leur (à + persona)", "Con le / la / les (sin preposición)"],
        filas: [
          ["parler à", "appeler"],
          ["téléphoner à", "aider"],
          ["écrire à", "attendre"],
          ["répondre à", "écouter"],
          ["demander à", "chercher"],
          ["dire à", "inviter"],
          ["donner à", "remercier"],
        ],
      },
    },
    {
      titulo: "El imperativo",
      puntos: [
        "En el imperativo afirmativo, el pronombre va después, con guion: appelle-le, vas-y, prends-en.",
        "Me y te pasan a moi y toi: appelle-moi.",
        "En negativo vuelve delante: ne l'appelle pas.",
      ],
    },
    {
      titulo: "Verbos con de: en",
      puntos: [
        "avoir besoin de, avoir envie de, avoir peur de, parler de, s'occuper de, se souvenir de, rêver de.",
        "Tu as envie de sortir ce soir ? — Oui, j'en ai envie.",
        "Con personas se usa de + pronombre tónico: Tu parles de Mélanie ? — Oui, je parle d'elle.",
      ],
    },
  ],

  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica de pronombres complemento: repasa la elección del auxiliar en el passé composé.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "eleccion", titulo: "¿Qué pronombre?", descripcion: "Le, lui o el pronombre tónico." },
    { id: "y-en", titulo: "Lo que el español calla", descripcion: "Los casos donde el francés necesita y o en." },
    { id: "forma", titulo: "Posición y forma" },
  ],

  errores: [
    {
      grupo: "eleccion",
      corto: "Je lui appelle",
      mal: "Ma mère ? Je lui appelle tous les dimanches.",
      bien: "Ma mère ? Je l'appelle tous les dimanches.",
      porque: "«Llamar a alguien» lleva «a» en español, pero appeler va sin preposición: le, la, les.",
    },
    {
      grupo: "eleccion",
      corto: "Je le téléphone",
      mal: "Mon propriétaire ? Je le téléphone ce soir.",
      bien: "Mon propriétaire ? Je lui téléphone ce soir.",
      porque: "Téléphoner lleva à: téléphoner à quelqu'un → lui. El error viene de pensar en «lo llamo».",
    },
    {
      grupo: "eleccion",
      corto: "Je lui pense",
      mal: "Ma grand-mère ? Je lui pense souvent.",
      bien: "Ma grand-mère ? Je pense souvent à elle.",
      porque: "Con penser à, la persona no se cambia por lui: se dice à + pronombre tónico (à elle, à lui).",
    },
    {
      grupo: "y-en",
      corto: "Oui, je vais",
      mal: "Tu vas au bureau demain ? — Oui, je vais.",
      bien: "Tu vas au bureau demain ? — Oui, j'y vais.",
      porque: "En español basta «Sí, voy»; en francés, aller necesita el lugar: y.",
    },
    {
      grupo: "y-en",
      corto: "Oui, j'ai deux",
      mal: "Tu as des enfants ? — Oui, j'ai deux.",
      bien: "Tu as des enfants ? — Oui, j'en ai deux.",
      porque: "«Sí, tengo dos»: el francés retoma la cosa con en antes del verbo.",
    },
    {
      grupo: "y-en",
      corto: "Oui, j'ai besoin",
      mal: "Tu as besoin de ton passeport ? — Oui, j'ai besoin.",
      bien: "Tu as besoin de ton passeport ? — Oui, j'en ai besoin.",
      porque: "Avoir besoin de necesita su complemento; si ya se sabe cuál es, se retoma con en (de + cosa → en).",
    },
    {
      grupo: "forma",
      corto: "Je le vais appeler",
      mal: "Je le vais appeler demain.",
      bien: "Je vais l'appeler demain.",
      porque: "En español puede ir antes o después («lo voy a llamar», «voy a llamarlo»); en francés, con aller, pouvoir, vouloir o devoir, va antes del infinitivo.",
    },
    {
      grupo: "forma",
      corto: "Je le ai envoyé",
      mal: "Le dossier ? Je le ai envoyé hier.",
      bien: "Le dossier ? Je l'ai envoyé hier.",
      porque: "Le y la se apostrofan delante de vocal o de h muda: l'ai, l'aime, l'habite.",
    },
    {
      grupo: "forma",
      corto: "La lettre, je l'ai écrit",
      mal: "La lettre ? Je l'ai écrit hier.",
      bien: "La lettre ? Je l'ai écrite hier.",
      porque: "Con le, la, les antes de avoir, el participio concuerda: la lettre → écrite.",
    },
  ],

  ejemplos: {
    titulo: "Mis primeras semanas en Montreal",
    intro: "La historia la cuenta Andrés, que vive desde hace poco en el Plateau.",
    items: [
      { fr: "Le Plateau ? J'y habite depuis le mois de mars.", es: "¿El Plateau? Vivo ahí desde marzo.", nota: "y = un lugar" },
      { fr: "Mon appartement, je l'ai trouvé sur Internet.", es: "Mi departamento lo encontré en internet.", nota: "l' antes del auxiliar" },
      { fr: "Ma voisine s'appelle Mélanie. Je la vois tous les matins dans l'escalier.", es: "Mi vecina se llama Mélanie. La veo todas las mañanas en la escalera.", nota: "la = sin preposición" },
      { fr: "Je lui ai demandé où était le supermarché le plus proche.", es: "Le pregunté dónde estaba el supermercado más cercano.", nota: "demander à → lui" },
      { fr: "Le métro ? Je le prends tous les jours pour aller au travail.", es: "¿El metro? Lo tomo todos los días para ir al trabajo.", nota: "le = una cosa" },
      { fr: "Mes parents, je les appelle le dimanche.", es: "A mis papás los llamo los domingos.", nota: "appeler, sin à → les" },
      { fr: "Je leur raconte tout : le travail, le froid, la ville.", es: "Les cuento todo: el trabajo, el frío, la ciudad.", nota: "raconter à → leur" },
      { fr: "Des collègues sympathiques ? J'en ai déjà trois.", es: "¿Compañeros simpáticos? Ya tengo tres.", nota: "en + cantidad" },
      { fr: "L'hiver ? J'en parle tout le temps avec Jean-François.", es: "¿El invierno? Hablo de eso todo el tiempo con Jean-François.", nota: "parler de → en" },
      { fr: "Le Mont-Royal ? Nous y sommes allés samedi.", es: "¿El Mont-Royal? Fuimos el sábado.", nota: "y en passé composé" },
      { fr: "Ma sœur arrive en décembre. Je vais l'attendre à l'aéroport.", es: "Mi hermana llega en diciembre. Voy a esperarla en el aeropuerto.", nota: "antes del infinitivo" },
      { fr: "Ma grand-mère ? Je pense souvent à elle.", es: "¿Mi abuela? Pienso seguido en ella.", nota: "penser à + pronombre tónico" },
    ],
  },

  aplicacion: {
    consigna: "Responde 6 preguntas sobre tu semana con una respuesta corta, sin repetir el nombre: cámbialo por un pronombre.",
    requisitos: [
      "le, la o les",
      "lui o leur",
      "y",
      "en",
      "un pronombre en passé composé",
      "un pronombre con un infinitivo (je vais le…)",
    ],
    modelo:
      "Tu prends le métro ? — Oui, je le prends tous les jours. Tu parles à tes voisins ? — Oui, je leur parle un peu. Tu vas au parc le dimanche ? — Oui, j'y vais avec mes enfants. Tu as des amis francophones ? — Oui, j'en ai deux. Tu as vu le film ? — Non, je ne l'ai pas vu. Tu vas appeler ta mère ? — Oui, je vais l'appeler ce soir.",
  },

  resumen: [
    "Sin preposición → le, la, l', les (y me, te, nous, vous).",
    "à + persona → lui, leur. Ojo: appeler, aider y attendre van sin à: je l'appelle.",
    "Un lugar o à + cosa → y; de + cosa o una cantidad → en. Donde el español calla («sí, voy», «tengo dos»), el francés los necesita.",
    "Por lo general, el pronombre va antes del verbo, del auxiliar o del infinitivo que completa: je l'ai vu, je vais l'appeler. Casos aparte: el imperativo afirmativo (appelle-le) y faire + infinitivo (je le fais réparer).",
  ],

  relacionados: [
    { titulo: "Pronombres tónicos", url: "/gramatica/pronombres-tonicos/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Passé composé vs imparfait", url: "/gramatica/passe-compose-vs-imparfait/" },
    { titulo: "Discours indirect", url: "/gramatica/discours-indirect/" },
  ],
};
