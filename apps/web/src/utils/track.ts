// Punto único para los eventos de medición (descarga, práctica, diagnóstico, reto).
// Prototipo: no hay ningún servicio de analítica conectado. Solo se emite un evento local
// para poder comprobarlo; al conectar Umami bastará con cambiar esta función.
export const track = (evento: string, datos: Record<string, string | number> = {}) => {
  window.dispatchEvent(new CustomEvent("afv:track", { detail: { evento, datos } }));
  if (import.meta.env.DEV) console.debug("[track]", evento, datos);
};

export const RETO_STORAGE_KEY = "afv-reto-avoir-etre";

export type ProgresoReto = {
  orden?: string;
  sesiones?: Record<string, { aciertos: number; total: number }>;
};

export const leerProgreso = (): ProgresoReto => {
  try {
    return JSON.parse(localStorage.getItem(RETO_STORAGE_KEY) ?? "{}") as ProgresoReto;
  } catch {
    return {};
  }
};

export const guardarProgreso = (progreso: ProgresoReto) => {
  try {
    localStorage.setItem(RETO_STORAGE_KEY, JSON.stringify(progreso));
  } catch {
    // Sin almacenamiento disponible (modo privado): el reto funciona igual, sin recordar el avance.
  }
};
