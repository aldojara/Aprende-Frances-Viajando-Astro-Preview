// Datos de prueba con todos los materiales opcionales (Ronda 3).
// Se utilizan exclusivamente para la página de vista previa /prototipo/unidad-materiales/.
import type { Unidad } from "./tipos";
import { passeCompose } from "./passe-compose";

export const passeComposeConMateriales: Unidad = {
  ...passeCompose,
  slug: "passe-compose-materiales",
  titulo: "Passé composé (con todos los materiales)",

  // 1. Vídeo de teoría (YouTube)
  videoTeoria: {
    url: "https://www.youtube.com/watch?v=QoonSm52zcc",
    titulo: "Passé composé en francés: guía completa (avoir, être y concordancia)",
    duracion: "14 min",
  },

  // 2. Resumen en audio (Google Drive / archivo)
  audioResumen: {
    url: "https://drive.google.com/file/d/1example-audio-drive-id/preview",
    titulo: "[Ejemplo] Resumen en audio: las claves del passé composé en 4 minutos",
    duracion: "4:15 min",
  },

  // 3. Infografía visual que se amplía
  infografia: {
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    miniatura: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    titulo: "[Ejemplo] Infografía visual: ¿Avoir o Être en un vistazo?",
    descripcion: "[Ejemplo de material] Esquema de apoyo con los 17 verbos de movimiento y pronominales.",
  },

  // 3. Mapa mental en árbol conceptual (de NotebookLM)
  mapaMental: {
    titulo: "Passé composé (Mapa conceptual NotebookLM)",
    nota: "Estructura global",
    hijos: [
      {
        titulo: "1. Fórmula base",
        nota: "Auxiliar en presente + Participio pasado",
        hijos: [
          { titulo: "Con Avoir (la gran mayoría)", nota: "Sin concordancia con sujeto" },
          { titulo: "Con Être (movimiento y pronominales)", nota: "Concuerda con sujeto (-e, -s)" },
        ],
      },
      {
        titulo: "2. Elección del auxiliar (3 preguntas)",
        hijos: [
          { titulo: "¿Es pronominal?", nota: "se lever, se perdre... → ÊTRE" },
          { titulo: "¿Es verbo de movimiento / cambio de estado?", nota: "17 verbos de la casa → ÊTRE" },
          { titulo: "¿Lleva complemento directo (qué)?", nota: "monter, passer, sortir... → AVOIR" },
        ],
      },
      {
        titulo: "3. Sintaxis y posición",
        hijos: [
          { titulo: "Negación", nota: "Ne... pas rodea al auxiliar (Je n'ai pas vu)" },
          { titulo: "Adverbios cortos", nota: "Entre auxiliar y participio (J'ai déjà visité)" },
        ],
      },
    ],
  },

  // 4. Tarjetas didácticas interactivas (Flashcards)
  tarjetasDidacticas: [
    {
      frente: "[Ejemplo] ¿Cómo se dice en francés: «Ayer comí crepes»?",
      reverso: "Hier, j'ai mangé des crêpes.",
      pista: "«Comí» y «he comido» van ambos en passé composé con avoir.",
    },
    {
      frente: "[Ejemplo] ¿Cómo se dice: «Ella se fue a Niza»?",
      reverso: "Elle est allée à Nice.",
      pista: "partir/aller van con être y concuerdan con el sujeto femenino (-e).",
    },
    {
      frente: "[Ejemplo] ¿Cómo se dice: «Me levanté temprano»?",
      reverso: "Je me suis levé(e) tôt.",
      pista: "Verbo pronominal se lever → auxiliar être.",
    },
    {
      frente: "[Ejemplo] ¿Cómo se dice: «No he visitado el museo»?",
      reverso: "Je n'ai pas visité le musée.",
      pista: "Ne... pas rodea al auxiliar avoir, no al participio.",
    },
  ],

  // 5. Descargas compactas
  descargas: [
    {
      titulo: "[Ejemplo] Ficha resumen de la lección",
      url: "/practica/avoir-o-etre/ficha.pdf",
      tipo: "pdf",
      peso: "1.2 MB",
    },
    {
      titulo: "[Ejemplo] Diapositivas de clase (PPTX)",
      url: "/presentacion-passe-compose.pdf",
      tipo: "presentacion",
      peso: "3.8 MB",
    },
  ],
};
