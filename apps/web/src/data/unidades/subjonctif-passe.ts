// Unidad 15 · Subjonctif passé. Perfil 1: preparación de una clase en Bogotá.
// Fuente editorial: Documentos_Proyecto/05_Unidades/15_subjonctif-passe/fuente.md.
import type { Unidad } from "./tipos";

export const subjonctifPasse: Unidad = {
  slug: "subjonctif-passe",
  titulo: "Subjonctif passé",
  nivel: ["B2", "C1"],
  minutos: 10,
  objetivo: "Expresa una duda o valoración sobre una acción que se presenta como ya terminada.",
  ideaClave: {
    titulo: "Mira cuándo ocurre la acción",
    texto: "La expresión que pide subjuntivo puede ser la misma. Elige el presente para una acción simultánea o posterior; el pasado, cuando la acción se presenta como ya cumplida respecto al momento de referencia.",
    tabla: [
      { es: "Me alegra que vengas hoy.", fr: "Je suis contente que tu viennes aujourd'hui." },
      { es: "Me alegra que hayas venido ayer.", fr: "Je suis contente que tu sois venu hier." },
    ],
    etiquetaFr: "Francés (subjonctif)",
  },
  usos: [
    { titulo: "Valorar algo ya hecho", ejemplo: "Je suis contente que tu aies envoyé le dossier.", nota: "El envío se presenta como anterior a la valoración." },
    { titulo: "Dudar de un hecho anterior", ejemplo: "Je doute qu'elle soit arrivée hier.", nota: "La duda se refiere a una llegada anterior." },
    { titulo: "Pedir algo terminado antes de un límite", ejemplo: "Il faut que nous ayons fini avant midi.", nota: "La acción deberá estar terminada antes de las doce." },
  ],
  formacion: {
    regla: "Se forma con avoir o être en subjonctif présent y el participio pasado. Se elige el auxiliar que usa el verbo en los tiempos compuestos, como en passé composé.",
    formula: ["que + sujeto", "avoir o être en subjonctif présent", "participio pasado"],
    tablaTitulo: "Dos modelos frecuentes",
    tabla: {
      cabeceras: ["Sujeto", "terminer (avoir)", "arriver (être)"],
      filas: [
        ["je", "que j'aie terminé", "que je sois arrivé(e)"],
        ["tu", "que tu aies terminé", "que tu sois arrivé(e)"],
        ["il / elle", "qu'il ait terminé / qu'elle ait terminé", "qu'il soit arrivé / qu'elle soit arrivée"],
        ["nous", "que nous ayons terminé", "que nous soyons arrivé(e)s"],
        ["vous", "que vous ayez terminé", "que vous soyez arrivé(e)(s)"],
        ["ils / elles", "qu'ils aient terminé / qu'elles aient terminé", "qu'ils soient arrivés / qu'elles soient arrivées"],
      ],
    },
    notasTitulo: "Auxiliar y concordancia",
    notas: [
      "Con être, en verbos no pronominales como arriver, el participio concuerda con el sujeto: elle soit arrivée. Los verbos pronominales requieren atender además a la función del pronombre.",
      "Con avoir, el participio no concuerda con el sujeto: elle ait terminé. Concuerda con un complemento directo anterior al verbo, un caso distinto que aquí no desarrollamos.",
      "El presente o el pasado no lo decide por sí sola la expresión introductora: Je suis contente que tu viennes aujourd'hui / que tu sois venu hier. Revisa el subjonctif présent si necesitas recordar cuándo se usa este modo.",
      "Tras un verbo en pasado, el español suele usar el imperfecto de subjuntivo: «me alegró que vinieras». En el francés corriente se usa el subjonctif présent para una acción simultánea o posterior (j'étais contente que tu viennes) y el passé para una anterior («me alegró que hubieras venido» → j'étais contente que tu sois venu).",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica trabaja la elección del auxiliar en pasado, una decisión que también necesitas al formar el subjonctif passé. Todavía no practica este tiempo completo.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "tiempo", titulo: "Modo y tiempo" },
    { id: "auxiliar", titulo: "El auxiliar" },
    { id: "acuerdo", titulo: "La concordancia" },
  ],
  errores: [
    { grupo: "tiempo", corto: "Indicativo", mal: "Je suis contente que tu as envoyé le dossier.", bien: "Je suis contente que tu aies envoyé le dossier.", porque: "Être content que expresa aquí una valoración y pide subjuntivo; el envío se presenta como ya hecho." },
    { grupo: "tiempo", corto: "Presente por pasado", mal: "Je suis contente que tu envoies le dossier hier. (para una acción terminada ayer)", bien: "Je suis contente que tu aies envoyé le dossier hier.", porque: "Si el envío ocurrió ayer, se presenta como anterior: corresponde el subjonctif passé." },
    { grupo: "tiempo", corto: "Indicativo tras pasado", mal: "J'étais contente que tu venais.", bien: "J'étais contente que tu viennes.", porque: "Aunque el verbo principal esté en pasado, la valoración pide subjuntivo; para la llegada simultánea se usa el subjonctif présent en el francés corriente." },
    { grupo: "auxiliar", corto: "Ait arrivée", mal: "Je doute qu'elle ait arrivée hier.", bien: "Je doute qu'elle soit arrivée hier.", porque: "Arriver se conjuga con être en este tiempo compuesto." },
    { grupo: "acuerdo", corto: "Soit arrivé", mal: "Je suis contente que Valeria soit arrivé.", bien: "Je suis contente que Valeria soit arrivée.", porque: "Con être y el verbo no pronominal arriver, el participio concuerda con Valeria, femenino singular." },
  ],
  ejemplos: {
    titulo: "Valeria comenta su clase de francés",
    intro: "Valeria, en Bogotá, habla con su profesora Maëlle después de enviar un trabajo.",
    items: [
      { fr: "Je suis contente que vous ayez reçu mon travail.", es: "Me alegra que haya recibido mi trabajo.", nota: "Una valoración sobre algo ya ocurrido." },
      { fr: "Je doute que mon message soit arrivé hier.", es: "Dudo que mi mensaje haya llegado ayer.", nota: "Arriver lleva être." },
      { fr: "Il faut que j'aie terminé la lecture avant vendredi.", es: "Es necesario que haya terminado la lectura antes del viernes.", nota: "La lectura debe estar terminada antes del límite." },
      { fr: "Je suis contente que nous ayons parlé de ce point.", es: "Me alegra que hayamos hablado de este punto.", nota: "Avoir + participio, sin concordancia con nous." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre una clase o un proyecto: valora una acción ya hecha, expresa una duda sobre otra y menciona algo que deba estar terminado antes de una fecha.",
    requisitos: ["una valoración con subjonctif passé", "una duda con subjonctif passé", "una acción terminada antes de un límite"],
    modelo: "Je suis contente que tu aies envoyé le document. Je doute qu'il soit arrivé hier. Il faut que nous ayons fini avant vendredi.",
  },
  resumen: [
    "El subjonctif passé presenta una acción como ya cumplida respecto a un momento de referencia.",
    "Se forma con avoir o être en subjonctif présent + participio pasado.",
    "Con être, arriver concuerda con el sujeto; con avoir, el participio no concuerda con el sujeto.",
    "La relación temporal, y no solo la expresión introductora, distingue présent y passé.",
  ],
  relacionados: [
    { titulo: "Subjonctif présent", url: "/gramatica/subjonctif-present/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
  ],
};
