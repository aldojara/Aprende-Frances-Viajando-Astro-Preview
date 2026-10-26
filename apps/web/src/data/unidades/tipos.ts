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

export interface Unidad {
  slug: string;
  titulo: string;
  nivel: string[];
  minutos: number;
  objetivo: string;
  ideaClave: { titulo: string; texto: string; tabla?: { es: string; fr: string }[]; nota?: string };

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
  errores: { mal: string; bien: string; porque: string; tipoPractica?: string }[];

  // Tarjetas didácticas de repaso (Ronda 3)
  tarjetasDidacticas?: TarjetaDidactica[];

  ejemplos: { titulo?: string; intro?: string; items: { fr: string; es: string; nota?: string }[] };
  aplicacion?: { consigna: string; requisitos?: string[]; modelo: string };
  material?: {
    tipo: "video" | "audio" | "infografia" | "presentacion";
    titulo: string;
    url?: string;
    miniatura?: string;
  }[];
  captacion?: { titulo: string; texto: string; boton: string; url: string };
  resumen: string[];
  relacionados: { titulo: string; url: string; estado: "disponible" | "proximamente" }[];

  // Descargas de apoyo (Ronda 3)
  descargas?: RecursoDescarga[];
}
