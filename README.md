# Aprende Francés Viajando

Código fuente de [aprendefrancesviajando.com](https://aprendefrancesviajando.com), hecho con
[Astro](https://docs.astro.build) y publicado en GitHub Pages.

## Estructura

| Carpeta | Qué contiene | ¿Se publica? |
|---|---|---|
| `apps/web/` | La web en Astro: páginas, componentes, contenido en Markdown | Sí |
| `legacy/` | La web antigua en HTML (cursos A2/B1, infografías). Se guarda por si sirve para productos | No |
| `.github/workflows/` | El workflow que comprueba y publica la web | — |

## Trabajar en local

Requiere Node 22.12 o superior (la publicación usa Node 24).

```bash
cd apps/web
npm ci            # instalar dependencias (solo la primera vez o si cambia package-lock.json)
npm run dev       # web en local con recarga automática: http://localhost:4321
npm run check     # comprobar tipos y componentes
npm run build     # compilar la web en apps/web/dist
npm run preview   # ver la web compilada
```

## Cómo se publica

1. Cada cambio se hace en una rama y se abre un *pull request*.
2. GitHub Actions ejecuta `astro check` y `astro build` sobre el *pull request*. No publica nada.
3. Al unir el *pull request* a `main` (siempre con **Create a merge commit**, nunca *squash* ni
   *rebase*), el mismo workflow comprueba, compila y publica `apps/web/dist` en GitHub Pages.
   Si la comprobación o la compilación fallan, no se publica.

El dominio, el HTTPS y la publicación por GitHub Actions están configurados en
**Settings → Pages**. El entorno `github-pages` solo acepta publicaciones desde `main`.

Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### Qué comprueba y qué no

`astro check` y `astro build` detectan errores de tipos, de componentes, de contenido (esquemas de
las colecciones) y de compilación. **No garantizan** que funcionen los enlaces, que el diseño se vea
bien ni que los formularios entreguen los datos. Después de cada publicación hay que revisar la web
en vivo: las páginas tocadas, la portada y, cuando existan, los formularios.

## Práctica «¿Avoir o être?» (prototipo)

- Página: `/practica/avoir-o-etre/` · reto: `/practica/avoir-o-etre/reto/` (noindex, fuera del sitemap).
- Formularios reales de la opción 3 · Diseño D (modo de prueba, Google Sheets + Apps Script): ver
  [integraciones/apps-script/README.md](integraciones/apps-script/README.md). Solo se activan con
  `PUBLIC_FORMULARIOS_URL`: en local, en `apps/web/.env`; en lo publicado, la variable del repositorio
  `PUBLIC_FORMULARIOS_URL` (GitHub → Settings → Secrets and variables → Actions → Variables), que usa la compilación.
  Si se borra la variable, lo publicado vuelve al formulario simulado. La página principal `/practica/avoir-o-etre/` es
  la opción 3 · Diseño D. Las demás opciones del laboratorio se retiraron; están en la etiqueta git
  `laboratorio/archivo`.
- Contenido (ejercicios, diagnóstico, sesiones, ficha): `apps/web/src/data/practicaAvoirEtre.ts`.
  Mientras `PROTOTIPO = true`, la página es `noindex`, muestra un aviso y el formulario es simulado
  (no envía ni guarda nada). Reglas del diagnóstico: `apps/web/src/utils/diagnostico.ts`.
- Eventos de medición: `apps/web/src/utils/track.ts` (sin servicio conectado).
- **Regenerar el PDF de la ficha** tras cambiar su contenido (con `npm run build` y `npm run preview`
  en marcha en `apps/web`):

  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf="public/descargas/ficha-avoir-o-etre-borrador.pdf" http://localhost:4321/practica/avoir-o-etre/ficha/
  ```

  Después, volver a compilar para que el PDF nuevo entre en `dist`.

## Sitemap

`/sitemap.xml` lo genera [`apps/web/src/pages/sitemap.xml.ts`](apps/web/src/pages/sitemap.xml.ts) en
cada compilación, a partir de los archivos de `apps/web/src/pages`.

**Se incorpora solo:**

- una página fija nueva en `src/pages` (por ejemplo `src/pages/precios.astro` → `/precios/`);
- una lección de gramática o una página DELF nueva en `src/content/content`, si cumple las reglas de
  publicación de su página (`gramatica/[slug].astro`, `delf/[level]/[slug].astro`);
- una página dinámica nueva (`[param]`): se usan las rutas de su `getStaticPaths`.

**Necesita mantenimiento manual** (en `sitemap.xml.ts`):

- `excludedPages`: añadir la página si es de error, si solo redirige o si pasa `robots="noindex"`.
  Las redirecciones de `astro.config.mjs` no son archivos y ya quedan fuera;
- `pagesWithRoutesFromData`: los niveles se calculan con los mismos datos que su `getStaticPaths`
  (`levels`, en `src/data/taxonomies.ts`). Si cambia el `getStaticPaths` de
  `niveles/[level]/index.astro`, hay que cambiar también esa función. Se hace así porque importar esa
  página desde el sitemap cambia el nombre de su hoja de estilos en la compilación.

**Comprobar el sitemap** tras `npm run build` (en `apps/web`): compara sus direcciones con las páginas
de `dist` que son indexables (sin `noindex`, sin redirección y con URL canónica propia).

```bash
node -e '
const fs=require("fs"),path=require("path"),D="dist",S="https://aprendefrancesviajando.com";
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name.startsWith("._")?[]:e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const ind=walk(D).filter(f=>f.endsWith("index.html")).flatMap(f=>{const s=fs.readFileSync(f,"utf8"),own=S+"/"+path.relative(D,f).replace(/index\.html$/,""),c=(s.match(/rel="canonical" href="([^"]*)"/)||[])[1];return /noindex/.test(s)||/http-equiv="refresh"/.test(s)||c!==own?[]:[c]});
const sm=[...fs.readFileSync(D+"/sitemap.xml","utf8").matchAll(/<loc>([^<]*)<\/loc>/g)].map(m=>m[1]);
console.log({indexables:ind.length,sitemap:sm.length,faltan:ind.filter(u=>!sm.includes(u)),sobran:sm.filter(u=>!ind.includes(u)),duplicadas:sm.filter((u,i)=>sm.indexOf(u)!==i)});'
```

`faltan`, `sobran` y `duplicadas` deben salir vacías.

## Volver atrás

### Deshacer un cambio publicado

Revertir su commit en una rama (`git revert <commit>`), abrir un *pull request* y unirlo a `main`.
Se vuelve a publicar la versión anterior.

### Deshacer la migración del código a `main` (PR #1)

Usar solo si la primera publicación desde el código fuente deja la web mal.

- **Si el workflow falla**, no se publica nada y sigue en línea la última publicación correcta.
  No hay que hacer nada más que corregir el error.
- **Si publica pero la web sale mal**, revertir la unión del PR #1. Eso devuelve a `main` la web
  compilada y el workflow anterior, que la vuelve a publicar tal como estaba:

1. Identificar el commit de unión del PR #1:

   ```bash
   git fetch origin --tags
   gh pr view 1 --json mergeCommit --jq .mergeCommit.oid
   ```

   Debe coincidir con el commit «Merge pull request #1 from aldojara/chore/codigo-en-main» que
   muestra `git log --merges --first-parent origin/main --oneline`.

2. Comprobar que su **primer padre** es el `main` anterior a la migración (`13cd31a`):

   ```bash
   git rev-parse <commit-de-union>^1
   git rev-parse 'archivo/main-compilado-2026-08-07^{commit}'
   ```

   Las dos órdenes deben dar el mismo identificador. Si no coinciden, **no seguir**: algo se unió a
   `main` antes o después y hay que revisar la historia.

3. Revertir en una rama y comprobar que el resultado es exactamente el `main` anterior:

   ```bash
   git switch -c revert/migracion origin/main
   git revert -m 1 <commit-de-union>
   git diff --stat archivo/main-compilado-2026-08-07 HEAD
   ```

   El `git diff` no debe mostrar nada. Si la migración ya tiene commits posteriores en `main`, hay que
   revertirlos también (del más reciente al más antiguo) antes de este paso.

4. Subir la rama, abrir un *pull request* y unirlo a `main` (publica en el dominio: requiere OK).
   El workflow restaurado se llama «Deploy static preview to GitHub Pages».

5. Comprobar la restauración:
   - En **Actions**, la ejecución de «Deploy static preview to GitHub Pages» termina en verde.
   - Las páginas en vivo coinciden con la web guardada en la etiqueta:

     ```bash
     rm -rf /tmp/afv-anterior && mkdir /tmp/afv-anterior
     git archive archivo/main-compilado-2026-08-07 | tar -x -C /tmp/afv-anterior
     cd /tmp/afv-anterior && find . -name index.html | while read f; do
       ruta="${f#.}"; ruta="${ruta%index.html}"
       curl -s "https://aprendefrancesviajando.com$ruta" | cmp -s - "$f" || echo "DISTINTA: $ruta"
     done
     ```

     No debe aparecer ninguna línea «DISTINTA». La caché de GitHub Pages puede tardar unos minutos.

### Copias de seguridad

- Etiqueta `archivo/main-compilado-2026-08-07`: la web compilada que se publicaba hasta octubre de 2026.
- Etiqueta `archivo/astro-mvp-2026-08-07`: el código fuente de ese momento.
- Fuera del repositorio hay un espejo completo y un *bundle* del 24 de octubre de 2026, con
  instrucciones de restauración.

## Próximos cambios

En este orden, cada uno en su propio *pull request*:

1. **Práctica gratuita con captura de correo y medición de conversiones.**

Antes de cada publicación conviene ejecutar `npm audit` en `apps/web`: la actualización de
dependencias de octubre de 2026 (Astro 7.1.0 → 7.4.2) dejó 0 vulnerabilidades conocidas.

## Historia

Hasta octubre de 2026, `main` solo contenía la web ya compilada y el código vivía en la rama
`migration/astro-mvp`. Desde entonces el código está en `main` y la web se compila y publica sola.
La rama `migration/astro-mvp` se conserva sin cambios como referencia.
