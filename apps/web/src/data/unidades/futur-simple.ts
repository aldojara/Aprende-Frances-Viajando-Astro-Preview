// Unidad 7 · Futur simple. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/07_futur-simple/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 1: quien se prepara para emigrar).
// Sustituye a la lección antigua de src/content/content/futur-simple.md (que queda como ficha para los listados).
// Sin práctica propia (bloque E): la página sale sin tarjeta de práctica.
import type { Unidad } from "./tipos";

export const futurSimple: Unidad = {
  slug: "futur-simple",
  titulo: "Futur simple",
  nivel: ["A2", "B1"],
  minutos: 10,
  objetivo: "Habla de tus planes, haz predicciones y promesas, y di qué harás cuando algo pase.",

  ideaClave: {
    titulo: "«Llegaré» se forma igual que j'arriverai",
    texto:
      "El futur simple se parece mucho al futuro del español: se forma sobre el infinitivo (hablar → hablaré, parler → je parlerai) y varias raíces irregulares se parecen (podré → je pourrai, haré → je ferai, vendré → je viendrai). La trampa: para un hecho futuro, después de quand el español usa el subjuntivo («cuando llegue») y el francés, el futur.",
    tabla: [
      { es: "Hablaré con Mélanie mañana.", fr: "Je parlerai à Mélanie demain." },
      { es: "Cuando llegue, te llamaré.", fr: "Quand j'arriverai, je t'appellerai." },
    ],
    etiquetaFr: "Francés (futur simple)",
    nota: "Después del si de condición no va el futur, igual que en español: si llueve → s'il pleut (no «s'il pleuvra»).",
  },

  usos: [
    { titulo: "Un plan o un proyecto", ejemplo: "L'année prochaine, je chercherai un travail à Montréal." },
    { titulo: "Una predicción", ejemplo: "Demain, il neigera sur Montréal." },
    { titulo: "Una promesa", ejemplo: "Je t'appellerai dès que j'arriverai." },
    {
      titulo: "Lo que pasará si se cumple una condición",
      ejemplo: "Si tu viens en janvier, tu auras froid.",
      nota: "Si + presente; el resultado, en futur.",
    },
  ],
  usosNota:
    "Con quand, lorsque o dès que, si el hecho es futuro, el francés usa el futur donde el español usa el subjuntivo: «cuando llegue» → quand j'arriverai. La otra parte suele ir en futur o en imperativo (Quand tu arriveras, appelle-moi).",

  formacion: {
    regla: "Infinitivo + -ai, -as, -a, -ons, -ez, -ont. Los verbos en -re pierden la e final (prendre → je prendrai). Algunos verbos frecuentes tienen una raíz propia (être → je serai).",
    formula: ["Infinitivo (los verbos en -re, sin la e final)", "-ai, -as, -a, -ons, -ez, -ont"],
    tablaTitulo: "Tabla de conjugación: parler, prendre y aller",
    tabla: {
      cabeceras: ["Sujeto", "parler", "prendre (sin la e)", "aller (raíz ir-)"],
      filas: [
        ["je / j'", "je parlerai", "je prendrai", "j'irai"],
        ["tu", "tu parleras", "tu prendras", "tu iras"],
        ["il / elle / on", "il parlera", "il prendra", "il ira"],
        ["nous", "nous parlerons", "nous prendrons", "nous irons"],
        ["vous", "vous parlerez", "vous prendrez", "vous irez"],
        ["ils / elles", "ils parleront", "ils prendront", "ils iront"],
      ],
    },
    notasTitulo: "Detalles de la raíz y la ortografía",
    notas: [
      "Las terminaciones son las mismas para todos los verbos; lo que cambia en los irregulares es la raíz: je serai, j'aurai, je ferai, je viendrai (tabla de consulta).",
      "Todas las raíces del futur terminan en r: je parlerai, je finirai, je verrai. Si no hay r antes de la terminación, no es futur (el conditionnel también la tiene: je parlerais).",
      "Algunos verbos en -er cambian la raíz: acheter → j'achèterai, appeler → j'appellerai, payer → je paierai (también je payerai). Envoyer es irregular: j'enverrai.",
    ],
  },

  consulta: [
    {
      titulo: "Raíces irregulares frecuentes",
      tabla: {
        cabeceras: ["Infinitivo", "Futur simple"],
        filas: [
          ["être", "je serai"], ["avoir", "j'aurai"], ["aller", "j'irai"], ["faire", "je ferai"],
          ["venir", "je viendrai"], ["tenir", "je tiendrai"], ["voir", "je verrai"], ["envoyer", "j'enverrai"],
          ["savoir", "je saurai"], ["pouvoir", "je pourrai"], ["vouloir", "je voudrai"], ["devoir", "je devrai"],
          ["recevoir", "je recevrai"], ["courir", "je courrai"], ["mourir", "je mourrai"],
          ["falloir", "il faudra"], ["pleuvoir", "il pleuvra"],
        ],
      },
    },
    {
      titulo: "Verbos en -er que cambian la raíz",
      tabla: {
        cabeceras: ["Infinitivo", "Futur simple", "Cambio"],
        filas: [
          ["acheter", "j'achèterai", "e → è"],
          ["se lever", "je me lèverai", "e → è"],
          ["appeler", "j'appellerai", "l → ll"],
          ["jeter", "je jetterai", "t → tt"],
          ["payer", "je paierai (o je payerai)", "y → i"],
          ["essayer", "j'essaierai (o j'essayerai)", "y → i"],
          ["nettoyer", "je nettoierai", "y → i"],
        ],
      },
      puntos: [
        "Los verbos como préférer, répéter o céder (con é en la última sílaba antes de -er) conservan la é en la ortografía tradicional: je préférerai. La ortografía rectificada de 1990 admite también je préfèrerai; las dos formas son correctas.",
      ],
    },
    {
      titulo: "¿Futur simple o futur proche?",
      puntos: [
        "Futur proche (aller + infinitivo: je vais partir): muy frecuente al hablar, sobre todo para lo que ya decidiste o ya se ve venir.",
        "Futur simple (je partirai): frecuente en predicciones, promesas y textos formales, y es la forma estándar después de quand para un hecho futuro.",
        "Son tendencias, no reglas: muchas veces los dos son posibles. Je vais chercher un appartement y je chercherai un appartement se entienden igual.",
      ],
    },
  ],

  gruposErrores: [
    { id: "quand-si", titulo: "Después de quand y de si", descripcion: "Donde el español usa otro tiempo." },
    { id: "raices", titulo: "Las raíces irregulares" },
    { id: "forma", titulo: "La forma del futuro", descripcion: "Una letra de más o de menos cambia el tiempo." },
  ],

  errores: [
    {
      grupo: "quand-si",
      corto: "Quand j'arrive (futuro)",
      mal: "Quand j'arrive à Montréal, je chercherai un appartement. (para un hecho futuro)",
      bien: "Quand j'arriverai à Montréal, je chercherai un appartement.",
      porque: "«Cuando llegue»: el español usa el subjuntivo y el francés, el futur. En francés estándar, si la otra parte va en futur, después de quand también va un futuro (je chercherai… quand j'arriverai). En la conversación se oye a veces el presente en las dos partes (quand j'arrive, je t'appelle).",
    },
    {
      grupo: "quand-si",
      corto: "Si tu viendras",
      mal: "Si tu viendras en janvier, tu auras froid.",
      bien: "Si tu viens en janvier, tu auras froid.",
      porque: "Después del si de condición no va el futur, igual que en español: «si vienes», no «si vendrás».",
    },
    {
      grupo: "raices",
      corto: "J'allerai",
      mal: "J'allerai au bureau demain.",
      bien: "J'irai au bureau demain.",
      porque: "Aller tiene la raíz ir-: j'irai, tu iras, nous irons.",
    },
    {
      grupo: "raices",
      corto: "Je venirai",
      mal: "Je venirai te voir samedi.",
      bien: "Je viendrai te voir samedi.",
      porque: "Venir cambia a viendr-, como «vendré» en español. Tenir hace lo mismo: je tiendrai.",
    },
    {
      grupo: "raices",
      corto: "J'envoyerai",
      mal: "J'envoyerai le formulaire lundi.",
      bien: "J'enverrai le formulaire lundi.",
      porque: "Envoyer es irregular en el futur: su raíz es enverr-.",
    },
    {
      grupo: "forma",
      corto: "Je prendreai",
      mal: "Je prendreai le métro.",
      bien: "Je prendrai le métro.",
      porque: "En los verbos en -re, la e final del infinitivo desaparece: prendre → prendr- → je prendrai.",
    },
    {
      grupo: "forma",
      corto: "Je vais prendrai",
      mal: "Je vais prendrai le bus.",
      bien: "Je vais prendre le bus. (o je prendrai le bus)",
      porque: "Se mezclan los dos futuros: el futur proche es aller + infinitivo; el futur simple es una sola palabra.",
    },
    {
      grupo: "forma",
      corto: "Je serais (por «estaré»)",
      mal: "Demain, je serais au bureau à huit heures. (para «mañana estaré en la oficina»)",
      bien: "Demain, je serai au bureau à huit heures.",
      porque: "Je serai (estaré, seré) es futur; je serais (estaría, sería) es conditionnel. Muchos hablantes los pronuncian igual (en la pronunciación cuidada, -ai suena como «é» y -ais, como «è»); al escribir, la -s cambia el sentido. En las demás personas suenan distinto: il sera / il serait.",
    },
  ],

  ejemplos: {
    titulo: "El plan de Andrés para sus primeras semanas",
    intro: "Andrés, de Lima, se muda a Montreal en marzo. Le cuenta su plan a Mélanie, una amiga que vive allá.",
    items: [
      { fr: "J'arriverai à Montréal le 3 mars.", es: "Llegaré a Montreal el 3 de marzo.", nota: "un plan" },
      { fr: "Les premiers jours, je dormirai chez mon cousin.", es: "Los primeros días dormiré en casa de mi primo.", nota: "verbo en -ir: infinitivo + -ai" },
      { fr: "Quand je serai installé, je chercherai un appartement près du métro.", es: "Cuando esté instalado, buscaré un departamento cerca del metro.", nota: "quand + futur («cuando esté»)" },
      { fr: "Je m'inscrirai à un cours de français le soir.", es: "Me inscribiré en un curso de francés en las noches.", nota: "verbo en -re, sin la e" },
      { fr: "Il fera encore froid, alors j'achèterai un bon manteau.", es: "Todavía hará frío, así que compraré un buen abrigo.", nota: "faire → fer- · acheter → achèter-" },
      { fr: "Si je trouve vite un travail, je pourrai payer le loyer sans stress.", es: "Si encuentro trabajo pronto, podré pagar el alquiler sin estrés.", nota: "si + presente → futur" },
      { fr: "Il faudra ouvrir un compte bancaire la première semaine.", es: "Habrá que abrir una cuenta bancaria la primera semana.", nota: "falloir → il faudra" },
      { fr: "Je t'enverrai des photos de la neige.", es: "Te enviaré fotos de la nieve.", nota: "envoyer → enverr-" },
      { fr: "Dès que j'aurai mon adresse, je te l'écrirai.", es: "En cuanto tenga mi dirección, te la escribiré.", nota: "dès que + futur («en cuanto tenga»)" },
      { fr: "Mélanie lui répond : « Tu verras, tu t'habitueras vite. »", es: "Mélanie le responde: «Ya verás, te acostumbrarás rápido».", nota: "una predicción · voir → verr-" },
      { fr: "« Et on ira ensemble au parc du Mont-Royal. »", es: "«Y iremos juntos al parque del Mont-Royal».", nota: "on ira = iremos" },
      { fr: "Andrés : « Je te promets que je serai patient avec mon français. »", es: "Andrés: «Te prometo que seré paciente con mi francés».", nota: "una promesa" },
    ],
  },

  aplicacion: {
    consigna: "Escribe 5 frases sobre un plan para los próximos meses: un trabajo nuevo, un curso, una mudanza o un viaje.",
    requisitos: [
      "un verbo regular (je chercherai, je finirai…)",
      "dos verbos de raíz irregular (j'irai, je ferai, je serai, j'aurai…)",
      "una frase con quand o dès que + futur",
      "una frase con si + presente",
      "una promesa (je te promets que…)",
    ],
    modelo:
      "Le mois prochain, je commencerai un nouveau travail. J'irai au bureau en métro et je ferai du sport le week-end. Quand j'aurai mon premier salaire, j'achèterai un vélo. Si mes collègues sont sympathiques, je les inviterai à manger. Je te promets que je t'appellerai tous les dimanches.",
  },

  resumen: [
    "Futur simple = infinitivo + -ai, -as, -a, -ons, -ez, -ont. Los verbos en -re pierden la e: je prendrai.",
    "Raíces irregulares frecuentes: je serai, j'aurai, j'irai, je ferai, je viendrai, je pourrai. Todas las raíces del futur terminan en r.",
    "Sirve para planes, predicciones y promesas. Al hablar de algo ya decidido, el futur proche (je vais partir) es muy frecuente.",
    "Quand + hecho futuro → futur: quand j'arriverai («cuando llegue»). Si de condición + presente: si tu viens, tu verras.",
    "Je serai (estaré) es futur; je serais (estaría), conditionnel.",
  ],

  relacionados: [
    { titulo: "Conditionnel présent", url: "/gramatica/conditionnel-present/" },
    { titulo: "Passé composé vs imparfait", url: "/gramatica/passe-compose-vs-imparfait/" },
  ],
};
