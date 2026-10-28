// Unidad 12 · Pronombres tónicos. Perfil 2: quien ya vive en Quebec.
// Fuente editorial: Documentos_Proyecto/05_Unidades/12_pronombres-tonicos/fuente.md.
import type { Unidad } from "./tipos";

export const pronombresTonicos: Unidad = {
  slug: "pronombres-tonicos",
  titulo: "Pronombres tónicos",
  nivel: ["A1", "A2"],
  minutos: 8,
  objetivo: "Usa moi, toi, lui y otras formas para hablar de personas después de una preposición o darles énfasis.",
  ideaClave: {
    titulo: "Una forma para destacar a la persona",
    texto: "En francés, después de avec o pour se usan formas como moi, toi y lui. También sirven para destacar a alguien: Moi, je viens demain.",
    tabla: [
      { es: "Voy contigo.", fr: "Je viens avec toi." },
      { es: "Yo voy mañana.", fr: "Moi, je viens demain." },
    ],
    etiquetaFr: "Francés",
  },
  usos: [
    { titulo: "Después de una preposición", ejemplo: "Je travaille avec elle.", nota: "Avec significa «con»." },
    { titulo: "Para dar énfasis", ejemplo: "Moi, je prends le métro.", nota: "La frase sigue con je como sujeto." },
    { titulo: "En una respuesta breve", ejemplo: "— Qui vient ? — Moi.", nota: "La forma tónica puede aparecer sola." },
    { titulo: "Después de c'est", ejemplo: "C'est lui.", nota: "Sirve para identificar a la persona." },
  ],
  usosNota: "Otros usos frecuentes: Moi aussi (yo también), Moi non plus (yo tampoco) y la comparación Il est plus grand que moi (él es más alto que yo). Esta no es una lista completa.",
  formacion: {
    regla: "Cada pronombre sujeto tiene una forma tónica correspondiente. Algunas se escriben igual que el sujeto; el lugar y la función en la frase permiten distinguirlas.",
    tablaTitulo: "De sujeto a forma tónica",
    tabla: {
      cabeceras: ["Sujeto", "Forma tónica", "Ejemplo"],
      filas: [
        ["je", "moi", "avec moi"],
        ["tu", "toi", "pour toi"],
        ["il / elle", "lui / elle", "avec lui / avec elle"],
        ["nous / vous", "nous / vous", "avec nous / avec vous"],
        ["ils / elles", "eux / elles", "avec eux / avec elles"],
      ],
    },
    notasTitulo: "El lugar cambia el sentido",
    notas: [
      "Con énfasis al principio, la forma tónica suele ir seguida del sujeto: Moi, je travaille ici. No sustituye a je en esa frase.",
      "Lui puede ser forma tónica después de una preposición: avec lui. También puede ser pronombre complemento delante del verbo: je lui parle. La lección de pronombres complemento explica ese segundo uso.",
      "Con verbos como téléphoner à quelqu'un, el complemento suele ir antes del verbo: je lui téléphone. Con otras construcciones se mantiene la preposición: je pense à lui. No se elige una forma por ver à en la frase: importa la construcción del verbo.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado. Todavía no practica pronombres tónicos.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "preposicion", titulo: "Después de preposición" },
    { id: "enfasis", titulo: "Énfasis y sujeto" },
    { id: "complemento", titulo: "Tónico o complemento" },
  ],
  errores: [
    { grupo: "preposicion", corto: "Avec je", mal: "Elle travaille avec je.", bien: "Elle travaille avec moi.", porque: "Después de avec, para hablar de mí, se usa moi." },
    { grupo: "preposicion", corto: "Pour il", mal: "Ce message est pour il.", bien: "Ce message est pour lui.", porque: "Después de pour, la forma tónica correspondiente a il es lui." },
    { grupo: "enfasis", corto: "Moi travaille", mal: "Moi travaille ici. (para decir «yo trabajo aquí»)", bien: "Moi, je travaille ici.", porque: "Para destacar al sujeto, moi se separa con coma y la frase continúa con je." },
    { grupo: "complemento", corto: "Je téléphone à lui", mal: "Je téléphone à lui. (para decir sin énfasis que lo llamo)", bien: "Je lui téléphone.", porque: "En el uso corriente sin contraste, téléphoner à quelqu'un lleva el pronombre complemento lui antes del verbo. À lui puede usarse para dar contraste." },
  ],
  ejemplos: {
    titulo: "Andrés conoce a sus vecinos en Montreal",
    intro: "Andrés vive en Montreal. Se organiza con Mélanie y otros vecinos para una reunión.",
    items: [
      { fr: "Je viens avec elle.", es: "Voy con ella.", nota: "después de avec" },
      { fr: "Ce message est pour eux.", es: "Este mensaje es para ellos.", nota: "después de pour" },
      { fr: "Moi, je prends le métro.", es: "Yo tomo el metro.", nota: "énfasis" },
      { fr: "— Qui vient demain ? — Nous.", es: "— ¿Quién viene mañana? — Nosotros.", nota: "respuesta breve" },
      { fr: "Je lui téléphone ce soir.", es: "Lo (o la) llamo por teléfono esta noche.", nota: "lui como complemento, no como forma tónica" },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre una reunión con vecinos o compañeros. Di con quién vas, para quién llevas algo y destaca lo que haces tú.",
    requisitos: ["una forma tónica después de avec", "una forma tónica después de pour", "una frase con moi, je"],
    modelo: "Je viens avec elle. Ce gâteau est pour eux. Moi, je prends le métro.",
  },
  resumen: [
    "Las formas son moi, toi, lui, elle, nous, vous, eux y elles.",
    "Después de avec y pour, usa la forma tónica: avec toi, pour lui.",
    "Para destacar al sujeto: Moi, je viens demain.",
    "Lui también puede ser complemento antes del verbo: je lui téléphone. Su lugar y función son diferentes.",
  ],
  relacionados: [
    { titulo: "Pronombres complemento", url: "/gramatica/pronombres-complemento/" },
    { titulo: "Artículos", url: "/gramatica/articulos/" },
    { titulo: "Posesivos", url: "/gramatica/posesivos/" },
  ],
};
