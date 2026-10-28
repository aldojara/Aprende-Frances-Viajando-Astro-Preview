// Módulos e índice de Gramática: un solo lugar para el orden de los temas.
// Dentro de cada módulo, los temas van por nivel, en el orden en que se aprenden (estén o no disponibles).
// Lo usan el índice de Gramática, las páginas de cada nivel y Contenidos (regla D5 de
// Documentos_Proyecto/03_Guias/Reglas.md). Un tema publicado se escribe con «leccion» (su id en
// src/content/content/); uno pendiente, con «planificado».

export type TemaGramatica =
  | {
      leccion: string;
      title?: string;
      goal?: string;
      includes?: string[];
    }
  | {
      planificado: string;
      levels: string[];
      goal?: string;
    };

export interface ModuloGramatica {
  id: string;
  number: number;
  title: string;
  range: string;
  topics: TemaGramatica[];
}

export const modulosGramatica: ModuloGramatica[] = [
  {
    id: "fundamentos-frase",
    number: 1,
    title: "Fundamentos de la frase",
    range: "A1–A2",
    topics: [
      { leccion: "articulos" },
      { planificado: "Género y número", levels: ["A1"] },
      { planificado: "Presente", levels: ["A1"] },
      { planificado: "Negación", levels: ["A1"] },
      { planificado: "Interrogación", levels: ["A1", "A2"] },
      { planificado: "Partitivos", levels: ["A1", "A2"] },
      { planificado: "Preposiciones básicas", levels: ["A1", "A2"] },
      { planificado: "Estructura de la frase", levels: ["A1", "A2"] },
    ],
  },
  {
    id: "tiempos-modos-formas",
    number: 2,
    title: "Tiempos, modos y formas verbales",
    range: "A1–C1",
    topics: [
      { planificado: "Impératif", levels: ["A1", "A2"], goal: "Dar consejos" },
      { leccion: "passe-compose",
        goal: "Hablar del pasado",
      },
      { leccion: "imparfait",
        goal: "Hablar del pasado",
      },
      { leccion: "passe-compose-vs-imparfait",
        goal: "Hablar del pasado",
      },
      { leccion: "futur-simple",
        goal: "Hablar de planes y predicciones",
      },
      { leccion: "conditionnel-present",
        goal: "Dar consejos y formular hipótesis",
      },
      { leccion: "plus-que-parfait", goal: "Hablar del pasado" },
      { leccion: "subjonctif-present",
        goal: "Expresar obligación, duda y valoración",
      },
      { planificado: "Participe présent", levels: ["B1", "B2"] },
      { planificado: "Gérondif", levels: ["B1", "B2"] },
      { planificado: "Voix passive", levels: ["B1", "B2"] },
      { planificado: "Futur antérieur", levels: ["B2", "C1"] },
      { leccion: "conditionnel-passe",
        goal: "Formular hipótesis",
      },
      { leccion: "subjonctif-passe", goal: "Valorar una acción ya terminada" },
    ],
  },
  {
    id: "pronombres-determinantes",
    number: 3,
    title: "Pronombres y determinantes",
    range: "A1–C1",
    topics: [
      { leccion: "posesivos" },
      { leccion: "demostrativos" },
      { leccion: "pronombres-tonicos" },
      { leccion: "pronombres-complemento",
        title: "Pronombres complemento COD, COI, y, en",
        goal: "Evitar repeticiones y conectar ideas",
        includes: ["COD", "COI", "y", "en"],
      },
      { leccion: "pronombres-relativos", goal: "Conectar ideas sin repetir" },
      { planificado: "Indefinidos", levels: ["A2", "B1"] },
      { planificado: "Dobles pronombres", levels: ["B1", "B2"] },
    ],
  },
  {
    id: "transformacion-discurso",
    number: 4,
    title: "Construcción y transformación del discurso",
    range: "B1–C1",
    topics: [
      { leccion: "discours-indirect",
        goal: "Contar lo que alguien dijo",
      },
      { planificado: "Discours indirect au présent", levels: ["B1", "B2"] },
      { planificado: "Discours indirect au passé", levels: ["B1", "B2"] },
      { planificado: "Concordancia de tiempos", levels: ["B1", "B2"] },
      { planificado: "Transformación de expresiones temporales", levels: ["B1", "B2"] },
      { planificado: "Interrogación indirecta", levels: ["B1", "B2"] },
      { planificado: "Verbos introductores", levels: ["B1", "B2"] },
      { planificado: "Voz pasiva", levels: ["B1", "B2"] },
      { planificado: "Deícticos", levels: ["B2", "C1"] },
      { planificado: "Mise en relief", levels: ["B2", "C1"] },
      { planificado: "Reformulación", levels: ["B2", "C1"] },
      { planificado: "Transformación del discurso", levels: ["B2", "C1"] },
    ],
  },
  {
    id: "conectores-relaciones",
    number: 5,
    title: "Conectores y relaciones lógicas",
    range: "A2–C1",
    topics: [
      { planificado: "Causa", levels: ["A2", "B1"], goal: "Expresar causa y consecuencia" },
      { planificado: "Consecuencia", levels: ["A2", "B1"], goal: "Expresar causa y consecuencia" },
      { planificado: "Comparación", levels: ["A2", "B1"] },
      { planificado: "Temporalidad", levels: ["A2", "B1"] },
      { planificado: "Condición", levels: ["A2", "B1"], goal: "Formular hipótesis" },
      { planificado: "Hipótesis", levels: ["A2", "B1"], goal: "Formular hipótesis" },
      { planificado: "Finalidad", levels: ["B1", "B2"] },
      { planificado: "Oposición", levels: ["B1", "B2"] },
      { planificado: "Concesión", levels: ["B1", "B2"] },
      { planificado: "Simultaneidad", levels: ["B1", "B2"] },
      { planificado: "Anterioridad", levels: ["B1", "B2"] },
      { planificado: "Restricción", levels: ["B2", "C1"] },
    ],
  },
  {
    id: "funciones-argumentacion",
    number: 6,
    title: "Funciones comunicativas y argumentación",
    range: "A1–C1",
    topics: [
      { planificado: "Expresar opinión", levels: ["A2", "B1"], goal: "Opinar y argumentar" },
      { planificado: "Expresar emociones", levels: ["A2", "B1"] },
      { planificado: "Dar consejos", levels: ["A2", "B1"], goal: "Dar consejos" },
      { planificado: "Expresar obligación", levels: ["A2", "B1"], goal: "Expresar obligación" },
      { planificado: "Acordar y discrepar", levels: ["B1", "B2"], goal: "Opinar y argumentar" },
      { planificado: "Justificar", levels: ["B1", "B2"], goal: "Opinar y argumentar" },
      { planificado: "Dar ejemplos", levels: ["B1", "B2"], goal: "Opinar y argumentar" },
      { planificado: "Organizar un argumento", levels: ["B1", "B2"], goal: "Opinar y argumentar" },
      { planificado: "Expresar duda", levels: ["B1", "B2"] },
      { planificado: "Expresar certeza", levels: ["B1", "B2"] },
      { planificado: "Matizar", levels: ["B2", "C1"], goal: "Opinar y argumentar" },
      { planificado: "Presentar datos", levels: ["B2", "C1"], goal: "Opinar y argumentar" },
    ],
  },
];

// Ids de las lecciones en orden de aprendizaje (módulo a módulo).
export const ordenLecciones: string[] = modulosGramatica.flatMap((modulo) =>
  modulo.topics.flatMap((tema) => ("leccion" in tema ? [tema.leccion] : [])),
);
