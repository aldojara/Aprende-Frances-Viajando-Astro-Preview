// Contenido de la práctica «¿Avoir o être?».
// BORRADOR: todo el francés debe revisarlo y aprobarlo el autor antes de publicar.

export const PROTOTIPO = true;

export type TipoId = "T1" | "T2" | "T3" | "T4" | "T5";

export type Pregunta = {
  id: string;
  enunciado: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  tipo?: TipoId;
};

export type Tipo = {
  id: TipoId;
  nombre: string;
  slug: string;
};

// El orden de esta lista es el orden pedagógico (desempates y orden estándar del reto).
export const tipos: Tipo[] = [
  { id: "T1", nombre: "Auxiliar con verbos de movimiento", slug: "verbos-de-movimiento" },
  { id: "T2", nombre: "Verbos pronominales", slug: "pronominales" },
  { id: "T3", nombre: "Verbos que cambian de auxiliar", slug: "verbos-que-cambian-de-auxiliar" },
  { id: "T4", nombre: "Concordancia del participio", slug: "concordancia" },
  { id: "T5", nombre: "Passé composé o imparfait", slug: "passe-compose-o-imparfait" },
];

export const ordenEstandar: TipoId[] = tipos.map((tipo) => tipo.id);

export const fichaPdf = "/descargas/ficha-avoir-o-etre-borrador.pdf";

export const practica: Pregunta[] = [
  {
    id: "p1",
    enunciado: "Hier, nous ___ avec des amis.",
    opciones: ["avons sorti", "sommes sorti(e)s"],
    correcta: 1,
    explicacion: "Sortir sin complemento directo: la persona sale → être, y el participio concuerda en plural.",
  },
  {
    id: "p2",
    enunciado: "Elle ___ la voiture du garage.",
    opciones: ["a sorti", "est sortie"],
    correcta: 0,
    explicacion: "Aquí sortir tiene complemento directo (la voiture): saca algo → avoir.",
  },
  {
    id: "p3",
    enunciado: "Samedi, ___ au cinéma.",
    opciones: ["j'ai allé", "je suis allé(e)"],
    correcta: 1,
    explicacion: "Aller va siempre con être. «J'ai allé» es el error más típico del hispanohablante.",
  },
  {
    id: "p4",
    enunciado: "Ils ___ un croissant au café.",
    opciones: ["ont mangé", "sont mangés"],
    correcta: 0,
    explicacion: "Manger no es de movimiento ni pronominal → avoir.",
  },
  {
    id: "p5",
    enunciado: "Ce matin, tu ___ à quelle heure ?",
    opciones: ["as levé", "t'es levé(e)"],
    correcta: 1,
    explicacion: "Se lever es pronominal: todos los pronominales van con être.",
  },
  {
    id: "p6",
    enunciado: "Marie ___ à Montréal en 1990.",
    opciones: ["est née", "a né"],
    correcta: 0,
    explicacion: "Naître (nacer) está en la lista de verbos con être; concordancia en femenino.",
  },
  {
    id: "p7",
    enunciado: "Nous ___ toute la journée à la maison.",
    opciones: ["avons resté", "sommes resté(e)s"],
    correcta: 1,
    explicacion: "Rester (quedarse) va con être, aunque en español «quedarse» no indique movimiento.",
  },
  {
    id: "p8",
    enunciado: "Il ___ les valises au grenier.",
    opciones: ["est monté", "a monté"],
    correcta: 1,
    explicacion: "Monter con complemento directo (les valises): sube algo → avoir.",
  },
];

