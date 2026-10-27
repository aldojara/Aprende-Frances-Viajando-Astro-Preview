// Unidad 10 · Discours indirect. Perfil 2: quien ya vive en Quebec.
// Fuente editorial: Documentos_Proyecto/05_Unidades/10_discours-indirect/fuente.md.
import type { Unidad } from "./tipos";

export const discoursIndirect: Unidad = {
  slug: "discours-indirect",
  titulo: "Discours indirect",
  nivel: ["B1", "B2", "C1"],
  minutos: 13,
  objetivo: "Cuenta lo que alguien dijo, preguntó o pidió sin repetir sus palabras literalmente.",
  ideaClave: {
    titulo: "Cambian el punto de vista y, a veces, el tiempo",
    texto: "Al transmitir palabras ajenas, adaptas pronombres y referencias de tiempo o lugar. Si cuentas desde el pasado, el tiempo verbal puede cambiar según la relación temporal y lo que sigue siendo cierto.",
    tabla: [
      { es: "«Llego mañana» → Dice que llega mañana.", fr: "« J'arrive demain. » → Elle dit qu'elle arrive demain." },
      { es: "«¿Vienes?» → Pregunta si vienes.", fr: "« Tu viens ? » → Elle demande si tu viens." },
    ],
    etiquetaFr: "Francés (discours indirect)",
    nota: "El si de una pregunta («si vienes») introduce una interrogación indirecta; no es el si de una condición.",
  },
  usos: [
    { titulo: "Transmitir una afirmación", ejemplo: "Mélanie dit que la réunion commence à neuf heures." },
    { titulo: "Contar una pregunta de sí o no", ejemplo: "Elle demande si nous avons reçu son message." },
    { titulo: "Transmitir una petición", ejemplo: "Elle nous demande de confirmer l'heure.", nota: "Demander à quelqu'un de + infinitivo." },
  ],
  formacion: {
    regla: "Afirmación: dire que. Pregunta de sí o no: demander si. Pregunta abierta: demander + interrogativo (qu'est-ce que → ce que; qu'est-ce qui → ce qui). Petición u orden: demander/dire à quelqu'un de + infinitivo.",
    formula: ["Verbo introductor", "que / si / interrogativo / de", "Mensaje adaptado"],
    tablaTitulo: "De palabras directas a palabras transmitidas",
    tabla: {
      cabeceras: ["En directo", "En indirecto"],
      filas: [
        ["« Tu as reçu le courriel ? »", "Elle demande si j'ai reçu le courriel."],
        ["« Où est la salle ? »", "Elle demande où est la salle."],
        ["« Confirmez l'heure. »", "Elle nous demande de confirmer l'heure."],
      ],
    },
    notasTitulo: "Qué hay que adaptar",
    notas: [
      "Adapta los pronombres a quien cuenta: «Je pars» → elle dit qu'elle part; «Tu viens ?» → elle me demande si je viens.",
      "En la pregunta indirecta no se usan est-ce que ni la inversión con guion (est-elle). Con sujeto nombre, el verbo puede ir antes: «Où est la salle ?» → elle demande où est la salle.",
      "Aquí y mañana pueden mantenerse si todavía son el mismo lugar y el mismo día. Si cambia el punto de referencia, ici puede pasar a là y demain a le lendemain.",
    ],
  },
  consulta: [
    { titulo: "Si el verbo introductor está en pasado", tabla: { cabeceras: ["En directo", "En indirecto", "Relación"], filas: [
      ["« Je travaille. »", "Elle a dit qu'elle travaillait.", "simultáneo: présent → imparfait"],
      ["« J'ai terminé. »", "Elle a dit qu'elle avait terminé.", "anterior: passé composé → plus-que-parfait"],
      ["« Je viendrai. »", "Elle a dit qu'elle viendrait.", "posterior: futur → conditionnel présent"],
    ] }, puntos: ["Imparfait, plus-que-parfait y conditionnel suelen conservar su forma al pasar a indirecto desde un introductor pasado.", "Estos cambios son frecuentes al relatar desde un pasado. Si el hecho sigue siendo cierto, se puede mantener el presente: Il m'a dit qu'il habite à Laval."] },
    { titulo: "Referencias que dependen del contexto", tabla: { cabeceras: ["En directo", "Desde otro momento o lugar"], filas: [
      ["aujourd'hui", "ce jour-là"], ["demain", "le lendemain"], ["hier", "la veille"], ["ici", "là"],
    ] }, puntos: ["Son adaptaciones cuando cambia el punto de vista, no sustituciones automáticas."] },
  ],
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica de discours indirect: repasa la elección del auxiliar del passé composé, que usarás al contar lo que alguien dijo.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "conectores", titulo: "Que, si y de" },
    { id: "preguntas", titulo: "Orden de la pregunta" },
    { id: "perspectiva", titulo: "Tiempo y perspectiva" },
  ],
  errores: [
    { grupo: "conectores", corto: "Pregunta con que", mal: "Elle demande que j'ai reçu son message. (para «pregunta si lo recibí»)", bien: "Elle demande si j'ai reçu son message.", porque: "Una pregunta de sí o no se introduce con si; que introduce una afirmación." },
    { grupo: "conectores", corto: "Demande que venir", mal: "Elle me demande que venir demain.", bien: "Elle me demande de venir demain.", porque: "Para transmitir esta petición: demander à quelqu'un de + infinitivo. También es posible elle demande que je vienne, con subjonctif." },
    { grupo: "conectores", corto: "Qu'est-ce que indirecto", mal: "Elle demande qu'est-ce que je veux.", bien: "Elle demande ce que je veux.", porque: "Qu'est-ce que introduce una pregunta directa; en una pregunta indirecta se usa ce que. Para el sujeto de la pregunta: qu'est-ce qui → ce qui." },
    { grupo: "preguntas", corto: "Inversión con guion", mal: "Elle demande où la salle est-elle.", bien: "Elle demande où est la salle.", porque: "La pregunta indirecta no usa la inversión con guion del pronombre (est-elle). Con el sujeto nombre la salle, el verbo puede ir antes: où est la salle." },
    { grupo: "perspectiva", corto: "Je sin adaptar", mal: "Mélanie dit que je suis en retard. (si Mélanie habla de sí misma)", bien: "Mélanie dit qu'elle est en retard.", porque: "El je de las palabras de Mélanie se convierte en elle al contarlas desde fuera." },
    { grupo: "perspectiva", corto: "Mañana, otro día", mal: "Lundi, elle a dit qu'elle viendrait demain. (contado el miércoles; visita prevista para el martes)", bien: "Lundi, elle a dit qu'elle viendrait le lendemain.", porque: "Al contarlo el miércoles, demain sería jueves. Le lendemain sitúa la visita el día después de lo dicho." },
  ],
  ejemplos: {
    titulo: "Una reunión de vecinos en Montreal",
    intro: "José Luis vive en Montreal. Después de una reunión de vecinos, le cuenta a Daniela lo que dijo y preguntó Mélanie.",
    items: [
      { fr: "Mélanie a dit que la réunion commencerait à dix-huit heures.", es: "Mélanie dijo que la reunión comenzaría a las seis de la tarde.", nota: "hecho posterior visto desde el pasado" },
      { fr: "Elle a demandé si nous avions reçu son courriel.", es: "Preguntó si habíamos recibido su correo electrónico.", nota: "pregunta de sí o no; hecho anterior" },
      { fr: "Elle a demandé où se trouvait la nouvelle salle.", es: "Preguntó dónde estaba la nueva sala.", nota: "pregunta abierta, sin inversión con guion" },
      { fr: "Elle nous a demandé de confirmer notre présence.", es: "Nos pidió que confirmáramos nuestra asistencia.", nota: "demander à quelqu'un de + infinitivo" },
      { fr: "Elle a dit qu'elle habitait près du métro.", es: "Dijo que vivía cerca del metro.", nota: "simultáneo con lo dicho" },
      { fr: "Elle m'a dit que le concierge s'appelle Marc.", es: "Me dijo que el encargado del edificio se llama Marc.", nota: "el presente puede mantenerse si sigue siendo cierto" },
      { fr: "Elle a demandé ce que je voulais pour la réunion.", es: "Preguntó qué quería para la reunión.", nota: "qu'est-ce que → ce que" },
      { fr: "Elle nous a dit de venir à dix-huit heures.", es: "Nos dijo que fuéramos a las seis de la tarde.", nota: "dire à quelqu'un de + infinitivo" },
    ],
  },
  aplicacion: {
    consigna: "Cuenta en cuatro frases una conversación reciente con un colega o vecino: qué dijo, qué preguntó y qué pidió.",
    requisitos: ["una afirmación con dire que", "una pregunta de sí o no con demander si", "una pregunta abierta sin est-ce que ni inversión con guion", "una petición con demander à quelqu'un de + infinitivo"],
    modelo: "Mélanie a dit que la réunion commencerait à dix-huit heures. Elle m'a demandé si j'avais reçu son courriel. Elle a demandé où se trouvait la salle. Elle m'a demandé de confirmer ma présence.",
  },
  resumen: [
    "Afirmación → dire que; pregunta de sí o no → demander si; petición → demander à quelqu'un de + infinitivo.",
    "En una pregunta indirecta no se usan est-ce que ni la inversión con guion del pronombre; qu'est-ce que pasa a ce que y qu'est-ce qui a ce qui.",
    "Adapta pronombres y referencias de tiempo o lugar según quién cuenta y desde cuándo o dónde.",
    "Con un introductor en pasado, présent → imparfait, passé composé → plus-que-parfait y futur → conditionnel son cambios frecuentes; el presente puede mantenerse si lo dicho sigue vigente.",
  ],
  relacionados: [
    { titulo: "Pronombres complemento", url: "/gramatica/pronombres-complemento/" },
    { titulo: "Plus-que-parfait", url: "/gramatica/plus-que-parfait/" },
    { titulo: "Conditionnel présent", url: "/gramatica/conditionnel-present/" },
  ],
};
