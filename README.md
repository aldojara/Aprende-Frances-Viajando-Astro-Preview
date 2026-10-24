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
3. Al unir el *pull request* a `main`, el mismo workflow comprueba, compila y publica
   `apps/web/dist` en GitHub Pages. Si la comprobación o la compilación fallan, no se publica.

El dominio, el HTTPS y la publicación por GitHub Actions están configurados en
**Settings → Pages**. El entorno `github-pages` solo acepta publicaciones desde `main`.

Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Volver atrás

- **Deshacer un cambio publicado:** revertir su commit en `main` (`git revert`) y subirlo con un
  *pull request*. Se vuelve a publicar la versión anterior.
- **Volver a la web tal como estaba antes de pasar el código a `main`:** la etiqueta
  `archivo/main-compilado-2026-08-07` guarda la web compilada que se publicaba hasta octubre de 2026.
  La etiqueta `archivo/astro-mvp-2026-08-07` guarda el código fuente de ese momento.

## Historia

Hasta octubre de 2026, `main` solo contenía la web ya compilada y el código vivía en la rama
`migration/astro-mvp`. Desde entonces el código está en `main` y la web se compila y publica sola.
La rama `migration/astro-mvp` se conserva sin cambios como referencia.
