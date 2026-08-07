export const creatorProfile = {
  name: "Aldo Jara Pisconti",
  slug: "aldo-jara-pisconti",
  canonicalUrl: "https://aldojarapisconti.com/",
  personId: "https://aldojarapisconti.com/#person",
  projectProfileUrl:
    "https://aprendefrancesviajando.com/sobre-nosotros/aldo-jara-pisconti/",
  role: "Ingeniero de Sistemas",
  professionalDescriptor:
    "Ingeniero de Sistemas · Analítica · Inteligencia artificial aplicada a la educación",
  shortBio:
    "Combino tecnología, datos, experiencia de aprendizaje y mi interés por el francés, los viajes y la educación para construir una plataforma útil, clara y progresiva que acompañe a estudiantes reales en su recorrido de A1 a C1.",
  image: "/images/project/aldo-jara-pisconti-creador-aprende-frances-viajando.svg",
  imageAlt:
    "Aldo Jara Pisconti, creador de Aprende Francés Viajando",
  linkedinUrl: "https://www.linkedin.com/in/aldojarapisconti/",
  youtubeUrl: "https://www.youtube.com/@aldopisconti",
  bigTalentProfileUrl: "https://bigtalentanalytica.com/sobre-mi",
  aldoAlVolanteProfileUrl: "https://aldoalvolante.com/sobre-aldo/",
  githubUrl: "",
  contactUrl: "",
  knowsAbout: [
    "Ingeniería de sistemas",
    "Analítica de datos",
    "Bases de datos",
    "Inteligencia artificial",
    "Tecnología educativa",
    "Aprendizaje del francés",
    "Preparación DELF",
  ],
  expertise: [
    "Ingeniería de sistemas",
    "Analítica de datos",
    "Bases de datos",
    "Automatización",
    "Inteligencia artificial",
    "Tecnología educativa",
    "Aprendizaje del francés",
    "Preparación DELF",
    "Diseño de contenidos",
    "Experiencias digitales",
  ],
} as const;

export const creatorProfilePath = `/sobre-nosotros/${creatorProfile.slug}/`;

export const getCreatorSameAs = () => {
  const possibleUrls: readonly string[] = [
    creatorProfile.linkedinUrl,
    creatorProfile.youtubeUrl,
    creatorProfile.bigTalentProfileUrl,
    creatorProfile.projectProfileUrl,
    creatorProfile.aldoAlVolanteProfileUrl,
  ];

  return possibleUrls.filter((url) => Boolean(url));
};
