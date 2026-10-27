// Revisa la web compilada (dist/) antes de publicarla. Lo ejecuta GitHub en cada pull request, después de compilar.
// Uso: npm run verificar (requiere haber compilado antes con npm run build). Pruebas: npm run test:verificar.
//
// Errores (detienen la publicación): marcas reservadas del proyecto y señales concretas de fallos de la plantilla.
// No se buscan palabras sueltas del idioma («todo», «semilla»…): bloquearían contenido válido.
// Convenciones reservadas (documentadas en CLAUDE.md): las notas internas se escriben entre dobles corchetes
// ([[PENDIENTE: …]]) o como TODO: / FIXME:, y los nombres de los campos de datos (coverageStatus, paginaUnidad…)
// no se usan como texto de la página. Si algún día un contenido válido las necesitara, se ajusta este archivo.
//
// Avisos (no la detienen): palabras como «Demostración» o «Borrador», que hoy aparecen a propósito en algunas páginas.
// No se revisan las frases tachadas a propósito en los errores típicos (clase u-frase-mal): son ejemplos pedagógicos.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

// Nombres de campos de los datos (src/content.config.ts y src/data/unidades/tipos.ts) que nunca son texto visible.
const CAMPOS_INTERNOS = [
  "coverageStatus",
  "publicationStatus",
  "paginaUnidad",
  "tipoPractica",
  "tiposPractica",
  "gruposErrores",
  "moduleId",
  "moduleOrder",
  "lessonOrder",
  "grammarTopics",
  "communicationGoals",
  "relatedContent",
  "notasTitulo",
  "etiquetaFr",
];

export const ERRORES = [
  { nombre: "Nota interna entre dobles corchetes", patron: /\[\[[^\]]*\]\]/ },
  { nombre: "Nota de trabajo (TODO: o FIXME:)", patron: /\b(?:TODO|FIXME):/ },
  { nombre: "Etiqueta interna de tipo de práctica", patron: /\bTipo T\d\b/ },
  { nombre: "Nombre interno de un campo de datos", patron: new RegExp(`\\b(?:${CAMPOS_INTERNOS.join("|")})\\b`) },
  { nombre: "Texto de relleno", patron: /lorem ipsum/i },
  { nombre: "Dato vacío de la plantilla", patron: /\bundefined\b|\[object Object\]/ },
];

export const AVISOS = [{ nombre: "Contenido marcado como demostración o borrador", patron: /\b(demostraci[oó]n|borrador|prototipo)\b/i }];

export function textoVisible(html) {
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

function buscar(lista, texto) {
  return lista.flatMap(({ nombre, patron }) => {
    const encontrado = texto.match(patron);
    if (!encontrado) return [];
    const i = encontrado.index ?? 0;
    return [`${nombre} → «…${texto.slice(Math.max(0, i - 40), i + 40).trim()}…»`];
  });
}

// Revisa el HTML de una página: devuelve sus errores y avisos.
export function revisarHtml(html) {
  const texto = textoVisible(html);
  return { errores: buscar(ERRORES, texto), avisos: buscar(AVISOS, texto) };
}

function archivosHtml(dir) {
  return readdirSync(dir).flatMap((nombre) => {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) return archivosHtml(ruta);
    return nombre.endsWith(".html") ? [ruta] : [];
  });
}

function main() {
  const dist = fileURLToPath(new URL("../dist/", import.meta.url));
  if (!existsSync(dist)) {
    console.error("No existe dist/: compila primero con npm run build.");
    process.exit(1);
  }

  const errores = [];
  const avisos = [];

  // Las páginas de prueba nunca se publican (regla D2): viven solo en la rama de diseño.
  for (const carpeta of ["prototipo", "pruebas", "test"]) {
    if (existsSync(join(dist, carpeta))) errores.push(`${carpeta}/: carpeta de páginas de prueba dentro de la web publicada`);
  }

  const archivos = archivosHtml(dist);
  for (const ruta of archivos) {
    const archivo = relative(dist, ruta);
    const resultado = revisarHtml(readFileSync(ruta, "utf8"));
    errores.push(...resultado.errores.map((e) => `${archivo}: ${e}`));
    avisos.push(...resultado.avisos.map((a) => `${archivo}: ${a}`));
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
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
