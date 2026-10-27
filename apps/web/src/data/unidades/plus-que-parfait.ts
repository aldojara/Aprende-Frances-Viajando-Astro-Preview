// Unidad 9 · Plus-que-parfait. Perfil 1: quien se prepara para emigrar.
// Fuente editorial: Documentos_Proyecto/05_Unidades/09_plus-que-parfait/fuente.md.
import type { Unidad } from "./tipos";

export const plusQueParfait: Unidad = {
  slug: "plus-que-parfait",
  titulo: "Plus-que-parfait",
  nivel: ["B1", "B2"],
  minutos: 11,
  objetivo: "Cuenta qué había pasado antes de otro momento del pasado y formula hipótesis sobre lo que no ocurrió.",
  ideaClave: {
    titulo: "Un pasado anterior a otro pasado",
    texto: "El plus-que-parfait suele corresponder a «había + participio»: Quand j'ai appelé, Mélanie était déjà partie (cuando llamé, Mélanie ya se había ido). El punto de referencia está en el pasado; el plus-que-parfait cuenta lo que ocurrió antes.",
    tabla: [
      { es: "Cuando llegué, la clase ya había empezado.", fr: "Quand je suis arrivé(e), le cours avait déjà commencé." },
      { es: "Si hubiera sabido, habría llamado.", fr: "Si j'avais su, j'aurais appelé." },
    ],
    etiquetaFr: "Francés (plus-que-parfait)",
    nota: "El plus-que-parfait destaca la anterioridad; si el orden ya está claro, también puede narrarse con passé composé.",
  },
  usos: [
    { titulo: "Explicar qué había pasado antes", ejemplo: "J'ai retrouvé le dossier que j'avais préparé la veille." },
    { titulo: "Dar la causa de una situación pasada", ejemplo: "J'étais rassurée parce que j'avais bien révisé." },
    { titulo: "Imaginar otro pasado con si", ejemplo: "Si j'avais pris le métro, je serais arrivé(e) plus tôt.", nota: "En esta hipótesis, la consecuencia suele ir en conditionnel passé." },
  ],
  formacion: {
    regla: "Avoir o être en imparfait + participio pasado. Se elige el mismo auxiliar que en passé composé: j'avais préparé, j'étais arrivé(e).",
    formula: ["Avoir / être en imparfait", "Participio pasado"],
    tablaTitulo: "Tabla de conjugación: préparer y arriver",
    tabla: {
      cabeceras: ["Sujeto", "préparer (avoir)", "arriver (être)"],
      filas: [
        ["je / j'", "j'avais préparé", "j'étais arrivé(e)"],
        ["tu", "tu avais préparé", "tu étais arrivé(e)"],
        ["il / elle / on", "il avait préparé · elle avait préparé", "il était arrivé · elle était arrivée"],
        ["nous", "nous avions préparé", "nous étions arrivé(e)s"],
        ["vous", "vous aviez préparé", "vous étiez arrivé(e)(s)"],
        ["ils / elles", "ils avaient préparé · elles avaient préparé", "ils étaient arrivés · elles étaient arrivées"],
      ],
    },
    notasTitulo: "Auxiliar, concordancia y orden",
    notas: [
      "Con être, en los verbos no pronominales, el participio concuerda con el sujeto: elle était partie, ils étaient arrivés. Los pronominales tienen reglas de concordancia propias: elle s'était lavé les mains.",
      "Con avoir, el participio no concuerda con el sujeto: elle avait préparé. Puede concordar con un complemento directo que va antes: les lettres qu'elle avait écrites.",
      "La negación rodea al auxiliar: je n'avais pas compris, elle n'était pas partie. Los pronombres van antes del auxiliar: je l'avais appelé, elle s'était préparée.",
    ],
  },
  consulta: [
    { titulo: "Tres tiempos en una historia", tabla: { cabeceras: ["Tiempo", "Papel en este ejemplo", "Ejemplo"], filas: [
      ["Plus-que-parfait", "Hecho anterior", "J'avais préparé mes notes."],
      ["Imparfait", "Situación de fondo", "J'étais calme."],
      ["Passé composé", "Hecho que avanza el relato", "L'entretien a commencé."],
    ] } },
    { titulo: "Si + plus-que-parfait", puntos: [
      "Para una hipótesis contraria a un hecho pasado: Si j'avais mieux dormi, j'aurais été plus concentré(e).",
      "En la parte con si de condición va plus-que-parfait; en el resultado suele ir conditionnel passé. La página de conditionnel passé desarrolla esa segunda parte.",
    ] },
  ],
  gruposErrores: [
    { id: "tiempo", titulo: "Orden de los hechos" },
    { id: "auxiliar", titulo: "Auxiliar y participio" },
    { id: "si", titulo: "Hipótesis con si" },
  ],
  errores: [
    { grupo: "tiempo", corto: "J'ai préparé (antes)", mal: "Quand le cours a commencé, j'ai déjà préparé mes notes. (para «ya había preparado»)", bien: "Quand le cours a commencé, j'avais déjà préparé mes notes.", porque: "La preparación es anterior al comienzo del curso. Para marcar esa relación desde el pasado, usa plus-que-parfait." },
    { grupo: "tiempo", corto: "J'avais arrivé", mal: "Quand je suis entré(e), Mélanie avait déjà arrivé.", bien: "Quand je suis entré(e), Mélanie était déjà arrivée.", porque: "Arriver se construye con être en los tiempos compuestos; aquí el participio concuerda con Mélanie." },
    { grupo: "auxiliar", corto: "Elle avait partie", mal: "Elle avait partie avant mon appel.", bien: "Elle était partie avant mon appel.", porque: "Partir lleva être: elle était partie. En este verbo no pronominal, el participio concuerda con elle." },
    { grupo: "auxiliar", corto: "Je n'avais compris pas", mal: "Je n'avais compris pas la question.", bien: "Je n'avais pas compris la question.", porque: "En la negación simple, ne y pas rodean al auxiliar en imparfait." },
    { grupo: "si", corto: "Si j'aurais su", mal: "Si j'aurais su, je t'aurais appelé(e).", bien: "Si j'avais su, je t'aurais appelé(e).", porque: "En una condición contraria a un hecho pasado, la parte con si lleva plus-que-parfait; el resultado, conditionnel passé." },
  ],
  ejemplos: {
    titulo: "Mariana recuerda su primera clase en línea",
    intro: "Mariana, de Bogotá, se prepara para mudarse a Montreal. Después de una clase de francés, le cuenta a Andrés cómo le fue.",
    items: [
      { fr: "J'avais préparé mes questions la veille.", es: "Había preparado mis preguntas el día anterior.", nota: "acción anterior" },
      { fr: "Quand le cours a commencé, j'avais déjà ouvert mes notes.", es: "Cuando empezó la clase, ya había abierto mis apuntes.", nota: "plus-que-parfait antes del passé composé" },
      { fr: "La professeure était arrivée quelques minutes plus tôt.", es: "La profesora había llegado unos minutos antes.", nota: "arriver → être; concordancia" },
      { fr: "Je n'avais pas compris une consigne, alors j'ai posé une question.", es: "No había entendido una instrucción, así que hice una pregunta.", nota: "negación alrededor del auxiliar" },
      { fr: "J'étais moins nerveuse parce que j'avais bien révisé.", es: "Estaba menos nerviosa porque había repasado bien.", nota: "imparfait para el estado; plus-que-parfait para la causa anterior" },
      { fr: "Je lui ai montré les phrases que j'avais écrites.", es: "Le mostré las frases que había escrito.", nota: "con avoir, concordancia con objeto directo anterior" },
      { fr: "Si j'avais dormi davantage, j'aurais parlé plus facilement.", es: "Si hubiera dormido más, habría hablado con más facilidad.", nota: "si + plus-que-parfait; resultado en conditionnel passé" },
    ],
  },
  aplicacion: {
    consigna: "Cuenta en cuatro frases algo que salió bien o mal en una clase, entrevista o mudanza. Di qué había pasado antes.",
    requisitos: ["dos frases con plus-que-parfait", "un hecho posterior en passé composé", "una causa con parce que", "una hipótesis con si + plus-que-parfait y conditionnel passé"],
    modelo: "J'avais préparé mes questions la veille. J'avais aussi révisé le vocabulaire. Quand l'entretien a commencé, j'étais calme parce que j'avais bien dormi. Si j'avais oublié mes notes, j'aurais été plus nerveuse.",
  },
  resumen: [
    "Plus-que-parfait = avoir o être en imparfait + participio pasado: j'avais compris, j'étais partie.",
    "Presenta un hecho anterior a un punto de referencia pasado: quand je suis arrivé(e), le cours avait commencé.",
    "El auxiliar y las reglas de concordancia son los de passé composé; con avoir no hay concordancia con el sujeto.",
    "Si + plus-que-parfait expresa una hipótesis sobre el pasado: si j'avais su, j'aurais appelé.",
  ],
  relacionados: [
    { titulo: "Passé composé vs imparfait", url: "/gramatica/passe-compose-vs-imparfait/" },
    { titulo: "Conditionnel passé", url: "/gramatica/conditionnel-passe/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
  ],
};
