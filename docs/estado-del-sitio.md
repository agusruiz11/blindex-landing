# Estado del sitio al 07/09/2026

Qué hay construido hoy y qué falta. Las definiciones del cliente están en
[reunion-inicial.md](./reunion-inicial.md); si algo se contradice, gana ese
archivo. El feedback más reciente es el mail de Manuel (QUAR) del 04/09/2026:
"lo veo todo OK", con un solo cambio de orden en la home.

Recordatorio de encuadre: Blindex es un **refresh visual**. El contenido del
sitio actual se mantiene; lo que rehacemos es el diseño.

## Estructura actual

### Home (`/`)

Orden real de las secciones en [page.tsx](../src/app/page.tsx):

| # | Sección | Componente | Estado |
|---|---|---|---|
| 1 | Hero | `home/Hero.tsx` | foto de obra; el video nuevo lo produce el cliente, sin novedades desde el 03/08 |
| 2 | Por qué Blindex | `home/PorQueBlindex.tsx` | ok |
| 3 | Productos (5 líneas) | `home/Productos.tsx` | ok |
| 4 | Exigí Blindex original | `home/Autenticidad.tsx` | ok. Subida arriba de Obras el 07/09 a pedido del cliente |
| 5 | Red de distribuidores exclusivos | `home/RedDistribuidores.tsx` | 32 nombres, 24 con web. Faltan logos |
| 6 | Nuestras obras | `home/Obras.tsx` | ok, 25 obras |
| 7 | Elegí tu vidrio | `home/EligeTuVidrio.tsx` | link provisorio al WordPress (ver abajo) |
| 8 | Boletines | `home/Boletines.tsx` | ok |
| 9 | CTA a puntos de venta | `home/CtaPuntos.tsx` | ok |

**Red de distribuidores exclusivos.** Los 32 nombres están cargados en
[distribuidoresExclusivos.ts](../src/data/distribuidoresExclusivos.ts). El
07/09 se cargaron las webs de la planilla "Blindex webs.xlsx" (mail del 04/09),
verificadas una por una. Faltan cinco (Baleno, Infissi, JMG, RM Obras Civiles,
STA) y tres más cuyo dominio está caído: Aberturas Sur (`cristalesdelsur.com`),
Cristales Monetti (`cristalesmonettisrl.com`) y Raffo y Barandalla
(`rb-dvh.com.ar`); esos quedaron sin link hasta que el cliente confirme otra
dirección o su Instagram. Los que sólo tienen Instagram linkean al perfil. Coppari se muestra como "Vidrios
Bravi", que es su nombre comercial. Los logos siguen pendientes; sin logo, la
ficha muestra el nombre como wordmark. No confundir con los 116 puntos de
venta: son dos redes distintas.

### Contacto (`/contacto`)

**Formulario cableado con Resend (07/09).** Envía a `/api/contacto`
([route.ts](../src/app/api/contacto/route.ts)) y de ahí por mail a la casilla
que definió el cliente, `estefania.cruz@ar.nsg.com`. Tiene honeypot anti-spam,
estados de envío y error visibles, y `reply-to` con el mail de quien escribe.
Los tres motivos (consulta, asistencia técnica, presupuesto) van a la misma
casilla con el motivo en el asunto.

Para que funcione hace falta configurar tres variables de entorno (en `.env`
local y en Vercel): `RESEND_API_KEY`, `CONTACT_TO` y `CONTACT_FROM`. Plantilla en
[.env.example](../.env.example), lógica compartida en
[src/lib/mail.ts](../src/lib/mail.ts). El remitente `web@posicionarte.online`
requiere tener verificado `posicionarte.online` en Resend; cuando se mueva el
dominio se puede pasar a una casilla de `blindex.com.ar`.

Sin `RESEND_API_KEY` el formulario muestra un error en pantalla en lugar de
fingir que envió.

### Puntos de venta (`/puntos-de-venta`)

Funcionalmente terminada: mapa Leaflet, listado, toggle lista/mapa en mobile,
link directo a WhatsApp por sucursal. Los 116 puntos actuales salen del sitio
viejo y tienen teléfonos fijos. **Falta el Excel verificado con WhatsApp por
sucursal**, que el cliente dijo que tendría la semana del 07/09.

### Capacitaciones Blindex (`/capacitaciones-blindex`)

