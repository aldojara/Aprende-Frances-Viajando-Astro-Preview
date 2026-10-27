// Estructura de una unidad (lección + práctica). La plantilla de unidad recibe estos datos;
// cada tema nuevo es solo un archivo de datos más. Los bloques opcionales no se muestran si faltan.

export interface Tabla {
  cabeceras: string[];
  filas: string[][];
}

export interface NodoMapaMental {
  titulo: string;
  nota?: string;
  hijos?: NodoMapaMental[];
}

export interface TarjetaDidactica {
  frente: string;
  reverso: string;
  pista?: string;
}

export interface RecursoDescarga {
  titulo: string;
  url: string;
  tipo: "pdf" | "presentacion" | "audio" | "otro";
  peso?: string;
}

export interface GrupoErrores {
  id: string;
  titulo: string;
  descripcion?: string;
  tiposPractica?: string[];
}

export interface Unidad {
  slug: string;
  titulo: string;
  nivel: string[];
  minutos: number;
  objetivo: string;
  // etiquetaFr: rótulo de la columna en francés de la comparación (por ejemplo, «Francés (imparfait)»).
  ideaClave: { titulo: string; texto: string; tabla?: { es: string; fr: string }[]; nota?: string; etiquetaFr?: string };

  // Materiales audiovisuales y de apoyo (Ronda 3)
  videoTeoria?: {
    url: string;
    titulo: string;
    duracion?: string;
    miniatura?: string;
  };
  audioResumen?: {
    url: string;
    titulo: string;
    duracion?: string;
  };

  usos: { titulo: string; ejemplo: string; nota?: string }[];
  usosNota?: string;
  formacion: {
    regla: string;
    // Piezas de la fórmula, en orden (se muestran unidas con «+»). Sin ellas se muestra la regla en texto.
    formula?: string[];
    tablaTitulo?: string;
    pasosTitulo?: string;
    tabla?: Tabla;
    pasos?: { pregunta: string; respuesta: string; detalle?: string }[];
    notas?: string[];
  };
  consulta?: { titulo: string; tabla?: Tabla; puntos?: string[] }[];

  // Material visual complementario (Ronda 3)
  infografia?: {
    url: string;
    titulo: string;
    miniatura?: string;
    descripcion?: string;
  };
  mapaMental?: NodoMapaMental;

  practica?: { titulo: string; texto: string; url: string };
  // Grupos de errores propios de cada tema (por ejemplo, las piezas de la fórmula del tiempo verbal).
  // Si existen, el índice y el contenido muestran los errores bajo el título de su grupo.
  gruposErrores?: GrupoErrores[];
  errores: { mal: string; bien: string; porque: string; tipoPractica?: string; grupo?: string; corto?: string }[];

  // Tarjetas didácticas de repaso (Ronda 3)
  tarjetasDidacticas?: TarjetaDidactica[];

  ejemplos: { titulo?: string; intro?: string; items: { fr: string; es: string; nota?: string }[] };
  aplicacion?: { consigna: string; requisitos?: string[]; modelo: string };
  captacion?: { titulo: string; texto: string; boton: string; url: string };
  resumen: string[];
  relacionados: { titulo: string; url: string; estado: "disponible" | "proximamente" }[];

  // Descargas de apoyo (Ronda 3)
  descargas?: RecursoDescarga[];
}
