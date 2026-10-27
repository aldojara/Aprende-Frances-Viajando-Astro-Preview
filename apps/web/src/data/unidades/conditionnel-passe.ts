// Unidad 5 · Conditionnel passé. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/05_conditionnel-passe/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 1: quien se prepara para emigrar).
// Tema nuevo: no tenía lección antigua; su ficha para los listados es src/content/content/conditionnel-passe.md.
import type { Unidad } from "./tipos";

export const conditionnelPasse: Unidad = {
  slug: "conditionnel-passe",
  titulo: "Conditionnel passé",
  nivel: ["B2", "C1"],
  minutos: 12,
  objetivo: "Expresa lo que habrías hecho distinto: arrepentimientos, consejos tardíos e hipótesis que no se cumplieron.",

  ideaClave: {
    titulo: "Es el «habría + participio» del español",
    texto:
      "J'aurais aimé = me habría gustado. Muchos usos funcionan igual que en español. Las trampas: «debería haber…» se dice j'aurais dû + infinitivo, y después del si de condición nunca va el condicional.",
    tabla: [
      { es: "Debería haber estudiado más.", fr: "J'aurais dû étudier plus." },
      { es: "Si hubiera sabido, habría venido.", fr: "Si j'avais su, je serais venu(e)." },
    ],
    etiquetaFr: "Francés (conditionnel passé)",
    nota: "Después del si de condición va el plus-que-parfait (si j'avais su), nunca el condicional (no «si j'aurais su»).",
  },

  usos: [
    { titulo: "Un arrepentimiento", ejemplo: "J'aurais aimé commencer le français plus tôt." },
    { titulo: "Un reproche o un consejo que llega tarde", ejemplo: "Tu aurais dû m'appeler avant l'entretien." },
    { titulo: "Una hipótesis que no se cumplió", ejemplo: "Si j'avais révisé l'oral, j'aurais été plus calme." },
    { titulo: "Una información sin confirmar", ejemplo: "D'après les médias, l'aéroport aurait été fermé à cause de la tempête." },
  ],
  usosNota:
    "Con devoir, pouvoir y falloir sirve para lo que no se hizo: j'aurais dû (debí, debería haber), j'aurais pu (podría haber, pude haber), il aurait fallu (habría hecho falta).",

  formacion: {
    regla: "avoir o être en conditionnel présent + participio pasado.",
    formula: ["Sujeto", "avoir / être en conditionnel présent", "Participio pasado"],
    tablaTitulo: "Tabla de conjugación: con avoir y con être",
    tabla: {
      cabeceras: ["Sujeto", "aimer (con avoir)", "aller (con être)"],
      filas: [
        ["je / j'", "j'aurais aimé", "je serais allé(e)"],
        ["tu", "tu aurais aimé", "tu serais allé(e)"],
        ["il / elle / on", "il aurait aimé · elle aurait aimé", "il serait allé · elle serait allée"],
        ["nous", "nous aurions aimé", "nous serions allé(e)s"],
        ["vous", "vous auriez aimé", "vous seriez allé(e)(s)"],
        ["ils / elles", "ils auraient aimé · elles auraient aimé", "ils seraient allés · elles seraient allées"],
      ],
    },
    notasTitulo: "El auxiliar y la concordancia",
    notas: [
      "Lleva el mismo auxiliar que el passé composé: si dices je suis allé(e), aquí es je serais allé(e).",
      "Con être, en los verbos no pronominales, el participio concuerda con el sujeto: elle serait partie, nous serions venus.",
      "Los pronominales también van con être, pero su concordancia tiene reglas propias. En los casos de esta lección concuerdan con el sujeto: je me serais préparé(e), elle se serait trompée.",
      "El auxiliar va en conditionnel présent (aurais, serais…), no en presente.",
    ],
  },

  consulta: [
    {
      titulo: "Frases con si: qué tiempo va en cada parte",
      tabla: {
        cabeceras: ["Situación", "Parte con si", "Resultado", "Ejemplo"],
        filas: [
          ["Posible en el futuro", "si + presente", "futuro", "Si je réussis, je ferai une fête."],
          ["Imaginada en el presente", "si + imparfait", "conditionnel présent", "Si j'avais le temps, je réviserais plus."],
          ["No ocurrió en el pasado", "si + plus-que-parfait", "conditionnel passé", "Si j'avais su, je serais venu(e)."],
        ],
      },
    },
    {
      titulo: "Expresiones frecuentes",
      tabla: {
        cabeceras: ["Francés", "Español"],
        filas: [
          ["j'aurais aimé…", "me habría gustado…"],
          ["j'aurais dû…", "debí… · debería haber…"],
          ["j'aurais pu…", "podría haber… · pude haber…"],
          ["il aurait fallu…", "habría hecho falta…"],
          ["à ta place, j'aurais…", "yo que tú, habría…"],
          ["on aurait dit que…", "parecía que…"],
          ["je ne l'aurais jamais cru", "nunca lo habría creído"],
        ],
      },
    },
    {
      titulo: "¿Conditionnel présent o passé?",
      puntos: [
        "Présent: algo posible ahora o más adelante. Je voudrais partir en juin.",
        "Passé: algo que ya no se puede cambiar. J'aurais voulu partir en juin.",
        "Plus-que-parfait, para la parte con si: avoir o être en imparfait + participio (j'avais su, j'étais allé(e)).",
      ],
    },
  ],

  practica: {
    titulo: "¿Avoir o être?",
    texto: "Mientras preparamos la práctica de conditionnel passé: repasa la elección del auxiliar, que es la misma que en el passé composé: je suis allé(e) → je serais allé(e).",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "si", titulo: "Frases con si", descripcion: "Qué tiempo va en cada parte." },
    { id: "auxiliar", titulo: "Avoir o être", descripcion: "El español siempre usa «haber»; el francés, no." },
    { id: "deber", titulo: "Debería haber, podría haber" },
  ],

  errores: [
    {
      grupo: "si",
      corto: "Si j'aurais su",
      mal: "Si j'aurais su, je serais venu(e) plus tôt.",
      bien: "Si j'avais su, je serais venu(e) plus tôt.",
      porque: "Después del si de condición no va el condicional; va el plus-que-parfait, como «si hubiera sabido».",
    },
    {
      grupo: "si",
      corto: "Si…, je l'avais fait",
      mal: "Si j'avais su, je l'avais fait.",
      bien: "Si j'avais su, je l'aurais fait.",
      porque: "En español se oye «si lo hubiera sabido, lo hubiera hecho», con la misma forma en las dos partes. En francés, la segunda parte va en conditionnel passé.",
    },
    {
      grupo: "auxiliar",
      corto: "J'aurais allé",
      mal: "J'aurais allé à la séance d'information.",
      bien: "Je serais allé(e) à la séance d'information.",
      porque: "El español siempre usa «haber»; en francés, aller va con être, como en el passé composé.",
    },
    {
      grupo: "auxiliar",
      corto: "Je m'aurais préparée",
      mal: "Je m'aurais mieux préparée.",
      bien: "Je me serais mieux préparée.",
      porque: "Los verbos pronominales (se préparer, se tromper, se lever) van con être.",
    },
    {
      grupo: "auxiliar",
      corto: "Elle serait parti",
      mal: "Ma sœur serait parti avec moi.",
      bien: "Ma sœur serait partie avec moi.",
      porque: "Con être, el participio concuerda con el sujeto: ma sœur → partie.",
    },
    {
      grupo: "deber",
      corto: "Je devrais avoir étudié",
      mal: "Je devrais avoir étudié plus.",
      bien: "J'aurais dû étudier plus.",
      porque: "Es la traducción palabra por palabra de «debería haber estudiado»; como arrepentimiento no se dice así. En francés el conditionnel passé va en devoir, y el otro verbo queda en infinitivo.",
    },
    {
      grupo: "deber",
      corto: "Tu pourrais avoir demandé",
      mal: "Tu pourrais avoir demandé de l'aide.",
      bien: "Tu aurais pu demander de l'aide.",
      porque: "Igual que con devoir: «podrías haber pedido» = tu aurais pu + infinitivo.",
    },
    {
      grupo: "deber",
      corto: "J'aurais dû étudié",
      mal: "J'aurais dû étudié plus.",
      bien: "J'aurais dû étudier plus.",
      porque: "Después de aurais dû va el infinitivo (-er), no el participio (-é). Suenan igual, pero se escriben distinto.",
    },
  ],

  ejemplos: {
    titulo: "Después de la entrevista de práctica",
    intro: "La historia la cuenta Daniela, de Bogotá, que se prepara para mudarse a Montreal. Como es mujer, algunos participios van en femenino.",
    items: [
      { fr: "J'aurais aimé commencer le français plus tôt.", es: "Me habría gustado empezar el francés antes.", nota: "un arrepentimiento" },
      { fr: "J'aurais dû mieux préparer la partie orale.", es: "Debería haber preparado mejor la parte oral.", nota: "devoir + infinitivo" },
      { fr: "Si j'avais dormi davantage, j'aurais été plus calme.", es: "Si hubiera dormido más, habría estado más tranquila.", nota: "si + plus-que-parfait" },
      { fr: "Ma professeure m'a dit : « Tu aurais pu parler plus lentement. »", es: "Mi profesora me dijo: «Podrías haber hablado más despacio».", nota: "pouvoir + infinitivo" },
      { fr: "Mon ami Andrés m'a dit : « À ta place, j'aurais posé plus de questions. »", es: "Mi amigo Andrés me dijo: «Yo que tú, habría hecho más preguntas».", nota: "un consejo que llega tarde" },
      { fr: "Sans mon cours en ligne, je ne serais jamais arrivée à ce niveau.", es: "Sin mi curso en línea, nunca habría llegado a este nivel.", nota: "arriver → être, concordancia" },
      { fr: "Si j'avais révisé les nombres, je me serais moins trompée.", es: "Si hubiera repasado los números, me habría equivocado menos.", nota: "pronominal → être" },
      { fr: "Il aurait fallu arriver dix minutes plus tôt.", es: "Tendría que haber llegado diez minutos antes.", nota: "il aurait fallu + infinitivo" },
      { fr: "Mes parents seraient venus avec moi, mais ils travaillaient.", es: "Mis papás habrían venido conmigo, pero estaban trabajando.", nota: "venir → être, plural" },
      { fr: "On aurait dit que la professeure était fatiguée.", es: "Parecía que la profesora estaba cansada.", nota: "on aurait dit que" },
      { fr: "D'après les médias, l'aéroport de Montréal aurait été fermé à cause de la tempête.", es: "Según los medios, el aeropuerto de Montreal habría cerrado por la tormenta.", nota: "información sin confirmar" },
      { fr: "Je ne l'aurais jamais cru : j'ai parlé vingt minutes en français !", es: "Nunca lo habría creído: ¡hablé veinte minutos en francés!", nota: "je ne l'aurais jamais cru" },
    ],
  },

  aplicacion: {
    consigna: "Piensa en algo que ya pasó (un examen, una entrevista, una mudanza, un viaje) y escribe 5 frases sobre lo que habrías hecho distinto.",
    requisitos: [
      "j'aurais aimé",
      "j'aurais dû o j'aurais pu + infinitivo",
      "una frase con si + plus-que-parfait",
      "un verbo con être (aller, venir, partir, se préparer…)",
      "un consejo con à ta place",
    ],
    modelo:
      "J'aurais aimé avoir plus de temps pour réviser. J'aurais dû lire les consignes deux fois. Si j'avais dormi davantage, j'aurais été plus concentré(e). Je serais arrivé(e) plus tôt, mais le bus était en retard. À ta place, je me serais entraîné(e) à l'oral avec un ami.",
  },

  resumen: [
    "Conditionnel passé = avoir o être en conditionnel présent + participio: j'aurais aimé, je serais allé(e).",
    "Sirve para arrepentimientos, reproches, hipótesis que no se cumplieron e información sin confirmar.",
    "Si + plus-que-parfait → conditionnel passé: si j'avais su, je serais venu(e). Nunca «si j'aurais» en una condición.",
    "«Debería haber estudiado» = j'aurais dû étudier (devoir en conditionnel passé + infinitivo).",
    "Mismo auxiliar que en el passé composé; con être (verbos no pronominales), el participio concuerda con el sujeto.",
  ],

  relacionados: [
    { titulo: "Conditionnel présent", url: "/gramatica/conditionnel-present/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
  ],
};
