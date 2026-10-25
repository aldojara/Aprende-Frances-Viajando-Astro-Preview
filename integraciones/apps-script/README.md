# Formularios de la opción 3 · Diseño D (Google Sheets + Apps Script)

Conexión **en modo de prueba** de los tres formularios de `/practica/avoir-o-etre/` (opción 3 · Diseño D):
la caja del resultado y el formulario del reto (acceso al reto) y la ventana de la ficha (PDF por correo).
Las demás opciones del laboratorio se retiraron (etiqueta git `laboratorio/archivo`).

## Qué hace

- **Guarda** cada solicitud en la hoja «Solicitudes» (fecha, tipo, correo, origen, orden del reto, objetivo,
  permiso de avisos, estado del envío).
- **Envía** el correo desde la cuenta de Google que publica el script: el enlace al reto con su orden, o el enlace
  a la ficha. Pedir la ficha no registra en el reto ni da permiso para avisos.
- **Solo acepta direcciones de `CORREOS_PERMITIDOS`**: lo comprueba antes de guardar y antes de cada envío.
- **Sin duplicados**: cada solicitud lleva una clave; un doble clic o un reintento con la misma clave no crea otra
  fila ni otro correo. Pedir de nuevo el mismo acceso se permite tras `REPETICION_MINUTOS` y hasta
  `REPETICION_MAX_24H` veces en 24 h.
- **Reintentos del correo**: si el envío falla, la tarea programada (cada 15 min) lo reintenta tras las esperas de
  `REINTENTOS_ESPERA_MINUTOS`, hasta `MAX_INTENTOS`; después la fila queda «fallido». Si una ejecución se corta en
  mitad del envío, la fila pasa a «revisar» y no se reenvía sola (para no duplicar).
- **Si falla el guardado**, la página muestra igualmente el acceso al reto, avisa y ofrece «Reintentar». El correo
  no se guarda en el navegador.

Estados de la columna `estado`: `pendiente`, `enviando`, `enviado`, `fallido`, `revisar`, `no_permitido`.

## Configuración (una vez, en tu cuenta de Google)

1. En Google Drive, crea una hoja de cálculo nueva (por ejemplo «AFV · Solicitudes (prueba)»). **No la compartas.**
2. En la hoja: **Extensiones → Apps Script**. Borra el contenido de `Código.gs` y pega el de
   [`Codigo.gs`](Codigo.gs). Guarda.
3. **Configuración del proyecto** (rueda dentada) → **Propiedades del script** → añade:

   | Propiedad | Valor | Obligatoria |
   |---|---|---|
   | `CORREOS_PERMITIDOS` | tus direcciones de prueba, separadas por comas | sí |
   | `SITIO_URL` | dirección de la web que abrirán los enlaces del correo (para probar en el móvil: la de la vista previa en la wifi, `http://<IP-del-Mac>:<puerto>`) | sí |
   | `REMITENTE_NOMBRE` | nombre que verá quien recibe el correo | sí |
   | `REINTENTOS_ESPERA_MINUTOS` | `60,1500` (propuesta pendiente de aprobación) | no |
   | `MAX_INTENTOS` | `3` | no |
   | `REPETICION_MINUTOS` | `10` | no |
   | `REPETICION_MAX_24H` | `3` | no |

4. En el editor, elige la función **`configurarHoja`** y pulsa **Ejecutar**. Google pedirá permisos (ver la hoja,
   enviar correo en tu nombre, ejecutar tareas programadas). Saldrá «Google no ha verificado esta aplicación»: es tu
   propio script; **Configuración avanzada → Ir a … (no seguro)** → Permitir.
5. Ejecuta **`instalarTareaProgramada`** (una vez) y **`comprobarConfiguracion`**: en el registro debe aparecer el
   número de direcciones permitidas, el sitio y la cuota de correo restante.
6. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario** (la página debe poder enviar sin iniciar sesión; la lista de
     direcciones permitidas sigue filtrando)
   - Copia la **URL de la aplicación web** (termina en `/exec`).
7. Esa URL va en `apps/web/.env` (no se sube a git):

   ```bash
   PUBLIC_FORMULARIOS_URL=https://script.google.com/macros/s/…/exec
   ```

   y se vuelve a compilar (`npm run build`). Sin esa línea, la página sigue con el formulario simulado.
   Para lo publicado, la misma URL va en la variable del repositorio `PUBLIC_FORMULARIOS_URL` (GitHub → Settings →
   Secrets and variables → Actions → Variables) y `SITIO_URL` pasa a `https://aprendefrancesviajando.com`.

Si cambias `Codigo.gs` más adelante: **Implementar → Gestionar implementaciones → Editar → Versión: nueva** (la URL no
cambia).

## Límites y cuidados

- Cuota de correo de Apps Script: unos 100 destinatarios al día en una cuenta personal (más en Workspace). Sin cuota,
  el envío se aplaza una hora sin gastar intento.
- La hoja contiene correos: no la compartas ni la publiques. Para vaciar las pruebas, borra filas (no la cabecera).
- La URL `/exec` no es una contraseña, pero conviene no difundirla; mientras esté en modo de prueba, solo las
  direcciones permitidas se guardan y reciben correo.
- Pendiente antes de publicar (fuera de esta fase): plazos de conservación aprobados y su borrado automático,
  antispam (Turnstile), textos legales y quitar la lista de direcciones permitidas.

## Pruebas sin cuenta de Google

```bash
node integraciones/apps-script/pruebas/pruebas.mjs
```

Prueba `Codigo.gs` con servicios de Google simulados: lista de direcciones, duplicados, límite de repetición,
reintentos y su máximo, filas interrumpidas, cuota y la tarea programada.

```bash
node integraciones/apps-script/pruebas/servidor-simulado.mjs 4420
```

Responde como el script publicado en `http://localhost:4420/exec` (sin enviar correos; los muestra en
`/enviados`). Permite `prueba@ejemplo.com`, `falla-envio@ejemplo.com` (el envío falla) y
`falla-guardado@ejemplo.com` (el guardado falla).
