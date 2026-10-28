// Unidad 17 · Voz pasiva. Perfil 2: avisos y noticias en Montreal.
// Fuente editorial: Documentos_Proyecto/05_Unidades/17_voz-pasiva/fuente.md.
import type { Unidad } from "./tipos";

export const vozPasiva: Unidad = {
  slug: "voz-pasiva",
  titulo: "Voz pasiva",
  nivel: ["B1", "B2"],
  minutos: 10,
  objetivo: "Reconoce y forma la pasiva en avisos, noticias y trámites cotidianos.",
  ideaClave: {
    titulo: "Importa lo que recibe la acción",
    texto: "En la pasiva, el objeto directo de la frase activa pasa a ser sujeto. El agente puede mencionarse o quedar sin decir.",
    tabla: [
      { es: "El equipo revisa los expedientes.", fr: "L'équipe examine les dossiers." },
      { es: "Los expedientes son revisados por el equipo.", fr: "Les dossiers sont examinés par l'équipe." },
    ],
  },
  usos: [
    { titulo: "Destacar el resultado", ejemplo: "Le dossier a été accepté.", nota: "Lo importante es el expediente; el agente puede omitirse." },
    { titulo: "Informar en un aviso", ejemplo: "Les demandes seront examinées demain.", nota: "El futuro se expresa en être: seront." },
    { titulo: "Nombrar al agente", ejemplo: "Le quartier est desservi par deux lignes de métro.", nota: "Par es la introducción más frecuente." },
  ],
  formacion: {
    regla: "Con un verbo transitivo directo, usa être en el tiempo de la acción + participio pasado del verbo. El participio concuerda en género y número con el sujeto que recibe la acción.",
    formula: ["sujeto que recibe la acción", "être conjugado", "participio concordado", "agente opcional"],
    tablaTitulo: "La misma acción en tres tiempos",
    tabla: {
      cabeceras: ["Tiempo", "Activa", "Pasiva"],
      filas: [
        ["Présent", "L'équipe examine les demandes.", "Les demandes sont examinées par l'équipe."],
        ["Passé composé", "L'équipe a examiné les demandes.", "Les demandes ont été examinées par l'équipe."],
        ["Futur simple", "L'équipe examinera les demandes.", "Les demandes seront examinées par l'équipe."],
      ],
    },
    notasTitulo: "Agente y otras formas",
    notas: [
      "La transformación necesita un objeto directo: L'équipe examine les demandes → Les demandes sont examinées. Un verbo como téléphoner à alguien no ofrece ese objeto directo.",
      "El agente suele ir con par. Con algunos verbos de sentimiento o estado aparece de: Elle est aimée de ses voisins; La maison est entourée d'arbres. Es una tendencia, no un cambio automático.",
      "Para un agente indeterminado en una frase cotidiana, suele sonar natural on: On examine les demandes. Para una propiedad general, puede servir una construcción pronominal: Ça se vend bien. La pasiva es útil cuando el foco está en lo recibido o en el resultado, especialmente en avisos y noticias.",
      "El francés suele preferir la forma activa u on en contextos donde el inglés recurre a la pasiva. No traduzcas mecánicamente el «se» español: «Se venden casas» puede expresarse con On vend des maisons; Ça se vend bien significa «eso se vende bien» y destaca una propiedad.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica elige el auxiliar del passé composé. Ayuda a distinguir ese tiempo de ciertas formas con être, pero todavía no entrena la voz pasiva.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "formacion", titulo: "Formación y alcance" },
    { id: "uso", titulo: "Elección de la forma" },
    { id: "distincion", titulo: "Pasiva o pasado" },
  ],
  errores: [
    { grupo: "formacion", corto: "Sin concordancia", mal: "Les demandes sont examiné.", bien: "Les demandes sont examinées.", porque: "Demandes es femenino plural; el participio de la pasiva concuerda con ese sujeto." },
    { grupo: "formacion", corto: "Verbo sin objeto directo", mal: "Marie est téléphonée par Paul. (para «Paul llama a Marie»)", bien: "Paul téléphone à Marie.", porque: "Téléphoner à Marie lleva complemento indirecto; esa frase no admite la transformación pasiva de esta lección." },
    { grupo: "uso", corto: "Calco del «se»", mal: "Des maisons se sont vendues ici. (si solo se anuncia que hay casas en venta)", bien: "On vend des maisons ici.", porque: "La primera frase significa que las casas ya se vendieron. Para anunciar la venta actual, on expresa un agente indeterminado." },
    { grupo: "distincion", corto: "Est parti", mal: "Il est parti par l'équipe. (para decir que el equipo lo invitó)", bien: "Il est invité par l'équipe.", porque: "Il est parti es passé composé de partir, una acción del propio sujeto. Invité admite una activa: L'équipe l'invite." },
  ],
  ejemplos: {
    titulo: "Sofía lee los avisos de su barrio",
    intro: "Sofía vive en Montreal. Comenta con su vecino Étienne un aviso municipal y una noticia del barrio.",
    items: [
      { fr: "Les demandes sont examinées chaque semaine.", es: "Las solicitudes se revisan cada semana.", nota: "Presente pasivo; no se nombra al agente." },
      { fr: "Le dossier a été accepté hier.", es: "El expediente fue aceptado ayer.", nota: "Passé composé pasivo: a été accepté." },
      { fr: "Les résultats seront publiés demain.", es: "Los resultados se publicarán mañana.", nota: "Futuro pasivo: seront publiés." },
      { fr: "Le parc est entouré d'arbres.", es: "El parque está rodeado de árboles.", nota: "Con entouré, aquí aparece de." },
      { fr: "On vend des maisons dans ce quartier.", es: "Se venden casas en este barrio.", nota: "On permite hablar de un agente indeterminado." },
      { fr: "Ce produit se vend bien.", es: "Este producto se vende bien.", nota: "La construcción pronominal expresa una propiedad habitual." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre un aviso de tu barrio: una pasiva en presente, otra en pasado y una alternativa con on. No incluyas datos reales de trámites.",
    requisitos: ["una pasiva en presente con concordancia", "una pasiva en passé composé", "una frase con on y agente indeterminado"],
    modelo: "Les demandes sont examinées chaque semaine. Le dossier a été accepté hier. On publie les résultats sur le site du quartier.",
  },
  resumen: [
    "La pasiva se forma con être en el tiempo correspondiente + participio concordado con el sujeto.",
    "Solo un verbo con objeto directo permite esta transformación.",
    "El agente puede omitirse; si aparece, suele llevar par y, en algunos usos, de.",
    "Il est parti es passé composé de partir; il est invité puede analizarse como pasiva de inviter.",
    "On y algunas construcciones pronominales ofrecen alternativas según el sentido.",
  ],
  relacionados: [
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Futur simple", url: "/gramatica/futur-simple/" },
    { titulo: "Pronombres complemento", url: "/gramatica/pronombres-complemento/" },
  ],
};
