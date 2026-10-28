// Unidad 16 · Pronombres relativos. Perfil 2: vida cotidiana en Montreal.
// Fuente editorial: Documentos_Proyecto/05_Unidades/16_pronombres-relativos/fuente.md.
import type { Unidad } from "./tipos";

export const pronombresRelativos: Unidad = {
  slug: "pronombres-relativos",
  titulo: "Pronombres relativos",
  nivel: ["A2", "B1"],
  minutos: 10,
  objetivo: "Une dos ideas con qui, que, où y dont sin repetir el nombre.",
  ideaClave: {
    titulo: "La función decide la forma",
    texto: "El «que» español puede ser qui o que en francés. Mira qué papel tiene el nombre retomado dentro de la parte que añades: si realiza la acción, qui; si recibe directamente la acción, que.",
    tabla: [
      { es: "La vecina que vive aquí", fr: "La voisine qui habite ici" },
      { es: "La vecina que conozco", fr: "La voisine que je connais" },
    ],
    etiquetaFr: "Francés",
  },
  usos: [
    { titulo: "Qui: el sujeto", ejemplo: "J'ai une voisine qui parle espagnol.", nota: "La vecina es quien habla." },
    { titulo: "Que: el objeto directo", ejemplo: "Voici le livre que j'ai acheté.", nota: "Compré el libro: el libro recibe directamente la acción." },
    { titulo: "Où: lugar o momento", ejemplo: "C'est le jour où j'ai emménagé.", nota: "Où también retoma un momento, no solo un lugar." },
    { titulo: "Dont: relación con de", ejemplo: "C'est le dossier dont j'ai besoin.", nota: "Se dice avoir besoin de quelque chose." },
  ],
  formacion: {
    regla: "Parte de dos frases que comparten un nombre. Conserva ese nombre una sola vez y usa el relativo según la función que cumple en la segunda frase.",
    tablaTitulo: "Las cuatro formas de esta lección",
    tabla: {
      cabeceras: ["Forma", "Función aquí", "Ejemplo"],
      filas: [
        ["qui", "sujeto", "La voisine qui travaille ici"],
        ["que / qu'", "objeto directo", "Le livre que j'ai acheté / qu'il a acheté"],
        ["où", "lugar o tiempo", "La ville où j'habite / le jour où je suis arrivé"],
        ["dont", "relación con de", "Le dossier dont j'ai besoin"],
      ],
    },
    notasTitulo: "Tres detalles útiles",
    notas: [
      "Que se convierte en qu' ante vocal o h muda: le livre qu'il a acheté. Qui no se elide: la voisine qui habite ici. Entre qui y el verbo puede haber otras palabras: la voisine qui me parle.",
      "Dont ya contiene la preposición de. Se dice le dossier dont j'ai besoin, sin repetir de delante de besoin ni agregar en para el mismo complemento. También puede expresar posesión, como «cuyo»: la voisine dont le fils parle espagnol (la vecina cuyo hijo habla español).",
      "En B1, tras ciertas preposiciones aparece un relativo compuesto: le dossier sur lequel je travaille. Lequel cambia según el nombre: la table sur laquelle je travaille. Esta lección solo lo presenta; se centra en qui, que, où y dont.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado. Todavía no practica los pronombres relativos.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "funcion", titulo: "Qui o que" },
    { id: "de-tiempo", titulo: "Dont y où" },
    { id: "acuerdo", titulo: "Que y participio" },
  ],
  errores: [
    { grupo: "funcion", corto: "Que habite", mal: "La voisine que habite ici est gentille.", bien: "La voisine qui habite ici est gentille.", porque: "La vecina realiza la acción de vivir aquí: qui es el sujeto de habite." },
    { grupo: "funcion", corto: "Qui j'ai acheté", mal: "Voici le livre qui j'ai acheté.", bien: "Voici le livre que j'ai acheté.", porque: "El libro es lo que compré: que es objeto directo de ai acheté." },
    { grupo: "de-tiempo", corto: "Que j'ai besoin", mal: "C'est le dossier que j'ai besoin.", bien: "C'est le dossier dont j'ai besoin.", porque: "La expresión es avoir besoin de; dont retoma ese complemento introducido por de." },
    { grupo: "de-tiempo", corto: "Le jour que", mal: "C'est le jour que je suis arrivé. (para indicar cuándo llegué)", bien: "C'est le jour où je suis arrivé.", porque: "En el francés actual, cuando le jour indica el momento en que ocurrió algo, se usa où. Le jour que existe en usos antiguos o literarios." },
    { grupo: "acuerdo", corto: "Que j'ai pris", mal: "Les photos que j'ai pris sont ici.", bien: "Les photos que j'ai prises sont ici.", porque: "Que retoma les photos, objeto directo situado antes de avoir; en este caso prises concuerda con photos." },
  ],
  ejemplos: {
    titulo: "Nicolás conoce su barrio en Montreal",
    intro: "Nicolás acaba de mudarse a Montreal. Su vecina Chloé le muestra el edificio y el barrio.",
    items: [
      { fr: "Chloé est la voisine qui habite au troisième étage.", es: "Chloé es la vecina que vive en el tercer piso.", nota: "Qui retoma a la vecina, sujeto de habite." },
      { fr: "Voici le café que Chloé aime.", es: "Este es el café que le gusta a Chloé.", nota: "Que retoma el café, objeto directo de aime." },
      { fr: "C'est le quartier où Nicolás habite.", es: "Es el barrio donde vive Nicolás.", nota: "Où retoma un lugar." },
      { fr: "Voici le document dont Nicolás a besoin.", es: "Este es el documento que Nicolás necesita.", nota: "Avoir besoin de → dont." },
      { fr: "Chloé est la voisine dont le fils parle espagnol.", es: "Chloé es la vecina cuyo hijo habla español.", nota: "Dont puede expresar la relación de posesión: le fils de la voisine." },
      { fr: "Le jour où il a emménagé, Chloé l'a aidé.", es: "El día que se mudó, Chloé lo ayudó.", nota: "Où también retoma un momento." },
    ],
  },
  aplicacion: {
    consigna: "Describe tu barrio o tu lugar de estudio en cuatro frases. Menciona a una persona con qui, un objeto con que, un lugar o momento con où y algo que necesites con dont.",
    requisitos: ["una frase con qui", "una frase con que", "una frase con où", "una frase con dont"],
    modelo: "J'ai un voisin qui parle français. Voici le livre que je lis. C'est le café où j'étudie. Voilà le document dont j'ai besoin.",
  },
  resumen: [
    "Qui retoma al sujeto de la parte añadida; que retoma al objeto directo.",
    "Où sitúa un lugar o un momento: la ville où…, le jour où…",
    "Dont retoma una relación con de: le dossier dont j'ai besoin.",
    "Con avoir y un objeto directo anterior, que puede provocar concordancia del participio: les photos que j'ai prises.",
  ],
  relacionados: [
    { titulo: "Pronombres complemento", url: "/gramatica/pronombres-complemento/" },
    { titulo: "Pronombres tónicos", url: "/gramatica/pronombres-tonicos/" },
  ],
};
