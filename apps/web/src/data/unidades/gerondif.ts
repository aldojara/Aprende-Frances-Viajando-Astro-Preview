// Unidad 20 · Gérondif. Perfil 2: vida cotidiana en Montreal.
// Fuente editorial: Documentos_Proyecto/05_Unidades/20_gerondif/fuente.md.
import type { Unidad } from "./tipos";

export const gerondif: Unidad = {
  slug: "gerondif",
  titulo: "Gérondif",
  nivel: ["B1", "B2"],
  minutos: 9,
  objetivo: "Expresa simultaneidad, manera, condición y oposición con en + participe présent.",
  ideaClave: {
    titulo: "En + participe présent",
    texto: "El gérondif relaciona una acción con la principal. Suele decir cuándo o cómo sucede, y normalmente las dos acciones comparten sujeto. Es invariable.",
    tabla: [
      { es: "Escucho francés mientras camino.", fr: "J'écoute du français en marchant." },
      { es: "Vi a Marie al salir del cine (yo salía).", fr: "J'ai vu Marie en sortant du cinéma." },
    ],
  },
  usos: [
    { titulo: "Simultaneidad", ejemplo: "En sortant du métro, Teresa a appelé sa voisine.", nota: "Teresa llamó a su vecina mientras salía del metro." },
    { titulo: "Manera o medio", ejemplo: "Elle apprend de nouveaux mots en lisant les journaux.", nota: "La lectura es el medio para aprender palabras." },
    { titulo: "Condición", ejemplo: "En partant tôt, tu arriveras à l'heure.", nota: "Si sales temprano, llegarás a tiempo." },
    { titulo: "Oposición con tout en", ejemplo: "Tout en sachant que c'était difficile, Teresa a postulé.", nota: "Aunque sabía que era difícil, Teresa se postuló. El contexto muestra un contraste claro." },
  ],
  formacion: {
    regla: "Pon en delante del participe présent: en sortant, en lisant. Para formar el participe présent y ver sus excepciones, consulta esa lección; aquí importa la relación entre las dos acciones.",
    formula: ["en", "participe présent"],
    notasTitulo: "Qué expresa y a quién se refiere",
    notas: [
      "El gérondif es invariable: Teresa et sa voisine parlent en marchant. Tout en puede marcar una simultaneidad destacada o una oposición: tout en travaillant.",
      "En la norma, su sujeto implícito suele ser el sujeto de la oración principal. J'ai vu Marie en sortant du cinéma significa que yo salía. J'ai vu Marie sortant du cinéma, sin en, atribuye la salida a Marie.",
      "Hay excepciones fijas y usos generales, como L'appétit vient en mangeant. No conviertas la coincidencia de sujetos en una prohibición absoluta.",
      "Para una acción en curso, «estoy comiendo» es je suis en train de manger, no je suis en mangeant. «Estudiando se aprende» se puede expresar como C'est en étudiant qu'on apprend.",
    ],
  },
  practica: {
    titulo: "¿Avoir o être?",
    texto: "Esta práctica elige el auxiliar del passé composé. No entrena el gérondif; sirve para repasar el auxiliar de otro tema.",
    url: "/practica/avoir-o-etre/",
  },
  gruposErrores: [
    { id: "forma", titulo: "Forma y sujeto" },
    { id: "sentido", titulo: "Sentido de la frase" },
    { id: "espanol", titulo: "Calcos del español" },
  ],
  errores: [
    { grupo: "forma", corto: "Falta en", mal: "Je lis le journal mangeant. (para «leo mientras como»)", bien: "Je lis le journal en mangeant.", porque: "Para indicar simultaneidad de dos acciones del mismo sujeto, se usa en + participe présent." },
    { grupo: "forma", corto: "Sujeto equívoco", mal: "En sortant du métro, la pluie a surpris Teresa. (si Teresa salía)", bien: "En sortant du métro, Teresa a été surprise par la pluie.", porque: "Con sujeto implícito, se espera que quien sale sea el sujeto principal: Teresa." },
    { grupo: "sentido", corto: "Quién salía", mal: "J'ai vu Marie sortant du cinéma. (si yo salía)", bien: "J'ai vu Marie en sortant du cinéma.", porque: "Sin en, sortant se refiere a Marie; con en, se refiere normalmente a je." },
    { grupo: "espanol", corto: "Progresivo español", mal: "Je suis en mangeant. (para «estoy comiendo»)", bien: "Je suis en train de manger.", porque: "El progresivo español se expresa con être en train de + infinitivo, no con être + gérondif." },
  ],
  ejemplos: {
    titulo: "Teresa se mueve por Montreal",
    intro: "Teresa vive en Montreal. Organiza su día, lee noticias locales y conversa con su vecina Chloé.",
    items: [
      { fr: "En sortant du métro, Teresa a appelé Chloé.", es: "Al salir del metro, Teresa llamó a Chloé.", nota: "Las dos acciones se refieren a Teresa." },
      { fr: "Teresa apprend du vocabulaire en lisant les journaux.", es: "Teresa aprende vocabulario leyendo los periódicos.", nota: "La lectura es el medio." },
      { fr: "En partant tôt, elle arrivera à l'heure.", es: "Si sale temprano, llegará a tiempo.", nota: "El gérondif expresa aquí una condición." },
      { fr: "Tout en sachant que c'était difficile, elle a postulé.", es: "Aun sabiendo que era difícil, se postuló.", nota: "Tout en introduce aquí una concesión: conocía la dificultad, pero se postuló." },
    ],
  },
  aplicacion: {
    consigna: "Escribe tres frases sobre tu día: una con simultaneidad, otra con medio y otra con condición. Mantén claro quién realiza cada acción.",
    requisitos: ["una frase con en + participe présent que marque simultaneidad", "una frase que indique el medio", "una condición con en + participe présent"],
    modelo: "J'écoute du français en marchant. J'apprends des mots en lisant le journal. En partant tôt, j'arriverai à l'heure.",
  },
  resumen: [
    "Gérondif = en + participe présent; es invariable.",
    "Sirve para simultaneidad, manera o medio y, según el contexto, condición; tout en puede marcar oposición.",
    "En la norma, suele compartir el sujeto de la oración principal, con excepciones fijas.",
    "J'ai vu Marie en sortant du cinéma: salía yo; J'ai vu Marie sortant du cinéma: salía Marie.",
    "«Estoy comiendo» no es je suis en mangeant, sino je suis en train de manger.",
  ],
  relacionados: [
    { titulo: "Participe présent", url: "/gramatica/participe-present/" },
    { titulo: "Imparfait", url: "/gramatica/imparfait/" },
    { titulo: "Passé composé", url: "/gramatica/passe-compose/" },
  ],
};
