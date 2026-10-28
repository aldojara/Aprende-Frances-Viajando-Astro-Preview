// Unidad 19 · Participe présent. Perfil 1: lectura de ofertas y correos formales.
// Fuente editorial: Documentos_Proyecto/05_Unidades/19_participe-present/fuente.md.
import type { Unidad } from "./tipos";

export const participePresent: Unidad = {
  slug: "participe-present",
  titulo: "Participe présent",
  nivel: ["B1", "B2"],
  minutos: 10,
  objetivo: "Reconoce el participe présent en textos escritos y úsalo para precisar o explicar una acción.",
  ideaClave: {
    titulo: "Una forma verbal que no concuerda",
    texto: "El participe présent añade información sobre una acción o un nombre, sobre todo en textos escritos. Conserva valor verbal y es invariable; el adjetivo verbal describe una cualidad y concuerda.",
    tabla: [
      { es: "Los candidatos que hablan español", fr: "Les candidats parlant espagnol" },
      { es: "Niños obedientes", fr: "Des enfants obéissants" },
    ],
  },
  usos: [
    { titulo: "Precisar un nombre", ejemplo: "Les candidats parlant espagnol peuvent répondre.", nota: "Parlant equivale aquí a qui parlent; no lleva marca de plural." },
    { titulo: "Expresar una causa", ejemplo: "Étant malade, Renata a reporté son rendez-vous.", nota: "La causa se refiere a Renata, sujeto de la oración principal." },
    { titulo: "Marcar anterioridad", ejemplo: "Ayant terminé son courriel, Renata l'a relu.", nota: "Ayant terminé es la forma compuesta: primero terminó el correo y luego lo revisó." },
  ],
  formacion: {
    regla: "Toma la raíz de nous en presente y añade -ant: nous parlons → parlant. Es la misma raíz que usa el imparfait. Tres formas se apartan de este patrón: étant, ayant y sachant.",
    formula: ["raíz de nous en presente", "-ant"],
    tablaTitulo: "Forma simple y excepciones",
    tabla: {
      cabeceras: ["Presente de nous", "Participe présent", "Nota"],
      filas: [
        ["nous parlons", "parlant", "misma raíz que parlions"],
        ["nous finissons", "finissant", "misma raíz que finissions"],
        ["nous sommes", "étant", "excepción"],
        ["nous avons", "ayant", "excepción"],
        ["nous savons", "sachant", "excepción"],
      ],
    },
    notasTitulo: "Uso y concordancia",
    notas: [
      "El participe présent es invariable: les candidats parlant espagnol. El adjetivo verbal concuerda: des enfants obéissants. No todas las formas en -ant son intercambiables.",
      "En algunos pares también cambia la escritura: fatiguant (participe présent) / fatigant (adjetivo verbal); précédant / précédent. Es un detalle de nivel B2.",
      "La forma compuesta usa ayant o étant + participio pasado: ayant terminé, étant arrivée. El auxiliar se elige como en passé composé. Con être no pronominal, el participio concuerda con el sujeto; con avoir, no concuerda con el sujeto y concuerda con un objeto directo situado antes del verbo. En los pronominales interviene la función del pronombre.",
      "Cuando el participe présent abre la oración sin sujeto propio, en la norma suele referirse al sujeto principal: Étant malade, Renata a reporté son rendez-vous. Si el sujeto cambia, hay que expresarlo: Les candidats étant absents, Renata a reporté la réunion.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica elige el auxiliar del passé composé. Esa elección también sirve para la forma compuesta (ayant terminé, étant arrivée); todavía no practica el participe présent.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "forma", titulo: "Forma y concordancia" },
    { id: "sentido", titulo: "Sentido y sujeto" },
    { id: "espanol", titulo: "Calcos del español" },
  ],
  errores: [
    { grupo: "forma", corto: "Plural indebido", mal: "Les candidats parlants espagnol répondent.", bien: "Les candidats parlant espagnol répondent.", porque: "Parlant conserva un complemento verbal y es invariable." },
    { grupo: "forma", corto: "Adjetivo sin acuerdo", mal: "Des enfants obéissant sont dans la salle. (para describir su carácter)", bien: "Des enfants obéissants sont dans la salle.", porque: "Obéissants es aquí un adjetivo verbal y concuerda con enfants." },
    { grupo: "sentido", corto: "Sujeto ambiguo", mal: "Étant malade, le médecin a examiné Renata. (si Renata estaba enferma)", bien: "Renata étant malade, le médecin l'a examinée.", porque: "Al abrir la frase, étant malade suele referirse al sujeto principal, le médecin. Expresar Renata aclara quién estaba enferma." },
    { grupo: "espanol", corto: "Progresivo español", mal: "Je suis travaillant. (para «estoy trabajando»)", bien: "Je suis en train de travailler.", porque: "El progresivo español no se traduce con être + participe présent." },
  ],
  ejemplos: {
    titulo: "Renata lee textos para preparar su mudanza",
    intro: "Renata, en Guadalajara, lee ofertas de empleo y escribe correos formales antes de mudarse. Los ejemplos no describen requisitos migratorios.",
    items: [
      { fr: "Je cherche une équipe travaillant en français.", es: "Busco un equipo que trabaje en francés.", nota: "Travaillant precisa équipe como una relativa con qui." },
      { fr: "Les personnes parlant espagnol peuvent répondre.", es: "Las personas que hablan español pueden responder.", nota: "Parlant permanece invariable aunque personnes sea plural." },
      { fr: "Ne connaissant pas l'horaire, Renata a écrit un courriel.", es: "Como no conocía el horario, Renata escribió un correo.", nota: "El participe présent puede ir en negativo y expresar causa." },
      { fr: "Ayant terminé son courriel, elle l'a relu.", es: "Después de terminar su correo, lo revisó.", nota: "La forma compuesta marca anterioridad." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre un correo: una para precisar un nombre con participe présent, otra para expresar una causa y otra con la forma compuesta para una acción anterior.",
    requisitos: ["un participe présent invariable que precise un nombre", "una causa cuyo sujeto sea claro", "una acción anterior con ayant o étant + participio pasado"],
    modelo: "Je cherche une équipe parlant français. Ne connaissant pas l'horaire, Renata a écrit un courriel. Ayant terminé son message, elle l'a relu.",
  },
  resumen: [
    "Raíz de nous en presente + -ant, como la raíz del imparfait; excepciones: étant, ayant, sachant.",
    "El participe présent es invariable; el adjetivo verbal concuerda.",
    "Puede precisar un nombre, expresar una causa o, en su forma compuesta, una acción anterior.",
    "En la norma, el participio inicial sin sujeto propio suele remitir al sujeto principal.",
    "«Estoy trabajando» se expresa con je suis en train de travailler.",
  ],
  relacionados: [
    { titulo: "Gérondif", url: "/gramatica/gerondif/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
  ],
};
