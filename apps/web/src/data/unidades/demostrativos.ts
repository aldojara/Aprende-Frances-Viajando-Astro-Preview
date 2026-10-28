// Unidad 14 · Demostrativos. Perfil 2: quien ya vive en Quebec.
// Fuente editorial: Documentos_Proyecto/05_Unidades/14_demostrativos/fuente.md.
import type { Unidad } from "./tipos";

export const demostrativos: Unidad = {
  slug: "demostrativos",
  titulo: "Demostrativos",
  nivel: ["A1", "A2"],
  minutos: 8,
  objetivo: "Usa ce, cet, cette y ces para señalar personas y cosas en francés.",
  ideaClave: {
    titulo: "Una forma para señalar",
    texto: "En francés, ce, cet, cette y ces acompañan a un nombre. La forma depende del género, del número y del sonido inicial del nombre. No hay tres series distintas para «este», «ese» y «aquel».",
    tabla: [
      { es: "Este libro / ese libro", fr: "ce livre" },
      { es: "Esta casa / esa casa", fr: "cette maison" },
    ],
    etiquetaFr: "Francés",
  },
  usos: [
    { titulo: "Señalar algo", ejemplo: "Ce livre est à moi.", nota: "Ce acompaña a livre, masculino singular." },
    { titulo: "Hablar de algo conocido", ejemplo: "Cette école est près du métro.", nota: "Cette acompaña a école, femenino singular." },
    { titulo: "Señalar varios", ejemplo: "Ces livres sont ici.", nota: "Ces acompaña a livres, plural." },
  ],
  formacion: {
    regla: "El demostrativo va delante de un nombre. Elige ce para un masculino singular, cet si ese masculino empieza por vocal o h muda, cette para un femenino singular y ces para un plural.",
    tablaTitulo: "Las cuatro formas",
    tabla: {
      cabeceras: ["Nombre", "Forma", "Ejemplo"],
      filas: [
        ["masculino singular", "ce", "ce livre"],
        ["masculino singular con vocal o h muda", "cet", "cet appartement / cet homme"],
        ["femenino singular", "cette", "cette école"],
        ["plural", "ces", "ces livres"],
      ],
    },
    notasTitulo: "Para distinguir mejor",
    notas: [
      "Si hace falta distinguir dos cosas, añade -ci o -là al nombre: ce livre-ci (este libro), ce livre-là (ese libro). Sin contraste, ce livre puede traducirse según el contexto como «este», «ese» o «aquel libro».",
      "La h muda se comporta como una vocal: cet homme. Ante h aspirada se mantiene ce: ce héros.",
      "En A2, un pronombre puede reemplazar al nombre: Je prends ce livre-ci. Tu prends celui-là. Celui-là significa «ese» o «aquel» y retoma livre. Otras formas son celle, ceux y celles, según el nombre que retoman.",
      "Ce también puede ser pronombre en c'est: C'est mon livre. Ça equivale a «eso» en una frase como Ça va. No se coloca ça delante de livre para decir «ese libro».",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado. Todavía no practica demostrativos.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "forma", titulo: "Forma y género" },
    { id: "vocal", titulo: "Ante vocal" },
    { id: "pronombre", titulo: "Nombre o pronombre" },
  ],
  errores: [
    { grupo: "forma", corto: "Ce maison", mal: "Ce maison est grande.", bien: "Cette maison est grande.", porque: "Maison es femenino singular; se usa cette." },
    { grupo: "forma", corto: "Cette livres", mal: "Cette livres sont ici.", bien: "Ces livres sont ici.", porque: "Livres está en plural; se usa ces." },
    { grupo: "vocal", corto: "Ce appartement", mal: "Ce appartement est libre.", bien: "Cet appartement est libre.", porque: "Appartement es masculino y empieza por vocal; se usa cet." },
    { grupo: "pronombre", corto: "Ça livre", mal: "Je prends ça livre. (para decir «tomo ese libro»)", bien: "Je prends ce livre.", porque: "Delante de livre se usa el determinante ce; ça es un pronombre y no acompaña al nombre." },
  ],
  ejemplos: {
    titulo: "Lucía busca libros en Montreal",
    intro: "Lucía vive en Montreal. Elige libros con su vecino Olivier para una actividad de lectura.",
    items: [
      { fr: "Ce livre est intéressant.", es: "Este libro es interesante.", nota: "ce + masculino singular" },
      { fr: "Cet album est pour les enfants.", es: "Este álbum es para los niños.", nota: "cet + masculino con vocal" },
      { fr: "Cette histoire est courte.", es: "Esta historia es corta.", nota: "cette + femenino singular" },
      { fr: "Ces livres sont à Olivier.", es: "Estos libros son de Olivier.", nota: "ces + plural" },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases para señalar objetos de tu vida cotidiana. Usa ce o cet, después cette y luego ces.",
    requisitos: ["una frase con ce o cet", "una frase con cette", "una frase con ces"],
    modelo: "Ce livre est ici. Cette table est grande. Ces clés sont à moi.",
  },
  resumen: [
    "Ce acompaña a un masculino singular: ce livre.",
    "Cet va ante un masculino que empieza por vocal o h muda: cet appartement.",
    "Cette acompaña a un femenino singular; ces acompaña a un plural.",
    "Usa -ci o -là para distinguir cuando haga falta: ce livre-ci, ce livre-là.",
  ],
  relacionados: [
    { titulo: "Artículos", url: "/gramatica/articulos/" },
    { titulo: "Posesivos", url: "/gramatica/posesivos/" },
  ],
};
