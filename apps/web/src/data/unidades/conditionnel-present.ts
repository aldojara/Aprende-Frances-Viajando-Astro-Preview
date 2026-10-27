// Unidad 8 · Conditionnel présent. Contenido del documento fuente del 27 oct 2026
// (Documentos_Proyecto/05_Unidades/08_conditionnel-present/fuente.md). Español neutro latinoamericano.
// Ejemplos guiados por los perfiles de Documentos_Proyecto/02_Audiencia/ (perfil 2: quien ya vive en Quebec).
// Sustituye a la lección antigua de src/content/content/conditionnel-present.md (que queda como ficha para los listados).
// Sin práctica propia (bloque E): la página sale sin tarjeta de práctica.
import type { Unidad } from "./tipos";

export const conditionnelPresent: Unidad = {
  slug: "conditionnel-present",
  titulo: "Conditionnel présent",
  nivel: ["A2", "B1", "B2"],
  minutos: 12,
  objetivo: "Pide algo con cortesía, da consejos, expresa deseos e imagina situaciones.",

  ideaClave: {
    titulo: "Podría, debería, me gustaría: el «-ría» del español",
    texto:
      "En muchos usos, el conditionnel présent corresponde al condicional del español: je pourrais (podría), tu devrais (deberías), j'aimerais (me gustaría). Se forma con la raíz del futur simple y las terminaciones del imparfait. Las trampas: para imaginar, el español dice «si tuviera» y el francés, si j'avais; y para pedir, donde el español dice «quisiera», el francés dice je voudrais.",
    tabla: [
      { es: "Me gustaría hablar con la directora.", fr: "J'aimerais parler à la directrice." },
      { es: "Si tuviera tiempo, tomaría un curso.", fr: "Si j'avais le temps, je suivrais un cours." },
    ],
    etiquetaFr: "Francés (conditionnel présent)",
    nota: "Después del si de condición no va el conditionnel: si j'avais (no «si j'aurais»).",
  },

  usos: [
    {
      titulo: "Pedir algo con cortesía",
      ejemplo: "Pourriez-vous m'envoyer le document, s'il vous plaît ?",
      nota: "Más suave que pouvez-vous.",
    },
    { titulo: "Dar un consejo", ejemplo: "À ta place, je parlerais à ta responsable." },
    { titulo: "Expresar un deseo", ejemplo: "J'aimerais travailler dans mon domaine." },
    {
      titulo: "Imaginar una situación",
      ejemplo: "Si j'avais une voiture, j'irais au travail plus vite.",
      nota: "Si + imparfait; el resultado, en conditionnel.",
    },
  ],
  usosNota:
    "También sirve para dar una información sin confirmar (Selon la radio, il y aurait une panne dans le métro) y para un futuro visto desde el pasado (Elle m'a dit qu'elle viendrait).",

  formacion: {
    regla: "Raíz del futur simple + terminaciones del imparfait: -ais, -ais, -ait, -ions, -iez, -aient.",
    formula: ["Raíz del futur simple", "-ais, -ais, -ait, -ions, -iez, -aient"],
    tablaTitulo: "Tabla de conjugación: aimer, prendre y pouvoir",
    tabla: {
      cabeceras: ["Sujeto", "aimer", "prendre (sin la e)", "pouvoir (raíz pourr-)"],
      filas: [
        ["je / j'", "j'aimerais", "je prendrais", "je pourrais"],
        ["tu", "tu aimerais", "tu prendrais", "tu pourrais"],
        ["il / elle / on", "il aimerait", "il prendrait", "il pourrait"],
        ["nous", "nous aimerions", "nous prendrions", "nous pourrions"],
        ["vous", "vous aimeriez", "vous prendriez", "vous pourriez"],
        ["ils / elles", "ils aimeraient", "ils prendraient", "ils pourraient"],
      ],
    },
    notasTitulo: "Detalles de la raíz y la ortografía",
    notas: [
      "Las raíces irregulares son las mismas del futur simple: je serais, j'aurais, j'irais, je ferais, je viendrais, je voudrais, je devrais.",
      "Los verbos en -er que cambian la raíz en el futur la cambian también aquí: j'achèterais, j'appellerais, je paierais (o je payerais).",
      "Futur o conditionnel: je pourrai (podré) / je pourrais (podría); il pourra / il pourrait. Muchos hablantes pronuncian igual je pourrai y je pourrais. Para saber cuál escribir, cambia a il: il pourra (futur) / il pourrait (conditionnel).",
    ],
  },

  consulta: [
    {
      titulo: "Fórmulas para pedir y aconsejar",
      tabla: {
        cabeceras: ["Francés", "Español"],
        filas: [
          ["je voudrais…", "quisiera… · me gustaría…"],
          ["j'aimerais…", "me gustaría…"],
          ["pourriez-vous… ?", "¿podría (usted)…? · ¿podrían (ustedes)…?"],
          ["est-ce que tu pourrais… ? · pourrais-tu… ?", "¿podrías…?"],
          ["ça vous dérangerait de… ?", "¿le molestaría…?"],
          ["tu devrais… · vous devriez…", "deberías… · debería (usted)… · deberían (ustedes)…"],
          ["à ta place, je…", "yo que tú, …"],
          ["il faudrait…", "habría que… · haría falta…"],
          ["on pourrait…", "podríamos…"],
        ],
      },
    },
    {
      titulo: "Frases con si: qué tiempo va en cada parte",
      tabla: {
        cabeceras: ["Situación", "Parte con si", "Resultado", "Ejemplo"],
        filas: [
          ["Posible en el futuro", "si + presente", "futur simple", "Si j'ai le temps, je viendrai."],
          ["Imaginada en el presente", "si + imparfait", "conditionnel présent", "Si j'avais le temps, je viendrais."],
          ["No ocurrió en el pasado", "si + plus-que-parfait", "conditionnel passé", "Si j'avais eu le temps, je serais venu(e)."],
        ],
      },
    },
    {
      titulo: "Verbos frecuentes en conditionnel présent",
      tabla: {
        cabeceras: ["Infinitivo", "Conditionnel présent"],
        filas: [
          ["être", "je serais"], ["avoir", "j'aurais"], ["aller", "j'irais"], ["faire", "je ferais"],
          ["venir", "je viendrais"], ["voir", "je verrais"], ["envoyer", "j'enverrais"], ["savoir", "je saurais"],
          ["pouvoir", "je pourrais"], ["vouloir", "je voudrais"], ["devoir", "je devrais"], ["falloir", "il faudrait"],
        ],
      },
    },
  ],

  gruposErrores: [
    { id: "si", titulo: "Frases con si", descripcion: "Qué tiempo va en cada parte." },
    { id: "futur", titulo: "¿Futur o conditionnel?", descripcion: "Una -s o una -ait cambian el sentido." },
    { id: "formas", titulo: "Raíces y construcciones", descripcion: "Las raíces del futur y lo que va después de devoir." },
  ],

  errores: [
    {
      grupo: "si",
      corto: "Si j'aurais",
      mal: "Si j'aurais plus de temps, je suivrais un cours d'anglais.",
      bien: "Si j'avais plus de temps, je suivrais un cours d'anglais.",
      porque: "Después del si de condición no va el conditionnel; va el imparfait, como «si tuviera» en español.",
    },
    {
      grupo: "si",
      corto: "Si j'avais…, j'irai",
      mal: "Si j'avais une voiture, j'irai au travail plus vite.",
      bien: "Si j'avais une voiture, j'irais au travail plus vite.",
      porque: "Con si + imparfait, el resultado va en conditionnel («iría»), no en futur («iré»).",
    },
    {
      grupo: "futur",
      corto: "Je voudrai (para pedir)",
      mal: "Je voudrai un café, s'il vous plaît. (para pedirlo ahora)",
      bien: "Je voudrais un café, s'il vous plaît.",
      porque: "Je voudrai, sin s, es futur («querré»). Para pedir con cortesía se usa je voudrais («quisiera»).",
    },
    {
      grupo: "futur",
      corto: "À ta place, je parlerai",
      mal: "À ta place, je parlerai à ta responsable.",
      bien: "À ta place, je parlerais à ta responsable.",
      porque: "«Yo que tú, hablaría»: es una situación imaginada, así que va en conditionnel (-ais), no en futur (-ai).",
    },
    {
      grupo: "formas",
      corto: "Je pouvrais",
      mal: "Je pouvrais t'aider ce soir.",
      bien: "Je pourrais t'aider ce soir.",
      porque: "Pouvoir tiene la misma raíz que en el futur: pourr- (je pourrai → je pourrais).",
    },
    {
      grupo: "formas",
      corto: "J'allerais",
      mal: "J'allerais avec toi, mais je travaille.",
      bien: "J'irais avec toi, mais je travaille.",
      porque: "Aller tiene la raíz ir-, como en el futur: j'irai → j'irais.",
    },
    {
      grupo: "formas",
      corto: "Tu devrais de",
      mal: "Tu devrais de parler à ta responsable.",
      bien: "Tu devrais parler à ta responsable.",
      porque: "En español se oye «deberías de hablar»; en francés, con el sentido de «deber hacer algo», devoir va seguido directamente del infinitivo, sin de.",
    },
  ],

  ejemplos: {
    titulo: "Una semana en el trabajo",
    intro: "La historia la cuenta Mariana, de Ciudad de México, que trabaja en una oficina de Montreal. Esta semana llegó Camilo, un colega nuevo de Lima.",
    items: [
      { fr: "Bonjour, je voudrais parler à Mme Tremblay, s'il vous plaît.", es: "Buenos días, quisiera hablar con la señora Tremblay, por favor.", nota: "pedir con cortesía" },
      { fr: "Pourriez-vous m'envoyer le contrat avant vendredi ?", es: "¿Podría enviarme el contrato antes del viernes?", nota: "pourriez-vous: petición formal" },
      { fr: "Ça vous dérangerait de fermer la fenêtre ?", es: "¿Le molestaría cerrar la ventana?", nota: "ça vous dérangerait de" },
      { fr: "J'aimerais suivre une formation en gestion de projet.", es: "Me gustaría tomar una capacitación en gestión de proyectos.", nota: "un deseo" },
      { fr: "Camilo, tu devrais acheter des bottes d'hiver.", es: "Camilo, deberías comprar unas botas de invierno.", nota: "un consejo · devoir + infinitivo" },
      { fr: "À ta place, je prendrais le métro : c'est plus rapide que l'autobus.", es: "Yo que tú, tomaría el metro: es más rápido que el autobús.", nota: "à ta place" },
      { fr: "On pourrait manger ensemble demain midi.", es: "Podríamos comer juntos mañana al mediodía.", nota: "una propuesta" },
      { fr: "Si j'avais plus de temps, je l'aiderais à chercher un appartement.", es: "Si tuviera más tiempo, lo ayudaría a buscar un departamento.", nota: "si + imparfait → conditionnel" },
      { fr: "Si Camilo connaissait le quartier, il ne se perdrait pas.", es: "Si Camilo conociera el barrio, no se perdería.", nota: "una situación imaginada" },
      { fr: "Selon la radio, il y aurait une panne sur la ligne orange du métro.", es: "Según la radio, habría una avería en la línea naranja del metro.", nota: "información sin confirmar" },
      { fr: "Mme Tremblay m'a dit qu'elle répondrait lundi.", es: "La señora Tremblay me dijo que respondería el lunes.", nota: "futuro visto desde el pasado" },
      { fr: "Ce serait bien de prendre un café ensemble vendredi.", es: "Sería bueno tomar un café juntos el viernes.", nota: "ce serait bien de" },
    ],
  },

  aplicacion: {
    consigna: "Escribe un mensaje de 5 frases a un colega o a un vecino: pídele algo con cortesía, dale un consejo y propón un plan.",
    requisitos: [
      "una petición con pourrais-tu o pourriez-vous",
      "un deseo con j'aimerais",
      "un consejo con tu devrais o à ta place",
      "una frase con si + imparfait",
      "una propuesta con on pourrait",
    ],
    modelo:
      "Bonjour Julien, pourrais-tu m'envoyer l'ordre du jour de la réunion ? J'aimerais le lire avant lundi. Tu devrais aussi inviter Mélanie : elle connaît bien le projet. Si j'avais plus de temps, je préparerais une présentation. On pourrait en parler demain au café ?",
  },

  resumen: [
    "Conditionnel présent = raíz del futur simple + terminaciones del imparfait: j'aimerais, je pourrais, je serais.",
    "Sirve para pedir con cortesía, aconsejar, expresar deseos, imaginar situaciones y dar información sin confirmar.",
    "Si + imparfait → conditionnel: si j'avais le temps, je viendrais. Nunca «si j'aurais» en una condición.",
    "Je voudrais (quisiera) es conditionnel; je voudrai (querré), futur.",
    "Tu devrais + infinitivo, sin de: tu devrais parler.",
  ],

  relacionados: [
    { titulo: "Futur simple", url: "/gramatica/futur-simple/" },
    { titulo: "Conditionnel passé", url: "/gramatica/conditionnel-passe/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
  ],
};
