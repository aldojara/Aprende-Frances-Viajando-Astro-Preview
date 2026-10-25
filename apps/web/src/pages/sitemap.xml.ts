import type { APIRoute } from "astro";
import { levels } from "../data/taxonomies";
import { absoluteUrl } from "../utils/seo";

type Params = Record<string, string | undefined>;
type StaticPaths = { params: Params }[];

// Las rutas salen de los propios archivos de src/pages: cada página fija aporta su ruta y cada
// página dinámica ([param]) aporta las rutas de su getStaticPaths, con las mismas reglas que usa
// para generarse. Así una lección o una página nueva entra sola en el sitemap.
// Las páginas fijas se listan sin importarlas (`?url` no carga el componente): importar páginas
// desde aquí puede cambiar el nombre de los archivos CSS de la compilación.
const pageFiles = Object.keys(import.meta.glob("./**/*.astro", { query: "?url" }));
const dynamicPageModules = import.meta.glob<{
  getStaticPaths?: () => Promise<StaticPaths> | StaticPaths;
}>([
  "./**/\\[*\\].astro",
  "./**/\\[*\\]/**/*.astro",
  "!./niveles/\\[level\\]/index.astro",
]);

// Páginas dinámicas cuyas rutas se calculan aquí con los mismos datos que su getStaticPaths, en
// lugar de importar la página (importarla renombra su hoja de estilos). Si cambia su
// getStaticPaths, actualizar también esta función.
const pagesWithRoutesFromData: Record<string, () => StaticPaths> = {
  "./niveles/[level]/index.astro": () =>
    levels.map((level) => ({ params: { level: level.slug } })),
};

// Páginas que existen como archivo pero no deben indexarse. Mantener a mano:
// - la página de error;
// - las páginas que solo redirigen (las redirecciones de astro.config.mjs no son archivos y ya
//   quedan fuera);
// - cualquier página que pase robots="noindex" a BaseLayout.
const excludedPages = new Set([
  "./404.astro",
  "./proyecto.astro",
  // Práctica «¿Avoir o être?»: la ficha imprimible y el reto no se indexan.
  "./practica/avoir-o-etre/ficha.astro",
  "./practica/avoir-o-etre/reto/index.astro",
  "./practica/avoir-o-etre/reto/verbos-que-cambian-de-auxiliar.astro",
  // Prototipo (noindex; la página principal es el Diseño D): quitar esta línea al publicar la página.
  "./practica/avoir-o-etre/index.astro",
  // Laboratorio de alternativas: se borra al elegir una opción.
  "./practica/avoir-o-etre/opcion-1/index.astro",
  "./practica/avoir-o-etre/opcion-2/index.astro",
  "./practica/avoir-o-etre/opcion-3/index.astro",
  "./practica/avoir-o-etre/opcion-3-diseno-b/index.astro",
  "./practica/avoir-o-etre/opcion-4/index.astro",
  "./laboratorio.astro",
]);

const routeFromFile = (file: string, params: Params = {}) => {
  const path = file
    .replace(/^\.\//, "")
    .replace(/\.astro$/, "")
    .replace(/(^|\/)index$/, "")
    .replace(/\[([^\]]+)\]/g, (_, name: string) => params[name] ?? "");

  return path ? `/${path}/` : "/";
};

const getStaticPathsFor = async (file: string) => {
  const fromData = pagesWithRoutesFromData[file];
  if (fromData) return fromData();

  const load = dynamicPageModules[file];
  if (!load) throw new Error(`sitemap.xml: no se pudo cargar la página dinámica ${file}`);
  const { getStaticPaths } = await load();
  return (await getStaticPaths?.()) ?? [];
};

const getRoutes = async () => {
  const routes = new Set<string>();

  for (const file of pageFiles) {
    if (excludedPages.has(file)) continue;

    if (!file.includes("[")) {
      routes.add(routeFromFile(file));
      continue;
    }

    for (const { params } of await getStaticPathsFor(file)) {
      routes.add(routeFromFile(file, params));
    }
  }

  return [...routes].sort();
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site, url }) => {
  const baseUrl = site ?? url;
  const routes = await getRoutes();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(absoluteUrl(route, baseUrl))}</loc>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
