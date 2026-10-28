// Unidad 18 · Futur antérieur. Perfil 1: planes encadenados para emigrar.
// Fuente editorial: Documentos_Proyecto/05_Unidades/18_futur-anterieur/fuente.md.
import type { Unidad } from "./tipos";

export const futurAnterieur: Unidad = {
  slug: "futur-anterieur",
  titulo: "Futur antérieur",
  nivel: ["B2", "C1"],
  minutos: 10,
  objetivo: "Expresa qué habrá terminado antes de otra acción futura y haz suposiciones sobre el pasado.",
  ideaClave: {
    titulo: "Una acción ya cumplida en el futuro",
    texto: "El futur antérieur presenta una acción como terminada antes de otro momento futuro. Después de quand para un hecho futuro, el francés usa indicativo futuro donde el español suele usar subjuntivo.",
    tabla: [
      { es: "Cuando haya terminado, te escribiré.", fr: "Quand j'aurai terminé, je t'écrirai." },
      { es: "Cuando llegues, hablaremos.", fr: "Quand tu arriveras, nous parlerons." },
    ],
    etiquetaFr: "Francés (indicativo futuro)",
  },
  usos: [
    { titulo: "Anterioridad futura", ejemplo: "Quand j'aurai reçu la réponse, je préparerai mon départ.", nota: "La recepción se presenta como terminada antes de preparar la salida." },
    { titulo: "Un límite futuro", ejemplo: "D'ici vendredi, j'aurai réuni les documents.", nota: "El conjunto estará completo antes del viernes." },
    { titulo: "Suposición sobre el pasado", ejemplo: "Elle n'est pas là : elle aura oublié notre rendez-vous.", nota: "Se le habrá olvidado: es una deducción, no un hecho confirmado." },
  ],
  formacion: {
    regla: "Usa avoir o être en futur simple + participio pasado. Elige el mismo auxiliar que en el passé composé del verbo y aplica sus reglas de concordancia.",
    formula: ["avoir o être en futur simple", "participio pasado"],
    tablaTitulo: "Dos modelos",
    tabla: {
      cabeceras: ["Sujeto", "terminer (avoir)", "arriver (être)"],
      filas: [
        ["je", "j'aurai terminé", "je serai arrivé(e)"],
        ["tu", "tu auras terminé", "tu seras arrivé(e)"],
        ["il / elle", "il / elle aura terminé", "il sera arrivé / elle sera arrivée"],
        ["nous", "nous aurons terminé", "nous serons arrivé(e)s"],
        ["vous", "vous aurez terminé", "vous serez arrivé(e)(s)"],
        ["ils / elles", "ils / elles auront terminé", "ils seront arrivés / elles seront arrivées"],
      ],
    },
    notasTitulo: "Auxiliar y conectores",
    notas: [
      "Con être y un verbo no pronominal como arriver, el participio concuerda con el sujeto: elle sera arrivée. En los pronominales interviene también la función del pronombre.",
      "Con avoir, el participio no concuerda con el sujeto: elle aura terminé. Concuerda con un objeto directo situado antes del verbo, un caso tratado en la lección de passé composé.",
      "Para un hecho futuro ya acabado, usa futur antérieur tras quand, lorsque, dès que, une fois que y après que: Dès que j'aurai reçu la réponse, je t'appellerai. Après que lleva indicativo en la norma, no subjuntivo.",
      "Si la acción no se presenta como terminada antes de la otra, puede ir futur simple: Quand tu arriveras, nous parlerons. Consulta esa lección para repasar el futuro simple.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica entrena la elección del auxiliar en pasado. Esa misma elección sirve para formar el futur antérieur; todavía no practica este tiempo completo.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "tiempo", titulo: "Tiempo tras conectores" },
    { id: "auxiliar", titulo: "Auxiliar y concordancia" },
    { id: "sentido", titulo: "Sentido de la suposición" },
  ],
  errores: [
    { grupo: "tiempo", corto: "Passé composé tras quand", mal: "Quand j'ai terminé, je t'écrirai. (para un hecho futuro)", bien: "Quand j'aurai terminé, je t'écrirai.", porque: "Para «cuando haya terminado» en el futuro, el francés usa futur antérieur de indicativo." },
    { grupo: "tiempo", corto: "Subjuntivo tras après que", mal: "Après que je sois arrivé, je t'appellerai. (para un hecho futuro en la norma)", bien: "Après que je serai arrivé, je t'appellerai.", porque: "Après que se construye con indicativo. Aquí la llegada estará completa antes de la llamada." },
    { grupo: "auxiliar", corto: "Auxiliar de arriver", mal: "Elle aura arrivée avant nous.", bien: "Elle sera arrivée avant nous.", porque: "Arriver usa être en los tiempos compuestos; arrivée concuerda con elle." },
    { grupo: "auxiliar", corto: "Acuerdo con avoir", mal: "Elle aura terminée son travail.", bien: "Elle aura terminé son travail.", porque: "Con avoir, el participio no concuerda con el sujeto; aquí el objeto directo va después." },
    { grupo: "sentido", corto: "Suposición como hecho", mal: "Elle aura oublié le rendez-vous. (para afirmar un hecho pasado comprobado)", bien: "Elle a oublié le rendez-vous.", porque: "Aura oublié expresa una deducción sobre el pasado; el passé composé sirve para afirmar el hecho." },
  ],
  ejemplos: {
    titulo: "Valentina organiza sus próximos pasos",
    intro: "Valentina, en Lima, conversa con su amigo Julien sobre sus planes de mudanza. Hablan de documentos en general, sin indicar requisitos migratorios.",
    items: [
      { fr: "Quand j'aurai reçu la réponse, je préparerai mon départ.", es: "Cuando haya recibido la respuesta, prepararé mi salida.", nota: "Recibir la respuesta ocurre antes de preparar la salida." },
      { fr: "Dès que j'aurai terminé mes cours, je chercherai un logement.", es: "En cuanto haya terminado mis cursos, buscaré alojamiento.", nota: "Dès que introduce un hecho futuro que se presenta como cumplido." },
      { fr: "Une fois que je serai arrivée, je t'écrirai.", es: "Una vez que haya llegado, te escribiré.", nota: "Valentina usa être y el participio femenino arrivée." },
      { fr: "Après que nous aurons préparé les documents, nous relirons tout.", es: "Después de que hayamos preparado los documentos, revisaremos todo.", nota: "Après que + indicativo futur antérieur." },
      { fr: "Julien n'a pas répondu : il aura oublié notre appel.", es: "Julien no respondió: se le habrá olvidado nuestra llamada.", nota: "Es una hipótesis sobre lo ocurrido." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre un plan personal: una con quand, otra con dès que y una suposición sobre una respuesta que aún no llegó. No afirmes requisitos migratorios.",
    requisitos: ["una acción anterior con quand + futur antérieur", "otra con dès que + futur antérieur", "una suposición sobre el pasado con futur antérieur"],
    modelo: "Quand j'aurai terminé mon cours, je chercherai un logement. Dès que j'aurai reçu une réponse, je t'écrirai. Julien n'a pas répondu : il aura oublié notre appel.",
  },
  resumen: [
    "Futur antérieur = auxiliar en futur simple + participio pasado.",
    "Elige avoir o être como en passé composé; con être no pronominal, el participio concuerda con el sujeto.",
    "Para «cuando haya terminado», usa quand j'aurai terminé, no un passé composé ni un presente.",
    "Après que lleva indicativo en la norma.",
    "Il aura oublié también puede expresar una suposición sobre el pasado.",
  ],
  relacionados: [
    { titulo: "Futur simple", url: "/gramatica/futur-simple/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Voz pasiva", url: "/gramatica/voz-pasiva/" },
  ],
};
