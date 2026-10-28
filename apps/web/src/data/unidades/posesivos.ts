// Unidad 13 · Posesivos. Perfil 1: quien prepara una mudanza a Montreal.
// Fuente editorial: Documentos_Proyecto/05_Unidades/13_posesivos/fuente.md.
import type { Unidad } from "./tipos";

export const posesivos: Unidad = {
  slug: "posesivos",
  titulo: "Posesivos",
  nivel: ["A1", "A2"],
  minutos: 9,
  objetivo: "Usa mon, ma, mes y las otras formas para hablar de personas y cosas cercanas.",
  ideaClave: {
    titulo: "Mira el nombre que sigue",
    texto: "El posesivo acompaña a un nombre y concuerda con ese nombre: son livre (su libro), sa valise (su maleta). Son y sa pueden referirse a él o a ella; el contexto lo aclara.",
    tabla: [
      { es: "Su libro (de ella)", fr: "son livre" },
      { es: "Su maleta (de él)", fr: "sa valise" },
    ],
    etiquetaFr: "Francés",
  },
  usos: [
    { titulo: "Una persona", ejemplo: "Ma sœur habite à Lima.", nota: "Ma acompaña a sœur, un nombre femenino." },
    { titulo: "Una cosa", ejemplo: "Mon dossier est ici.", nota: "Mon acompaña a dossier, un nombre masculino." },
    { titulo: "Más de una cosa", ejemplo: "Mes livres sont dans la valise.", nota: "Mes acompaña a livres, un nombre plural." },
  ],
  formacion: {
    regla: "Elige la fila según la persona de quien hablas y la columna según el nombre que viene después. El posesivo cambia con el nombre, no con el género de quien posee o tiene una relación con él.",
    tablaTitulo: "Formas delante del nombre",
    tabla: {
      cabeceras: ["Persona", "Masculino singular", "Femenino singular", "Plural"],
      filas: [
        ["yo", "mon", "ma", "mes"],
        ["tú", "ton", "ta", "tes"],
        ["él / ella", "son", "sa", "ses"],
        ["nosotros", "notre", "notre", "nos"],
        ["usted / ustedes", "votre", "votre", "vos"],
        ["ellos / ellas", "leur", "leur", "leurs"],
      ],
    },
    notasTitulo: "Tres detalles útiles",
    notas: [
      "Delante de un nombre femenino que empieza por vocal o h muda se usa mon, ton o son: mon amie, ton école, son histoire. El nombre sigue siendo femenino. Si empieza por h aspirada, se conserva ma, ta o sa: ma honte.",
      "El «su» español tiene varias traducciones: son/sa/ses (de él o ella), votre/vos (de usted o ustedes) y leur/leurs (de ellos o ellas). El contexto indica quién es la persona.",
      "En A2, para evitar repetir el nombre, puedes usar un pronombre posesivo: C'est ma valise. — C'est la mienne. La mienne sustituye a ma valise; la forma concuerda con valise.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado. Todavía no practica posesivos.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "concordancia", titulo: "Concordancia" },
    { id: "vocal", titulo: "Ante vocal" },
    { id: "su", titulo: "Los sentidos de «su»" },
  ],
  errores: [
    { grupo: "concordancia", corto: "Son valise", mal: "C'est son valise.", bien: "C'est sa valise.", porque: "Valise es femenino singular; se elige sa aunque la maleta sea de un hombre." },
    { grupo: "concordancia", corto: "Leur dossiers", mal: "Ce sont leur dossiers.", bien: "Ce sont leurs dossiers.", porque: "Dossiers está en plural; con ellos o ellas se usa leurs delante de un nombre plural." },
    { grupo: "vocal", corto: "Ma amie", mal: "C'est ma amie.", bien: "C'est mon amie.", porque: "Amie es femenino, pero empieza por vocal. Delante de ese nombre se usa mon." },
    { grupo: "su", corto: "Su de ellos", mal: "Ils préparent son dossier. (para decir «su expediente de ellos»)", bien: "Ils préparent leur dossier.", porque: "Si el expediente es de ellos, se usa leur. Son correspondería a una sola persona: él o ella." },
  ],
  ejemplos: {
    titulo: "Camila prepara sus cosas en Bogotá",
    intro: "Camila organiza una mudanza y habla con su amiga Inès sobre lo que va a llevar.",
    items: [
      { fr: "Mon dossier est sur la table.", es: "Mi expediente está sobre la mesa.", nota: "mon + nombre masculino" },
      { fr: "Ma valise est prête.", es: "Mi maleta está lista.", nota: "ma + nombre femenino" },
      { fr: "Mon amie Inès a mes livres.", es: "Mi amiga Inès tiene mis libros.", nota: "mon ante vocal; mes ante plural" },
      { fr: "Ses clés sont dans son sac.", es: "Sus llaves están en su bolso.", nota: "El contexto indica de quién son." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre objetos y personas de tu vida cotidiana. Usa un posesivo con un nombre masculino, otro con un nombre femenino y uno con un nombre plural.",
    requisitos: ["un posesivo con nombre masculino", "un posesivo con nombre femenino", "un posesivo con nombre plural"],
    modelo: "Mon livre est ici. Ma sœur arrive demain. Mes clés sont dans mon sac.",
  },
  resumen: [
    "El posesivo va delante de un nombre: mon dossier, ma valise, mes livres.",
    "La forma concuerda con el nombre que sigue: son livre, sa valise.",
    "Ante vocal o h muda: mon amie, ton école, son histoire.",
    "«Su» puede ser son/sa/ses, votre/vos o leur/leurs según la persona.",
  ],
  relacionados: [
    { titulo: "Artículos", url: "/gramatica/articulos/" },
    { titulo: "Pronombres tónicos", url: "/gramatica/pronombres-tonicos/" },
  ],
};
