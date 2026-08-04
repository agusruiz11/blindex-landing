# "Elegí tu vidrio" — qué es y cómo migrarlo

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
