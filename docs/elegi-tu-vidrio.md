# "Elegí tu vidrio" — qué es y cómo se migró

> **Migrada el 23/09/2026.** Vive en `public/elegituvidrio/` con la misma URL
> de siempre (`/elegituvidrio/`). El resto de este documento es el análisis
> previo; el detalle de la migración está al final.

URL: https://www.blindex.com.ar/elegituvidrio/

## Qué es técnicamente

**No es parte de WordPress.** El sitio principal de Blindex corre WordPress
6.7.5, pero `/elegituvidrio/` es una **aplicación estática independiente**
apoyada en una subcarpeta del mismo servidor.

| | |
|---|---|
| Stack | Bootstrap 4 + jQuery 3.4 + Font Awesome 5.9 |
| Estructura | `index.html` + `css/` + `js/` + `images/` + `plugins/` |
| Lógica | ~9 KB de JS: `js/custom/index.js` (7 KB) + `js/common.js` (2 KB) |
| Rutas | **relativas** (`css/bootstrap.css`, `images/icons/…`) |
| Backend | ninguno — es 100% client-side |
| Tipografía | Lato (Google Fonts) |

Las cinco necesidades del selector están en el HTML como
`<a seleccion="accidentes|robo|ruidos|energia|solar">`, con la lógica del árbol
de decisión en `index.js`.

## La conclusión que importa

**Es 100% portable.** Al ser estático, sin backend y con rutas relativas, la
carpeta se copia tal cual y funciona. No hay nada que reescribir.

## El riesgo: linkear en vez de copiar

**Si dejamos un botón apuntando a `blindex.com.ar/elegituvidrio/`, se rompe el
día que se migre el dominio.**

Pasar el dominio significa repuntar el DNS a nuestro hosting. A partir de ese
momento `blindex.com.ar` deja de resolver al servidor de WordPress — y
`/elegituvidrio/` vive **en ese servidor**. El botón tiraría 404.

O sea: linkear no es una opción que "después vemos". Es una bomba de tiempo con
fecha conocida.

## Qué hacer

**Copiar la carpeta a `public/elegituvidrio/`, manteniendo la misma URL.**

Ventajas: la URL no cambia (sirve todo lo que esté impreso o linkeado por
afuera), no se pierde SEO, no hay que reescribir la lógica, y no depende del
hosting viejo.

En Next.js los archivos de `public/` se sirven tal cual. Para que
`/elegituvidrio/` resuelva al `index.html` de forma confiable, agregar en
`next.config.mjs`:

```js
async rewrites() {
  return [
    { source: "/elegituvidrio", destination: "/elegituvidrio/index.html" },
  ];
}
```

### Cómo conseguir los archivos

1. **Preferido:** pedirle al cliente acceso FTP/cPanel del hosting actual y
   bajar la carpeta completa. Es la única forma de garantizar que vengan todos
   los assets, incluidos los que sólo se referencian desde el JS.
2. **Alternativa:** espejarla con
   `wget -r -np -k -p https://www.blindex.com.ar/elegituvidrio/`.
   Sirve, pero sólo trae lo que sea alcanzable crawleando — hay que revisar a
   mano que no falte ningún ícono.

### Deuda técnica a blanquear

Copiada tal cual, la herramienta **se va a ver como el sitio viejo**: es
Bootstrap 4 con otra tipografía y otra paleta. Para el lanzamiento está bien —
la prioridad es no romper la URL.

Restilarla después es viable: la lógica son 9 KB de JS que no hace falta tocar,
alcanza con reemplazar el CSS. Va como ítem aparte, no dentro del refresh.

## Hallazgos secundarios

**Analytics muerto.** El sitio principal declara `UA-19398443-1` y
`GTM-KZ8W5J8`; la herramienta usa otro, `UA-101664267-1`. Las propiedades
Universal Analytics dejaron de recibir datos en **julio de 2023**. Salvo que el
GTM esté cargando un GA4 aparte, **Blindex está sin métricas hace dos años**.
Vale confirmarlo y ofrecer la migración a GA4 — es un extra concreto y fácil de
justificar.

**Lato.** La herramienta carga Lato desde Google Fonts. No es prueba de que sea
la tipografía de marca, pero es un indicio mientras no llegue el manual.

