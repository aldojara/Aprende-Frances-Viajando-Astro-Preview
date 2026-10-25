// Punto único para los eventos de medición (descarga, práctica, diagnóstico, reto).
// Prototipo: no hay ningún servicio de analítica conectado. Solo se emite un evento local
// para poder comprobarlo; al conectar Umami bastará con cambiar esta función.

// La página principal (opción 3 · Diseño D) guarda su progreso con su variante y etiqueta sus eventos.
// Las demás variantes del laboratorio se retiraron (etiqueta git laboratorio/archivo).
const VARIANTES = ["opcion-3-diseno-d"] as const;
export type Variante = (typeof VARIANTES)[number];

export const varianteActual = (): Variante | null => {
  const declarada =
    document.querySelector<HTMLElement>("[data-variante]")?.dataset.variante ??
    new URLSearchParams(window.location.search).get("variante");
  return VARIANTES.find((variante) => variante === declarada) ?? null;
};

// Añade ?variante=… a los enlaces internos del reto para no mezclar progresos.
export const propagarVariante = (raiz: ParentNode = document) => {
  const variante = varianteActual();
  if (!variante) return;
  raiz.querySelectorAll<HTMLAnchorElement>("a[data-con-variante]").forEach((enlace) => {
    const url = new URL(enlace.href, window.location.origin);
    url.searchParams.set("variante", variante);
    enlace.href = url.pathname + url.search;
  });
};

export const track = (evento: string, datos: Record<string, string | number> = {}) => {
  const detalle = { evento, datos: { ...datos, variante: varianteActual() ?? "opcion-1" } };
  window.dispatchEvent(new CustomEvent("afv:track", { detail: detalle }));
  if (import.meta.env.DEV) console.debug("[track]", detalle.evento, detalle.datos);
};

export const RETO_STORAGE_KEY = "afv-reto-avoir-etre";

const claveProgreso = () => {
  const variante = varianteActual();
  return variante ? `${RETO_STORAGE_KEY}-${variante}` : RETO_STORAGE_KEY;
};

export type ProgresoReto = {
  orden?: string;
  sesiones?: Record<string, { aciertos: number; total: number }>;
};

export const leerProgreso = (): ProgresoReto => {
  try {
    return JSON.parse(localStorage.getItem(claveProgreso()) ?? "{}") as ProgresoReto;
  } catch {
    return {};
  }
};

export const guardarProgreso = (progreso: ProgresoReto) => {
  try {
    localStorage.setItem(claveProgreso(), JSON.stringify(progreso));
  } catch {
    // Sin almacenamiento disponible (modo privado): el reto funciona igual, sin recordar el avance.
  }
};
