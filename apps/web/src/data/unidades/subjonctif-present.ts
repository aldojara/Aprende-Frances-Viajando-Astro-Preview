// Unidad 3 · Subjonctif présent. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/03_subjonctif-present/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 1: quien se prepara para emigrar).
// Sustituye a la lección antigua de src/content/content/subjonctif-present.md (que queda como ficha para los listados).
import type { Unidad } from "./tipos";

export const subjonctifPresent: Unidad = {
  slug: "subjonctif-present",
  titulo: "Subjonctif présent",
  nivel: ["B1", "B2", "C1"],
  minutos: 15,
  objetivo: "Expresa lo que necesitas, quieres, temes o esperas que pase.",

  ideaClave: {
    titulo: "El subjuntivo francés se parece mucho al español",
    texto:
      "Muchos usos frecuentes coinciden con el español: «Quiero que vengas» = «Je veux que tu viennes». Presta atención a las diferencias.",
    tabla: [
      { es: "Quiero que vengas.", fr: "Je veux que tu viennes." },
      { es: "Es necesario que envíe mis documentos.", fr: "Il faut que j'envoie mes documents." },
    ],
    etiquetaFr: "Francés (subjonctif)",
    nota: "Cuidado: para un hecho futuro, «cuando llegue» no lleva subjuntivo en francés, sino futuro: quand j'arriverai.",
  },

  usos: [
    { titulo: "Querer o pedir algo de otra persona", ejemplo: "Mon professeur veut que je pratique tous les jours." },
    { titulo: "Necesidad u obligación", ejemplo: "Il faut que je trouve un appartement." },
    { titulo: "Un sentimiento, una duda o una posibilidad", ejemplo: "Il est possible que l'entretien soit en français." },
    {
      titulo: "Después de pour que, avant que, bien que…",
      ejemplo: "Je révise pour que l'examen se passe bien.",
    },
  ],
  usosNota: "Con vouloir y otros verbos de voluntad (aimer, préférer…), si quien quiere y quien hace la acción son la misma persona, se usa el infinitivo: Je veux partir (no «je veux que je parte»). Con otras construcciones no siempre es así: Bien que je sois fatiguée, je continue.",

  formacion: {
    regla: "je, tu, il, ils: raíz de «ils» en presente (sin -ent) + -e, -es, -e, -ent. nous, vous: raíz de «nous» en presente (sin -ons) + -ions, -iez.",
    formula: ["que + sujeto", "Raíz de «ils» (je, tu, il, ils) o de «nous» (nous, vous)", "-e, -es, -e, -ions, -iez, -ent"],
    tablaTitulo: "Tabla de conjugación: parler, finir y prendre",
    tabla: {
      cabeceras: ["Sujeto", "parler (ils parlent)", "finir (ils finissent)", "prendre (ils prennent)"],
      filas: [
        ["que je / j'", "que je parle", "que je finisse", "que je prenne"],
        ["que tu", "que tu parles", "que tu finisses", "que tu prennes"],
        ["qu'il / elle / on", "qu'il parle", "qu'il finisse", "qu'il prenne"],
        ["que nous", "que nous parlions", "que nous finissions", "que nous prenions"],
        ["que vous", "que vous parliez", "que vous finissiez", "que vous preniez"],
        ["qu'ils / elles", "qu'ils parlent", "qu'ils finissent", "qu'ils prennent"],
      ],
    },
    notasTitulo: "Las dos raíces y las formas irregulares",
    notas: [
      "je, tu, il, ils: ils prennent → prenn- → que je prenne, qu'ils prennent.",
      "nous, vous: nous prenons → pren- → que nous prenions, que vous preniez.",
      "Être, avoir, aller, faire, pouvoir, savoir, vouloir y falloir, entre otros, no siguen esta regla del todo: están en la tabla de consulta de abajo.",
    ],
  },

  consulta: [
    {
      titulo: "Formas que conviene memorizar",
      tabla: {
        cabeceras: ["Infinitivo", "que je…", "que nous…"],
        filas: [
          ["être", "que je sois", "que nous soyons"],
          ["avoir", "que j'aie", "que nous ayons"],
          ["aller", "que j'aille", "que nous allions"],
          ["faire", "que je fasse", "que nous fassions"],
          ["pouvoir", "que je puisse", "que nous puissions"],
          ["savoir", "que je sache", "que nous sachions"],
          ["vouloir", "que je veuille", "que nous voulions"],
          ["venir", "que je vienne", "que nous venions"],
          ["devoir", "que je doive", "que nous devions"],
          ["voir", "que je voie", "que nous voyions"],
          ["falloir", "qu'il faille", "—"],
          ["pleuvoir", "qu'il pleuve", "—"],
        ],
      },
    },
    {
      titulo: "¿Subjuntivo o indicativo?",
      puntos: [
        "Con subjuntivo: vouloir que, il faut que, avoir peur que, être content(e) que, douter que, il est possible que, pour que, avant que, bien que, à condition que.",
        "Con indicativo (en frases afirmativas): espérer que, penser que, croire que, il est probable que. Après que también va con indicativo.",
        "Para un hecho futuro, quand va con futuro, no con subjuntivo (cuando llegue → quand j'arriverai).",
        "La negación puede cambiar el modo, igual que en español: Je pense qu'il vient («creo que viene») → Je ne pense pas qu'il vienne («no creo que venga»).",
      ],
    },
    {
      titulo: "Expresiones frecuentes",
      tabla: {
        cabeceras: ["Francés", "Español"],
        filas: [
          ["il faut que…", "es necesario que… / tengo que…"],
          ["je veux que… · j'aimerais que…", "quiero que… · me gustaría que…"],
          ["je suis content(e) que…", "me alegra que…"],
          ["j'ai peur que…", "tengo miedo de que…"],
          ["je doute que…", "dudo que…"],
          ["il est possible que…", "es posible que…"],
          ["pour que… · avant que… · bien que…", "para que… · antes de que… · aunque…"],
        ],
      },
    },
  ],

  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica de subjonctif présent: repasa la elección del auxiliar en el passé composé.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "modo", titulo: "¿Subjuntivo o no?", descripcion: "Dónde el español y el francés no coinciden." },
    { id: "regulares", titulo: "Raíces y terminaciones", descripcion: "De dónde sale la raíz y qué terminación lleva." },
    { id: "irregulares", titulo: "Irregulares" },
  ],

  errores: [
    {
      grupo: "modo",
      corto: "Quand je sois",
      mal: "Quand je sois à Montréal, je t'appellerai.",
      bien: "Quand je serai à Montréal, je t'appellerai.",
      porque: "«Cuando esté» lleva subjuntivo en español; en francés, para un hecho futuro, quand + futuro.",
    },
    {
      grupo: "modo",
      corto: "J'espère que tu viennes",
      mal: "J'espère que tu viennes.",
      bien: "J'espère que tu viendras. (o que tu viens)",
      porque: "«Espero que vengas» lleva subjuntivo; espérer va con indicativo.",
    },
    {
      grupo: "modo",
      corto: "Probable + subjuntivo",
      mal: "Il est probable qu'il pleuve.",
      bien: "Il est probable qu'il pleuvra.",
      porque: "«Es probable que llueva» lleva subjuntivo; il est probable que va con indicativo (il est possible que, en cambio, con subjuntivo).",
    },
    {
      grupo: "modo",
      corto: "Je veux que je parte",
      mal: "Je veux que je parte demain.",
      bien: "Je veux partir demain.",
      porque: "Con vouloir y el mismo sujeto se usa el infinitivo, igual que «quiero irme mañana». Ocurre por querer usar el subjuntivo en todas partes.",
    },
    {
      grupo: "regulares",
      corto: "Que je finis",
      mal: "Il faut que je finis le formulaire.",
      bien: "Il faut que je finisse le formulaire.",
      porque: "Se usa el presente de indicativo (je finis) en lugar del subjuntivo. La raíz del subjuntivo sale de ils finissent: que je finisse.",
    },
    {
      grupo: "regulares",
      corto: "Que nous prenons",
      mal: "Il faut que nous prenons rendez-vous.",
      bien: "Il faut que nous prenions rendez-vous.",
      porque: "Con nous y vous, la raíz sale de nous prenons (pren-) y la terminación es -ions, -iez: que nous prenions.",
    },
    {
      grupo: "irregulares",
      corto: "Que je suis",
      mal: "Il faut que je suis à l'heure.",
      bien: "Il faut que je sois à l'heure.",
      porque: "Être es irregular: que je sois.",
    },
    {
      grupo: "irregulares",
      corto: "Que je fais",
      mal: "Il faut que je fais mes papiers.",
      bien: "Il faut que je fasse mes papiers.",
      porque: "Faire es irregular: que je fasse.",
    },
    {
      grupo: "irregulares",
      corto: "Que vous pouvez",
      mal: "Je parle lentement pour que vous pouvez comprendre.",
      bien: "Je parle lentement pour que vous puissiez comprendre.",
      porque: "Pouvoir es irregular: que vous puissiez.",
    },
  ],

  ejemplos: {
    titulo: "Antes de irme a Quebec",
    intro: "La historia la cuenta Mariana, que se prepara en Guadalajara para mudarse a Montreal; por eso algunos adjetivos van en femenino.",
    items: [
      { fr: "Il faut que j'envoie tous mes documents avant la fin du mois.", es: "Tengo que enviar todos mis documentos antes de fin de mes.", nota: "il faut que + subjuntivo" },
      { fr: "Mon professeur veut que je pratique l'oral tous les jours.", es: "Mi profesor quiere que practique la expresión oral todos los días.", nota: "vouloir que" },
      { fr: "Ma mère a peur que je sois seule là-bas.", es: "Mi mamá tiene miedo de que esté sola allá.", nota: "être → que je sois" },
      { fr: "Je suis contente que mon frère vienne avec moi.", es: "Me alegra que mi hermano venga conmigo.", nota: "venir → qu'il vienne" },
      { fr: "Il est possible que l'entretien soit en français.", es: "Es posible que la entrevista sea en francés.", nota: "posibilidad" },
      { fr: "Avant que je parte, nous allons faire une fête.", es: "Antes de que me vaya, vamos a hacer una fiesta.", nota: "avant que" },
      { fr: "Je révise mes verbes pour que l'examen se passe bien.", es: "Repaso mis verbos para que el examen salga bien.", nota: "pour que" },
      { fr: "Il faut que nous trouvions un appartement près du métro.", es: "Tenemos que encontrar un departamento cerca del metro.", nota: "nous → -ions" },
      { fr: "Mon amie de Montréal doute que je puisse trouver un logement en une semaine.", es: "Mi amiga de Montreal duda que pueda encontrar vivienda en una semana.", nota: "pouvoir → que je puisse" },
      { fr: "J'espère que tout ira bien.", es: "Espero que todo salga bien.", nota: "espérer + indicativo (no subjuntivo)" },
      { fr: "Quand je serai à Montréal, je t'appellerai.", es: "Cuando esté en Montreal, te voy a llamar.", nota: "quand + futuro (no subjuntivo)" },
      { fr: "Bien que ce soit difficile, je suis très motivée.", es: "Aunque sea difícil, estoy muy motivada.", nota: "bien que" },
    ],
  },

  aplicacion: {
    consigna: "Escribe 5 consejos o deseos para alguien que se prepara para un cambio importante (un examen, una mudanza, un trabajo nuevo).",
    requisitos: [
      "il faut que",
      "je veux que o j'aimerais que",
      "un sentimiento (je suis content(e) que, j'ai peur que)",
      "pour que, avant que o bien que",
      "una frase con espérer (con indicativo)",
    ],
    modelo:
      "Il faut que tu pratiques le français tous les jours. J'aimerais que tu m'appelles quand tu arriveras. Je suis content(e) que tu aies cette chance. Prépare tes documents avant qu'il soit trop tard. J'espère que tu seras heureux (heureuse) là-bas.",
  },

  resumen: [
    "Subjuntivo = que + raíz de «ils» (je, tu, il, ils) o de «nous» (nous, vous) en presente + -e, -es, -e, -ions, -iez, -ent.",
    "Se usa después de voluntad, obligación, sentimiento, duda y de pour que, avant que, bien que.",
    "Muchos usos coinciden con el español. Una diferencia frecuente: para un hecho futuro, «cuando llegue» → quand j'arriverai.",
    "En afirmativo, espérer que e il est probable que van con indicativo.",
    "Con vouloir y el mismo sujeto → infinitivo: je veux partir.",
  ],

  relacionados: [
    { titulo: "Subjonctif passé", url: "/gramatica/subjonctif-passe/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
    { titulo: "Conditionnel présent", url: "/gramatica/conditionnel-present/" },
    { titulo: "Discours indirect", url: "/gramatica/discours-indirect/" },
  ],
};