export const diagnostico: Pregunta[] = [
  { id: "d1", tipo: "T1", enunciado: "Ils ___ arrivés hier.", opciones: ["ont", "sont"], correcta: 1, explicacion: "Arriver va con être." },
  { id: "d2", tipo: "T2", enunciado: "Je ___ réveillé tard.", opciones: ["me suis", "m'ai"], correcta: 0, explicacion: "Los pronominales van con être." },
  { id: "d3", tipo: "T3", enunciado: "Il ___ monté les valises.", opciones: ["est", "a"], correcta: 1, explicacion: "Monter + complemento directo → avoir." },
  { id: "d4", tipo: "T4", enunciado: "Elles sont ___ à huit heures.", opciones: ["parties", "parti"], correcta: 0, explicacion: "Con être, el participio concuerda con el sujeto (femenino plural)." },
  { id: "d5", tipo: "T5", enunciado: "Quand j'étais petit, je ___ au parc tous les jours.", opciones: ["suis allé", "allais"], correcta: 1, explicacion: "Costumbre en el pasado → imparfait." },
  { id: "d6", tipo: "T1", enunciado: "Elle ___ tombée dans l'escalier.", opciones: ["est", "a"], correcta: 0, explicacion: "Tomber va con être." },
  { id: "d7", tipo: "T2", enunciado: "Ils ___ promenés au parc.", opciones: ["s'ont", "se sont"], correcta: 1, explicacion: "Se promener es pronominal → être." },
  { id: "d8", tipo: "T3", enunciado: "Elle ___ sortie avec ses amies.", opciones: ["est", "a"], correcta: 0, explicacion: "Sortir sin complemento directo → être." },
  { id: "d9", tipo: "T4", enunciado: "Marie est ___ en retard.", opciones: ["arrivé", "arrivée"], correcta: 1, explicacion: "Con être, concordancia con Marie (femenino)." },
  { id: "d10", tipo: "T5", enunciado: "Hier, je ___ le train de 8 h.", opciones: ["ai pris", "prenais"], correcta: 0, explicacion: "Acción puntual y terminada → passé composé." },
  { id: "d11", tipo: "T1", enunciado: "Nous ___ partis très tôt.", opciones: ["avons", "sommes"], correcta: 1, explicacion: "Partir va con être." },
  { id: "d12", tipo: "T2", enunciado: "Tu ___ trompé de chemin.", opciones: ["t'es", "t'as"], correcta: 0, explicacion: "Se tromper es pronominal → être." },
  { id: "d13", tipo: "T3", enunciado: "___ deux jours à Paris.", opciones: ["Je suis passé(e)", "J'ai passé"], correcta: 1, explicacion: "Passer + tiempo (deux jours) funciona como complemento directo → avoir." },
  { id: "d14", tipo: "T4", enunciado: "Nous avons ___ les billets.", opciones: ["acheté", "achetés"], correcta: 0, explicacion: "Con avoir, el participio no concuerda con el sujeto; aquí el complemento va después." },
  { id: "d15", tipo: "T5", enunciado: "Il ___ quand le téléphone a sonné.", opciones: ["a dormi", "dormait"], correcta: 1, explicacion: "Acción en curso interrumpida por otra → imparfait." },
];

export type Sesion = {
  tipo: TipoId;
  idea: string;
  pregunta?: string;
  ejercicios: Pregunta[];
  fraseFinal?: { consigna: string; modelo: string };
};

