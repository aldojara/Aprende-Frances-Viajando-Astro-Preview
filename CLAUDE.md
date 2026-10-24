# CLAUDE.md — Aprende Francés Viajando

Reglas para cualquier agente (Claude, Codex u otro) que trabaje en este repositorio.
Cómo trabajar en local y cómo se publica: ver [README.md](README.md).

## El proyecto

- Web: aprendefrancesviajando.com. El código está en `apps/web` (Astro 7, CSS propio, contenido en
  Markdown con colecciones validadas en `apps/web/src/content.config.ts`).
- Cada push a `main` **publica en producción**. Ver `.github/workflows/deploy-pages.yml`.
- `legacy/` es la web antigua en HTML: no se publica y no se desarrolla sobre ella.
- La documentación del proyecto (contexto, estrategia, planes) **no vive en este repositorio**, porque
  es público. Está en la carpeta local
  `/Volumes/HDD_MAC_WIN/Data/Proyectos/Agentic_AI/Claude/Proyectos_Web/Aprende_Frances_Viajando_Monet/Documentos_Proyecto`.
  Si no tienes acceso a esa carpeta, pide el contexto al usuario.

## Decisiones tomadas (no se vuelven a debatir salvo que el usuario lo pida)

- Seguir con Astro; no reconstruir la web en Next.js.
- No construir login propio por ahora.
- Monetizar con práctica interactiva gratis en la web + herramienta de email + plataforma de venta
  externa, todo automático.
- El despliegue y las reglas del proyecto viven en el repositorio, no en la memoria de un agente.

## Reglas de trabajo

1. **No inventar.** Marcar cada afirmación relevante como *dato* (verificado), *inferencia* o *supuesto*.
2. **Preguntar al usuario solo lo que únicamente sabe el usuario** (negocio, contenido, cuentas,
   preferencias). El usuario no es técnico: ante una duda técnica, no le pidas que elija; preséntale una
   recomendación concreta (qué y por qué) y espera su aprobación antes de ejecutarla.
3. **Hacer solo lo que se pidió.** Los documentos de contexto son información de fondo, no una lista
   de tareas. No ampliar el alcance por iniciativa propia.
4. **Avisar y esperar el OK explícito antes de:**
   - cualquier push o merge a `main` (publica en el dominio);
   - cambios de DNS o de dominio;
   - cambios en la configuración de GitHub Pages o del repositorio;
   - archivar, borrar o tocar otros repositorios.
5. **Flujo de cambios:** rama → *pull request* (GitHub comprueba y compila sin publicar) → explicar al
   usuario qué cambia → merge a `main` solo con su OK → comprobar la web publicada.
6. **Copia de seguridad antes de operaciones arriesgadas** sobre la historia o las ramas.
7. **Documentar el proceso** en este archivo o en el README cuando cambie.

## Notas técnicas

- Antes de abrir un *pull request*: `cd apps/web && npm run check && npm run build`.
- Al cambiar dependencias, el `package-lock.json` debe aceptarlo el npm de GitHub Actions, que puede ser
  más nuevo y más estricto que el del Mac (en octubre de 2026, npm 11.21 rechazó un lock que npm 11.6
  aceptaba). Antes de subirlo: `npx -y npm@11 ci --dry-run --ignore-scripts` en `apps/web`.
- Servidor de desarrollo en segundo plano: `npx astro dev --background`; gestionarlo con
  `astro dev stop`, `astro dev status` y `astro dev logs`.
- `site` y las redirecciones están en `apps/web/astro.config.mjs`. `public/_redirects` no tiene efecto en
  GitHub Pages; las redirecciones reales las genera Astro.
- La copia local está en un disco exFAT: macOS crea archivos `._*` en todas partes. Están en
  `.gitignore`; si git da errores del tipo `non-monotonic index .git/objects/pack/._pack-…`, borrarlos
  con `find .git -name '._*' -delete`. `npm ci` tarda varios minutos en ese disco.
- Documentación de Astro: https://docs.astro.build
