# Estado del sitio — 31/07/2026

Qué hay construido hoy. Las definiciones del cliente están en
[reunion-inicial.md](./reunion-inicial.md) — si algo se contradice, gana ese
archivo.

Recordatorio de encuadre: Blindex es un **refresh visual**. El contenido del
sitio actual se mantiene; lo que rehacemos es el diseño.

## Estructura actual

### Home (`/`)

Orden real de las secciones en [page.tsx](../src/app/page.tsx):

| # | Sección | Componente | Estado |
|---|---|---|---|
| 1 | Hero | `home/Hero.tsx` | sin foto ni video definitivo |
| 2 | Por qué Blindex | `home/PorQueBlindex.tsx` | copy de ejemplo |
| 3 | Productos | `home/Productos.tsx` | copy de ejemplo |
| 4 | Autenticidad ("exigí Blindex original") | `home/Autenticidad.tsx` | copy de ejemplo |
| 5 | Elegí tu vidrio | `home/EligeTuVidrio.tsx` | CTA sin destino (`href="#"`) |
| 6 | Boletines | `home/Boletines.tsx` | copy de ejemplo |
| 7 | CTA a puntos de venta | `home/CtaPuntos.tsx` | ok |

### Puntos de venta (`/puntos-de-venta`)

Funcionalmente terminada: mapa Leaflet, listado, toggle lista/mapa en mobile,
link directo a WhatsApp por sucursal. **Sólo falta la data real**
([puntosDeVenta.ts](../src/data/puntosDeVenta.ts)).

### Capacitaciones Blindex (`/capacitaciones-blindex`)

**Ruta oculta**: no se linkea desde el menú ni el pie, y no se indexa.

Tiene módulos en video + formulario de inscripción. El contenido es
placeholder — hoy hay dos módulos inventados ("Instalación segura",
"Cómo identificar un Blindex original") apuntando a un video dummy de YouTube.

Definido en la reunión: apunta a **vidrieros e instaladores**, explícitamente no
a consumidor final. Formato: varios videos, cada uno con cuestionario final.
Certificado tipo "punto de venta certificado en Blindex", emitido a mano por la
marca. Material base a reciclar de **CAVIPLAN**.

Falta: autorización de CAVIPLAN · cuántos módulos y sobre qué · las preguntas de
los cuestionarios · **confirmación del acceso** (el cliente pidió login,
propusimos URL oculta).

## Qué está definido y qué no

**Definido:** stack (Next 14 App Router + Tailwind + Framer Motion + Leaflet) ·
paleta provisoria derivada del logo · arquitectura de assets
(`assets-fuente/` → `public/`) · el sitio es un refresh visual del actual.

**Sin definir:** manual de marca y tipografías · si va video en el hero y cuál ·
el copy final (sale del sitio actual, hay que volcarlo) · contenido de
capacitaciones · data real de puntos de venta · destino de los leads.

## Decisión pendiente de mayor impacto

**Acceso a capacitaciones: ¿login o URL oculta?**

El cliente pidió login en la reunión; nosotros propusimos URL oculta con
`noindex`. Está construido como URL oculta, pero **ellos no lo confirmaron**.
Va preguntado explícitamente en el mail. Si no se blanquea ahora, reaparece como
reclamo en la entrega.