// Sesión de muestra completa (T3). Las demás sesiones están pendientes de redactar.
export const sesiones: Partial<Record<TipoId, Sesion>> = {
  T3: {
    tipo: "T3",
    idea:
      "Sortir, monter, descendre, passer, rentrer y retourner usan être cuando expresan un movimiento de la persona, y avoir cuando llevan un complemento directo (algo que se saca, se sube, se baja, se pasa…).",
    pregunta: "Pregunta útil: ¿el verbo responde a «¿qué?»? Si la respuesta es sí → avoir.",
    ejercicios: [
      { id: "s1", enunciado: "Hier soir, Léa ___ avec ses collègues.", opciones: ["est sortie", "a sorti"], correcta: 0, explicacion: "Léa misma sale; no hay «¿qué?» → être, y el participio concuerda con Léa (femenino)." },
      { id: "s2", enunciado: "Léa ___ son passeport de son sac.", opciones: ["est sortie", "a sorti"], correcta: 1, explicacion: "Saca «¿qué?» → son passeport (complemento directo) → avoir; no concuerda con el sujeto." },
      { id: "s3", enunciado: "Nous ___ au sommet de la tour.", opciones: ["sommes monté(e)s", "avons monté"], correcta: 0, explicacion: "«Au sommet» indica adónde, no «¿qué?» → être y concordancia en plural." },
      { id: "s4", enunciado: "Nous ___ les escaliers à pied.", opciones: ["sommes monté(e)s", "avons monté"], correcta: 1, explicacion: "Subimos «¿qué?» → les escaliers → avoir." },
      { id: "s5", enunciado: "Ils ___ du train à Lyon.", opciones: ["sont descendus", "ont descendu"], correcta: 0, explicacion: "Ellos bajan; «du train» indica de dónde → être." },
      { id: "s6", enunciado: "Ils ___ les valises du train.", opciones: ["sont descendus", "ont descendu"], correcta: 1, explicacion: "Bajan «¿qué?» → les valises → avoir." },
      { id: "s7", enunciado: "___ par la boulangerie avant le travail.", opciones: ["Je suis passé(e)", "J'ai passé"], correcta: 0, explicacion: "«Passer par» = pasar por un lugar → être." },
      { id: "s8", enunciado: "___ une semaine à Montréal.", opciones: ["Je suis passé(e)", "J'ai passé"], correcta: 1, explicacion: "«Une semaine» responde a «¿qué?» (el tiempo que pasé) → avoir." },
      { id: "s9", enunciado: "Elle ___ tard de la fête.", opciones: ["est rentrée", "a rentré"], correcta: 0, explicacion: "Ella vuelve a casa; no hay «¿qué?» → être y concordancia femenina." },
      { id: "s10", enunciado: "Les plantes ? Elle les ___ avant la pluie.", opciones: ["a rentré", "a rentrées"], correcta: 1, explicacion: "Con complemento directo → avoir. Como el complemento (les = les plantes) va antes del verbo, el participio concuerda con él: femenino plural." },
    ],
    fraseFinal: {
      consigna: "Escribe una frase con «sortir» y otra con «sortir + algo».",
      modelo: "Je suis sorti(e) à huit heures. J'ai sorti le chien.",
    },
  },
};

export const ficha = {
  titulo: "¿Avoir o être? Passé composé",
  regla: [
    "¿El verbo es pronominal (se lever, se promener…)? → être.",
    "¿Es uno de los verbos de movimiento o cambio de estado de la lista? → être.",
    "En los demás casos → avoir.",
  ],
  verbosEtre: [
    ["aller", "allé"], ["venir", "venu"], ["arriver", "arrivé"], ["partir", "parti"],
    ["entrer", "entré"], ["sortir", "sorti"], ["monter", "monté"], ["descendre", "descendu"],
    ["naître", "né"], ["mourir", "mort"], ["rester", "resté"], ["tomber", "tombé"],
    ["retourner", "retourné"], ["rentrer", "rentré"], ["passer", "passé"],
    ["devenir", "devenu"], ["revenir", "revenu"],
  ],
  concordancia: ["Elle est allée au marché.", "Ils sont partis tôt.", "Nous nous sommes levés à sept heures."],
  trampa: {
    texto: "Sortir, monter, descendre, passer, rentrer y retourner van con avoir cuando llevan complemento directo.",
    ejemplos: [["Je suis sorti.", "J'ai sorti la poubelle."], ["Elle est montée.", "Elle a monté les courses."]],
  },
  errores: [
    ["J'ai allé", "Je suis allé(e)"],
    ["J'ai venu", "Je suis venu(e)"],
    ["Elle s'est lavée les mains", "Elle s'est lavé les mains (el complemento directo va después: sin concordancia)"],
  ],
  ejercicios: [
    ["Je ___ (aller) à la plage.", "suis allé(e)"],
    ["Nous ___ (finir) le travail.", "avons fini"],
    ["Elle ___ (venir) avec sa sœur.", "est venue"],
    ["Ils ___ (se coucher) tard.", "se sont couchés"],
    ["Tu ___ (descendre) la poubelle ?", "as descendu"],
    ["Vous ___ (entrer) dans le musée.", "êtes entré(e)(s)"],
    ["Mes parents ___ (rentrer) hier soir.", "sont rentrés"],
    ["J'___ (oublier) mon parapluie.", "ai oublié"],
    ["Elle ___ (devenir) médecin.", "est devenue"],
    ["Nous ___ (retourner) la crêpe.", "avons retourné"],
  ],
};
