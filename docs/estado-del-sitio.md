# Estado del sitio al 23/09/2026

Qué hay construido hoy y qué falta. Las definiciones del cliente están en
[reunion-inicial.md](./reunion-inicial.md); si algo se contradice, gana ese
archivo. El feedback más reciente son los dos mails de Manuel (QUAR) del 22/09/2026
reenviando respuestas de Blindex e Inés Menescaldi: llegaron las webs que
faltaban, el Excel de puntos de venta y dos definiciones (nombres en la franja
de distribuidores, y probar una sección de puntos de venta en la home debajo
de los distribuidores). Capacitaciones sigue sin contenido ni fecha.

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
| 5 | Red de distribuidores exclusivos | `home/RedDistribuidores.tsx` | 32 nombres, los 32 con link. Queda con nombres, sin logos |
| 5b | Puntos de venta | `home/PuntosHome.tsx` | nueva el 24/09 a pedido de Blindex: provincia + 6 puntos con WhatsApp + botón a la página con la provincia filtrada |
| 6 | Nuestras obras | `home/Obras.tsx` | ok, 25 obras |
| 7 | Elegí tu vidrio | `home/EligeTuVidrio.tsx` | migrada a `public/elegituvidrio` el 23/09, botón a `/elegituvidrio/` |
| 8 | Boletines | `home/Boletines.tsx` | ok |
| 9 | CTA a puntos de venta | `home/CtaPuntos.tsx` | ok |

**Red de distribuidores exclusivos.** Los 32 nombres están cargados en
[distribuidoresExclusivos.ts](../src/data/distribuidoresExclusivos.ts) y desde
el 23/09 los 32 tienen link, todos verificados. El 07/09 entraron 24 webs de
la planilla "Blindex webs.xlsx"; el 22/09 Blindex mandó las cinco que faltaban
(Baleno, Infissi, JMG, RM Obras Civiles, STA) y aprobó linkear a Instagram a
los tres con dominio caído (Aberturas Sur, Cristales Monetti, Raffo y
Barandalla). Los que sólo tienen Instagram linkean al perfil. Coppari se
muestra como "Vidrios Bravi", que es su nombre comercial.

Logos: el 22/09 Blindex dijo que prefiere que la franja quede con los nombres
(Inés escribió "logo y el nombre"). No mandaron archivos, así que queda con
nombres; si llegan, entran sin tocar el componente. No confundir con los 116
puntos de venta: son dos redes distintas.

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
link directo a WhatsApp por sucursal.

**Excel verificado importado el 23/09.** La planilla del cliente está en
[assets-fuente/pdv-blindex-2026-09-22.xlsx](../assets-fuente/pdv-blindex-2026-09-22.xlsx)
(117 filas con WhatsApp, Instagram, web, dirección y teléfono). Resultado en
[puntosDeVenta.ts](../src/data/puntosDeVenta.ts): **110 puntos**, 106 con
WhatsApp, 94 con Instagram, 78 con web, 24 Select. El detalle completo de la
importación está en el encabezado de ese archivo. Resumen:

- Bajas: 7 puntos que el Excel marca como inexistentes o sin contacto, y 3
  que están en el sitio viejo pero no en el Excel (Centro Cristales, Milton
  Montero, Casa Segat), que quedaron comentados en el archivo hasta que el
  cliente confirme.
- Renombres: Vidrios H. Gomien, Aluminio Turdera, Lighuen (ex De La Canal).
- Nuevos: Viforma (marcado Select por su posición en la planilla, a
  confirmar), CCR Carpinterías, Mesopotamia Aberturas.
- 9 cambios de dirección re-geocodificados con OpenStreetMap. Los marcados
  "coords aprox" en el archivo cayeron a nivel calle: revisarlos en el mapa de
  la preview y corregir a mano si el pin cae lejos.
- 4 puntos vigentes sin WhatsApp (Leo Dimastro, Raffaelli, Alcons, Vidriería
  Daverio): la card muestra "Llamar".
- Nuevo campo `instagram` y botón en la card
  ([CardPunto.tsx](../src/components/puntos/CardPunto.tsx)); "Visitar web"
  ahora se muestra siempre que haya web, no sólo cuando falta WhatsApp.

