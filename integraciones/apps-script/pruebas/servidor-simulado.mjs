// Servidor local que responde como el script publicado, para probar la página sin cuenta de Google.
//   node integraciones/apps-script/pruebas/servidor-simulado.mjs [puerto]
// En apps/web/.env: PUBLIC_FORMULARIOS_URL=http://localhost:<puerto>/exec
// Direcciones permitidas: prueba@ejemplo.com, falla-envio@ejemplo.com (el envío falla siempre)
// y falla-guardado@ejemplo.com (el servidor responde con error, como si no se pudiera guardar).
// No envía correos: los muestra en la consola y en GET /enviados.
import { createServer } from "node:http";
import { crearEntorno } from "./entorno-simulado.mjs";

const puerto = Number(process.argv[2] ?? 4420);
const entorno = crearEntorno({
  CORREOS_PERMITIDOS: "prueba@ejemplo.com, falla-envio@ejemplo.com, falla-guardado@ejemplo.com",
  SITIO_URL: "http://localhost:4321",
  REMITENTE_NOMBRE: "Prueba local",
});
entorno.gs.configurarHoja();
entorno.control.fallarEnvio = (mensaje) => mensaje.to === "falla-envio@ejemplo.com";

const cabeceras = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json; charset=utf-8" };

createServer((req, res) => {
  const ruta = new URL(req.url, "http://x").pathname;
  if (req.method === "GET" && ruta === "/enviados") {
    res.writeHead(200, cabeceras);
    return res.end(JSON.stringify({ enviados: entorno.enviados, filas: entorno.filas() }));
  }
  if (req.method === "POST" && ruta === "/exec") {
    let cuerpo = "";
    req.on("data", (trozo) => (cuerpo += trozo));
    req.on("end", () => {
      if (cuerpo.includes("falla-guardado@ejemplo.com")) {
        res.writeHead(500, cabeceras);
        return res.end("{}");
      }
      const respuesta = JSON.parse(entorno.gs.doPost({ postData: { contents: cuerpo } }).texto);
      console.log("POST", cuerpo, "→", JSON.stringify(respuesta));
      res.writeHead(200, cabeceras);
      res.end(JSON.stringify(respuesta));
    });
    return;
  }
  res.writeHead(404, cabeceras);
  res.end("{}");
}).listen(puerto, () => console.log(`Script simulado en http://localhost:${puerto}/exec`));
