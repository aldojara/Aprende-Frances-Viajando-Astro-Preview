// Revisa la web compilada (dist/) antes de publicarla. Lo ejecuta GitHub en cada pull request, después de compilar.
// Uso: npm run verificar (requiere haber compilado antes con npm run build).
//
// Errores (detienen la publicación): señales concretas de contenido interno o provisional en el texto visible.
// Avisos (no la detienen): palabras como «Demostración» o «Borrador», que hoy aparecen a propósito en algunas páginas.
//
// No se revisan las frases tachadas a propósito en los errores típicos (clase u-frase-mal): son ejemplos pedagógicos.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

const ERRORES = [
  { nombre: "Etiqueta interna de tipo de práctica", patron: /\bTipo T\d\b/ },
  { nombre: "Nota de trabajo pendiente", patron: /\b(TODO|FIXME|XXX|TBD)\b/ },
  { nombre: "Texto de relleno", patron: /lorem ipsum/i },
  { nombre: "Dato vacío de la plantilla", patron: /\bundefined\b|\[object Object\]|\bNaN\b/ },
  { nombre: "Término interno del código", patron: /\b(semilla|schemas?)\b/i },
  { nombre: "Marca de texto por completar", patron: /\[(PENDIENTE|TEXTO|COMPLETAR)[^\]]*\]/i },
];

const AVISOS = [{ nombre: "Contenido marcado como demostración o borrador", patron: /\b(demostraci[oó]n|borrador|prototipo)\b/i }];

function archivosHtml(dir) {
  return readdirSync(dir).flatMap((nombre) => {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) return archivosHtml(ruta);
    return nombre.endsWith(".html") ? [ruta] : [];
  });
}

function textoVisible(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<([a-z]+)\b[^>]*class="[^"]*\bu-frase-mal\b[^"]*"[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/\s(?:alt|title|aria-label)="([^"]*)"/gi, " >$1< ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

function buscar(lista, texto, archivo, salida) {
  for (const { nombre, patron } of lista) {
    const encontrado = texto.match(patron);
    if (encontrado) {
      const i = encontrado.index ?? 0;
      salida.push(`${archivo}: ${nombre} → «…${texto.slice(Math.max(0, i - 40), i + 40).trim()}…»`);
    }
  }
}

if (!existsSync(DIST)) {
  console.error("No existe dist/: compila primero con npm run build.");
  process.exit(1);
}

const errores = [];
const avisos = [];

// Las páginas de prueba nunca se publican (regla D2): viven solo en la rama de diseño.
for (const carpeta of ["prototipo", "pruebas", "test"]) {
  if (existsSync(join(DIST, carpeta))) errores.push(`${carpeta}/: carpeta de páginas de prueba dentro de la web publicada`);
}

const archivos = archivosHtml(DIST);
for (const ruta of archivos) {
  const archivo = relative(DIST, ruta);
  const texto = textoVisible(readFileSync(ruta, "utf8"));
  buscar(ERRORES, texto, archivo, errores);
  buscar(AVISOS, texto, archivo, avisos);
}

console.log(`Revisadas ${archivos.length} páginas.`);
if (avisos.length > 0) {
  console.log(`\nAvisos (no detienen la publicación): ${avisos.length}`);
  for (const aviso of avisos) console.log(`  - ${aviso}`);
}
if (errores.length > 0) {
  console.error(`\nErrores: ${errores.length}. Corrígelos antes de publicar.`);
  for (const error of errores) console.error(`  - ${error}`);
  process.exit(1);
}
console.log("\nSin errores.");