**Sección de puntos de venta en la home (24/09).** Pedida por Blindex el
22/09 ("debajo de los distris, por más que esté en la barra"). Está en
[PuntosHome.tsx](../src/components/home/PuntosHome.tsx): chips de provincia
ordenadas por cantidad de puntos, los primeros 6 (4 en mobile, Select
primero) con su WhatsApp, y un botón a `/puntos-de-venta?provincia=X` que
llega con el filtro puesto (`PuntosClient` acepta `provinciaInicial`). La
CTA del final de la home (`CtaPuntos`) se dejó; si se siente repetida, se
saca.

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

**Migrada el 23/09.** La herramienta (app estática Bootstrap + jQuery) vive en
`public/elegituvidrio/` con la misma URL que tenía en el WordPress, y el botón
de la home apunta a `/elegituvidrio/`. Ya no depende del hosting viejo, así
que **dejó de ser bloqueante para el cambio de dominio**. Se hizo un crawl
completo (el mirror de agosto estaba incompleto), se recomprimieron los 17
videos a 720p (de 1,4 GB a 107 MB) y se probaron las 31 combinaciones del
selector sin 404. Tres videos del servidor original están truncados (06, 07 y
13): pedirle los originales a Blindex si los tiene. Detalle completo en
[elegi-tu-vidrio.md](./elegi-tu-vidrio.md).

Copiada tal cual, la herramienta se ve como el sitio viejo. Restilarla es un
ítem aparte, fuera del refresh.

### Redes sociales

Cargadas el 07/09 en [socials.ts](../src/data/socials.ts): Instagram
(`@blindex_intl`), Facebook (`Blindex.intl`) y YouTube (canal oficial), las
mismas que linkea el sitio actual. Blindex no tiene LinkedIn propio, así que el
ícono se sacó; la empresa madre (Vidriería Argentina S.A.) sí tiene página y se
puede sumar si el cliente lo pide.

### Redirecciones desde el WordPress

Hechas el 23/09: las 94 URLs del sitemap viejo y los 7 PDFs de `wp-content`
tienen regla 301 en `next.config.mjs`, probadas una por una. Tabla y criterios
en [redirecciones-wordpress.md](./redirecciones-wordpress.md). Hallazgo:
"Casa interactiva" no era una herramienta sino una página de texto con un video
de YouTube que ya está en Capacitación online; redirige ahí.

## Pendiente del lado nuestro

- Revisar en el mapa los puntos marcados "coords aprox" en `puntosDeVenta.ts`.
- Configurar las variables de entorno de Resend en Vercel y probar los dos
  formularios de punta a punta. **Bloqueante antes del DNS.**
- Términos y condiciones: el WordPress tiene la página y el sitio nuevo no.
  Hoy redirige a la home; decidir si se porta el texto.
- `metadataBase` en `layout.tsx` apunta a `blindex.com.ar` (correcto para
  producción; hoy el Open Graph de la preview sale con ese dominio).
- Medición instrumentada el 24/09 (GA4 + Clarity + eventos, ver
  [medicion.md](./medicion.md)). Falta cargar los IDs en Vercel y en
  `public/elegituvidrio/js/analytics.js`.
- Antes del cambio de dominio: confirmar quién es dueño del proyecto Vercel
  para agregar el dominio.

## Pendiente del cliente

- Confirmar la baja de Centro Cristales, Milton Montero y Casa Segat (están
  en el sitio viejo y no en el Excel) y que Viforma es Select.
- Quién maneja el DNS de blindex.com.ar (pedido el 07/09, sin respuesta) y si
  el hosting actual puede seguir activo unas semanas después del cambio.
- Logos de los 32 distribuidores: el cliente prefiere nombres, así que ya no
  bloquea nada.
- Contenido de capacitaciones (módulos, temas, cuestionarios, certificado) y
  autorización de CAVIPLAN.
- Video de portada nuevo (concepto "vidrio crudo vs. laminado").
- Originales de los videos 06, 07 y 13 de "Elegí tu vidrio", que en su servidor
  están truncados.