**Bug menor.** En el pie de la herramienta, el texto "VASA - Vidriería Argentina
S.A." linkea a `getbootstrap.com` — quedó del template. Si copiamos la carpeta,
corregirlo.

**Link muerto.** `pantalla_soluciones.html` (el "Catálogo") devuelve 404. En el
HTML ya está comentado, así que no molesta.

---

## Migración hecha el 23/09/2026

**Origen.** El mirror de agosto (`assets-fuente/elegituvidrio-mirror-2026-08-03`)
estaba incompleto: `wget` sólo trajo lo alcanzable por links. Faltaban el JS
principal (`js/custom/index.js`, el árbol de decisión), las 16 páginas de
`provincias/` y `exposicion-sol/` (sólo estaba `energia.html`), los íconos
`_on.png` de los botones seleccionados, la página `ficha-tecnica.html` con sus
30 PDFs, la imagen del QR y 8 videos más (10 al 17, que `producto.js` carga
según provincia y exposición al sol). Se hizo un crawl nuevo desde
`blindex.com.ar/elegituvidrio/` siguiendo todas las referencias de HTML, CSS y
JS (incluidos los strings de JS y los parámetros `?file=`). Resultado: 179
archivos, todos los que la herramienta pide.

**Videos.** Los 17 se recomprimieron a 720p H.264 (crf 28, faststart): de 1,4 GB
a 107 MB en total, entre 2 y 10 MB cada uno. Los tres primeros ya estaban en
720p en el mirror y se copiaron tal cual. **Tres archivos del servidor original
están truncados** (el archivo termina antes que el video): `06_dvh_solar_energy`
corta a 2:34 de 2:53, `07_dvh_antirrobo_solar` a 2:29 de 3:50 y
`13_dvh_antirrobo_solar` a 1:10 de 3:33. Pasa lo mismo en el sitio actual; si
Blindex tiene los originales, se reemplazan y se recomprimen con
`scripts/elegituvidrio-videos.sh`.

**Cambios sobre la copia** (mínimos, para que funcione bajo Next):

- `<base href="/elegituvidrio/">` en los 12 HTML de la raíz de la carpeta. Next
  redirige `/elegituvidrio/` a `/elegituvidrio` (sin barra) y sin el `base` las
  rutas relativas se irían a la raíz del sitio. Las páginas de subcarpetas usan
  `../` y no lo necesitan.
- Rewrite `/elegituvidrio` → `/elegituvidrio/index.html` en `next.config.mjs`.
- Se quitó el tag de Universal Analytics `UA-101664267-1` de los 44 HTML (muerto
  desde 2023). Cuando haya GA4 se agrega el tag ahí también.
- `js/common.js`: el temporizador de inactividad y la imagen del QR usaban rutas
  relativas que daban 404 desde `provincias/` y `exposicion-sol/`; ahora son
  absolutas.
- Pie: el link "VASA - Vidriería Argentina S.A." iba a getbootstrap.com; ahora va
  a la home.
- El botón de la home (`EligeTuVidrio.tsx`) volvió a `/elegituvidrio/`.

**Verificación.** Con un Next 14 de prueba y Chromium headless se recorrieron
las 31 combinaciones de necesidades desde el botón "Continuar" y, desde cada
resultado, todos los links internos (109 páginas). Ningún 404 propio de la
herramienta. Quedan tres 404 que ya existían en el sitio original: los posters
`03_dvh_doble_laminado.jpg`, `08_dvh_solar_laminado.jpg` y
`09_dvh_laminado_antirrobo.jpg` nunca estuvieron en el servidor (el video se
muestra igual, sin imagen previa). También hay un error de consola en las
páginas de producto (`Syntax error, unrecognized expression: #`) que viene del
`producto.js` original y también salta en el sitio actual; no afecta nada
visible. Los videos no se pudieron reproducir en el Chromium de prueba porque
esa build no trae el códec H.264, pero el servidor los entrega bien (200 y
206 con rangos); probarlos en la preview de Vercel.

**Nota.** El cliente tiene los 17 videos originales en su servidor; localmente
sólo quedaron los 9 del mirror de agosto (fuera de git). Los otros 8 no se
guardaron por tamaño (hasta 152 MB cada uno); si hace falta re-encodear, se
bajan de `blindex.com.ar/elegituvidrio/videos/` mientras el hosting viejo siga
activo.