**Ruta oculta**: no se linkea desde el menú ni el pie, y no se indexa.

Tiene módulos en video + formulario de inscripción. **El formulario ya envía
(07/09)**: va a `/api/inscripcion`
([route.ts](../src/app/api/inscripcion/route.ts)) y de ahí por mail a la misma
casilla, con los datos del inscripto y las respuestas del cuestionario. La
marca revisa y emite el certificado a mano, como se acordó. Misma configuración
de entorno que contacto.

El contenido sigue siendo placeholder: dos módulos inventados con un video
dummy y cuatro preguntas de ejemplo. Cuando Ine y Estefanía definan los
módulos, temas y cuestionarios reales, cambian
[capacitaciones.ts](../src/data/capacitaciones.ts) y las `preguntas` del
formulario; el envío no se toca.

Falta del cliente: autorización de CAVIPLAN para usar sus videos · cuántos
módulos y sobre qué · las preguntas de cada cuestionario · nombre del
certificado. Recordar que capacitaciones no estaba en la cotización original;
Manuel aceptó que se cotice aparte si hace falta.

### Elegí tu vidrio

Es una app estática aparte (Bootstrap + jQuery) que vive en el WordPress
actual. **Desde el 07/09 el botón de la home apunta provisoriamente a
`https://www.blindex.com.ar/elegituvidrio/`** en pestaña nueva, para que la
preview no dé 404. Ese link se rompe el día del cambio de DNS, así que la
migración es **bloqueante antes de mover el dominio**.

Plan (detalle en [elegi-tu-vidrio.md](./elegi-tu-vidrio.md) y en la nota de
[next.config.mjs](../next.config.mjs)):

1. Recomprimir los 9 videos con
   [scripts/elegituvidrio-videos.sh](../scripts/elegituvidrio-videos.sh). Seis
   pesan entre 80 y 114 MB (575 MB en total); a 720p quedan en 5 a 10 MB.
2. Copiar el mirror a `public/elegituvidrio/`.
3. Agregar `<base href="/elegituvidrio/">` en cada HTML: la app usa rutas
   relativas y Next redirige `/elegituvidrio/` a `/elegituvidrio` sin barra,
   con lo que `css/` y `js/` dejarían de resolver.
4. Sumar el rewrite `/elegituvidrio` → `/elegituvidrio/index.html`.
5. Volver el botón a `href="/elegituvidrio/"`.

Copiada tal cual, la herramienta se va a ver como el sitio viejo. Restilarla es
un ítem aparte, fuera del refresh.

### Redes sociales

Cargadas el 07/09 en [socials.ts](../src/data/socials.ts): Instagram
(`@blindex_intl`), Facebook (`Blindex.intl`) y YouTube (canal oficial), las
mismas que linkea el sitio actual. Blindex no tiene LinkedIn propio, así que el
ícono se sacó; la empresa madre (Vidriería Argentina S.A.) sí tiene página y se
puede sumar si el cliente lo pide.

## Pendiente del lado nuestro

- Migración de "Elegí tu vidrio" (bloqueante antes del DNS, ver arriba).
- Configurar las variables de entorno de Resend en Vercel y probar los dos
  formularios de punta a punta.
- `metadataBase` en `layout.tsx` apunta a `blindex.com.ar` (correcto para
  producción; hoy el Open Graph de la preview sale con ese dominio).
- `lib/tracking.ts` es un `console.log`: falta GA4 o el pixel que se defina.
  El sitio actual usa Universal Analytics, que dejó de medir en 2023.
- Importar el Excel de puntos de venta cuando llegue (geocodificar direcciones
  nuevas, marcar Select, WhatsApp por punto).
- Antes del cambio de dominio: confirmar quién es dueño del proyecto Vercel
  para agregar el dominio.

## Pendiente del cliente

- Excel de puntos de venta verificados con WhatsApp por sucursal.
- Logos de los 32 distribuidores (pedidos el 10/08).
- Webs que faltan: Baleno, Infissi, JMG, RM Obras Civiles, STA. Y una
  alternativa para los tres dominios caídos: Aberturas Sur, Cristales Monetti
  y Raffo y Barandalla.
- Contenido de capacitaciones (módulos, temas, cuestionarios, certificado) y
  autorización de CAVIPLAN.
- Video de portada nuevo (concepto "vidrio crudo vs. laminado").
