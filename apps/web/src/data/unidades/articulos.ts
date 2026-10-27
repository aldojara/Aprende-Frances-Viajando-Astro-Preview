// Unidad 11 · Artículos. Perfil 1: quien se prepara para emigrar.
// Fuente editorial: Documentos_Proyecto/05_Unidades/11_articulos/fuente.md.
import type { Unidad } from "./tipos";

export const articulos: Unidad = {
  slug: "articulos",
  titulo: "Artículos",
  nivel: ["A1"],
  minutos: 8,
  objetivo: "Elige entre un, une, des y le, la, l’, les para hablar de personas y cosas cercanas.",
  ideaClave: {
    titulo: "Una cosa nueva; después, una conocida",
    texto: "Un, une y des presentan algo que todavía no identificamos. Le, la, l’ y les señalan algo ya identificado o hablan de una categoría en general.",
    tabla: [
      { es: "Tengo un libro. El libro es útil.", fr: "J'ai un livre. Le livre est utile." },
      { es: "Me gusta el café.", fr: "J'aime le café." },
    ],
    etiquetaFr: "Francés",
  },
  usos: [
    { titulo: "Presentar algo", ejemplo: "J'ai une question et des documents.", nota: "Une y des introducen elementos nuevos." },
    { titulo: "Retomar algo conocido", ejemplo: "La question est simple.", nota: "La identifica la pregunta mencionada." },
    { titulo: "Hablar de un gusto", ejemplo: "J'aime le français.", nota: "Al hablar del francés en general, aparece le." },
  ],
  formacion: {
    regla: "El artículo va delante del nombre. Elige singular o plural y observa si el nombre es masculino o femenino. Ante una vocal o h muda, le y la se convierten en l’.",
    tablaTitulo: "Artículos para empezar",
    tabla: {
      cabeceras: ["", "Masculino", "Femenino", "Plural"],
      filas: [
        ["Algo nuevo", "un livre", "une question", "des livres"],
        ["Algo identificado o general", "le livre", "la question", "les livres"],
        ["Ante vocal o h muda", "l'entretien", "l'école", "les entretiens / les écoles"],
      ],
    },
    notasTitulo: "Tres detalles útiles",
    notas: [
      "En una negación con pas, un, une y des suelen pasar a de o d’ cuando son complemento directo: j'ai un livre → je n'ai pas de livre. Con être, se conserva el artículo: ce n'est pas un livre.",
      "Con gustos generales suele usarse el artículo definido: j'aime le café; je n'aime pas le café. No se cambia le por de por negar el gusto.",
      "Muchos países llevan artículo en su nombre: le Canada, la France. Los nombres de ciudades suelen ir sin él: Montréal, Lima. Hay excepciones entre los nombres propios.",
    ],
  },
  consulta: [
    { titulo: "¿Y du, de la y des?", puntos: [
      "Du café y de la soupe expresan una cantidad no precisada. Son partitivos; tendrán su propia lección. Des también puede ser el plural de un y une: des livres.",
      "Au (à + le) y aux (à + les) unen una preposición con el artículo: je vais au cours. Du también puede significar de + le: je viens du cours. La frase aclara cuál es el caso.",
    ] },
  ],
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado. Todavía no practica artículos.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "nuevo-conocido", titulo: "Nuevo o conocido" },
    { id: "forma", titulo: "Forma del artículo" },
    { id: "negacion", titulo: "Negación y gustos" },
  ],
  errores: [
    { grupo: "nuevo-conocido", corto: "Un libro ya mencionado", mal: "J'ai un livre. Un livre est utile. (para referirse al mismo libro)", bien: "J'ai un livre. Le livre est utile.", porque: "Al retomar ese libro concreto, le ayuda a identificarlo." },
    { grupo: "forma", corto: "Le école", mal: "Le école est près d'ici.", bien: "L'école est près d'ici.", porque: "Ante la vocal inicial de école, la se reduce a l’." },
    { grupo: "forma", corto: "Une documents", mal: "J'ai une documents.", bien: "J'ai des documents.", porque: "Documents está en plural; el artículo indefinido plural es des." },
    { grupo: "negacion", corto: "Pas un document", mal: "Je n'ai pas un document. (para decir que no tengo documentos)", bien: "Je n'ai pas de document.", porque: "En esta negación de existencia, un pasa normalmente a de. Pas un document puede significar ‘ni un solo documento’ si se quiere insistir." },
    { grupo: "negacion", corto: "J'aime de café", mal: "J'aime de café. (para hablar del café en general)", bien: "J'aime le café.", porque: "Para expresar un gusto por la categoría en general, usamos le." },
  ],
  ejemplos: {
    titulo: "Mariana prepara su primera clase",
    intro: "Mariana, de Lima, organiza una clase de francés antes de viajar a Montreal.",
    items: [
      { fr: "J'ai un cahier et des documents.", es: "Tengo un cuaderno y unos documentos.", nota: "primera mención" },
      { fr: "Le cahier est sur la table.", es: "El cuaderno está sobre la mesa.", nota: "cuaderno ya mencionado" },
      { fr: "L'école est près de chez moi.", es: "La escuela está cerca de mi casa.", nota: "l’ ante vocal" },
      { fr: "J'aime le français.", es: "Me gusta el francés.", nota: "gusto general" },
      { fr: "Je n'ai pas de dictionnaire.", es: "No tengo diccionario.", nota: "negación con de" },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre objetos que llevas a una clase. Presenta uno, vuelve a hablar de él y di qué objeto no tienes.",
    requisitos: ["un o une para presentar un objeto", "le, la o l’ para retomarlo", "pas de o pas d’ para decir que no tienes otro objeto"],
    modelo: "J'ai un cahier. Le cahier est dans mon sac. Je n'ai pas de dictionnaire.",
  },
  resumen: [
    "Un, une, des introducen algo nuevo: un cahier, une question, des livres.",
    "Le, la, l’, les identifican algo o hablan de una categoría: le cahier, l'école, les livres.",
    "En una negación corriente de existencia, un, une y des suelen cambiar a de o d’: je n'ai pas de livre.",
    "Para un gusto general se mantiene el definido: j'aime le français.",
  ],
  relacionados: [
    { titulo: "Pronombres tónicos", url: "/gramatica/pronombres-tonicos/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
  ],
};
