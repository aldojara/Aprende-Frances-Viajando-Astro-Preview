// Envío de los formularios al script de Google (Apps Script). Ver integraciones/apps-script/README.md.
// Sin PUBLIC_FORMULARIOS_URL en la compilación, las páginas siguen con el formulario simulado.

export const URL_FORMULARIOS: string = import.meta.env.PUBLIC_FORMULARIOS_URL ?? "";

export type Solicitud = {
  tipo: "reto" | "ficha";
  correo: string;
  origen: "resumen" | "error" | "final" | "ventana_pdf";
  orden?: string;
  variante: string;
  objetivo?: string;
  avisos?: boolean;
  clave: string;
};

export type Respuesta = {
  ok: boolean;
  envio?: "enviado" | "pendiente" | "fallido";
  limitada?: boolean;
  repetida?: boolean;
  motivo?: string;
};

// Clave única por solicitud: si se reintenta con la misma, el script no la duplica.
// getRandomValues funciona también fuera de https (vista previa en la wifi), a diferencia de randomUUID.
export const nuevaClave = () =>
  Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");

// text/plain evita la petición previa de CORS, que Apps Script no admite.
// Lanza un error si no hay respuesta válida: la página lo trata como fallo del guardado.
export const enviarSolicitud = async (solicitud: Solicitud): Promise<Respuesta> => {
  const limite = new AbortController();
  const temporizador = setTimeout(() => limite.abort(), 20000);
  try {
    const respuesta = await fetch(URL_FORMULARIOS, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(solicitud),
      redirect: "follow",
      signal: limite.signal,
    });
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    return (await respuesta.json()) as Respuesta;
  } finally {
    clearTimeout(temporizador);
  }
};
