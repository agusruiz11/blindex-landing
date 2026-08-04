# Plan de commits — refresh Blindex (jul–ago 2026)

Estado de partida: 25 archivos modificados + 15 rutas nuevas, todo sobre `main`,
encima de `25b2d6a superpush`. Objetivo: partir eso en commits temáticos, en un
orden en el que **cada commit compila** (los que importan datos van después de
los datos).

---

## Paso 0 — Antes de commitear nada

### 0.1 `desarrollositiowebblindex/` → `assets-fuente/`

Ya existe `assets-fuente/` con la convención `AAAA-MM-DD-origen-descripcion/`, su
`README.md` y su regla en `.gitignore`. La carpeta del manual de marca es otra
entrega del mismo cliente: va ahí, no en la raíz.

```bash
mv desarrollositiowebblindex "assets-fuente/2026-08-03-quar-manual-de-marca"
git check-ignore -v "assets-fuente/2026-08-03-quar-manual-de-marca"   # confirma que queda fuera
```

**No hace falta tocar `.gitignore`**: `/assets-fuente` ya lo cubre. Después,
sumar la fila a la tabla de `assets-fuente/README.md`.

### 0.2 Descartar el cambio de `package-lock.json`

**Decidido: se revierte.** El diff son 14 bloques idénticos que borran un campo
`"libc": ["glibc"]` / `["musl"]` de paquetes opcionales de `@next/swc` y Rollup.
No se toca ninguna versión ni ninguna dependencia: es puro ruido de metadatos.

Pasó porque el lock lo generó un npm más nuevo que el instalado acá (11.4.2).
`libc` es un campo que npm agregó después de esa versión para saber si un
binario precompilado es para glibc o musl (Alpine); un npm que no lo conoce lo
borra al reescribir el archivo. Commitearlo haría que el próximo con npm nuevo
los vuelva a agregar, y el archivo rebota para siempre entre dos estados.

```bash
git checkout -- package-lock.json
```

Opcional, para que no se repita: `npm install -g npm@latest`.

### 0.3 Verificar que no se cuele basura

```bash
git status --porcelain -uall | grep -E '\.next/|node_modules/|tsbuildinfo'  # debe salir vacío
```

---

## Los commits

Convención: [Conventional Commits](https://www.conventionalcommits.org). Cuerpo
en español, imperativo, explicando el **porqué** — no el qué, que ya está en el
diff.

### 1 · `chore: excluir del repo los originales del cliente`

```bash
git add .gitignore
git commit
```

`assets-fuente/README.md` **no se versiona**: vive dentro de una carpeta
ignorada, así que agregarlo obligaría a forzarlo con `-f` y quedaría una
excepción rara. La convención ya está explicada en el comentario del
`.gitignore` y en `docs/material-cliente.md`.

> Los .ai, PDF de imprenta y videos que manda QUAR pesan 1,3 GB y no se
> deployan: de ahí salen los derivados optimizados que sí van a public/.
> Quedan en assets-fuente/, con backup en el Drive del proyecto.

### 2 · `docs: incorporar relevamiento, plan de trabajo y decisiones`

```bash
git add docs/
git commit
```

> Nueve documentos con el análisis del sitio actual (91 páginas, 4 en el menú),
> el inventario de material recibido, la lectura del manual de marca y las
> respuestas enviadas a QUAR. Base de todas las decisiones que siguen.

### 3 · `feat(marca): aplicar el manual de marca oficial`

```bash
git add tailwind.config.ts src/app/globals.css src/components/BlindexLogo.tsx \
        public/logos/ public/favicon.ico public/icon-192.png public/icon-512.png \
        public/apple-touch-icon.png
git commit
```

> Reemplaza los tokens placeholder (azul + naranja) por los valores RGB
> oficiales: rojo Pantone 485 y la escala de negros del manual. El logo pasa de
> un escudo dibujado a mano a los SVG extraídos de los .ai originales, con
> variantes completo/isotipo y negativo.

### 4 · `refactor(ui): usar el rojo como acento y el gris como estructural`

```bash
git add src/components/home/Autenticidad.tsx src/components/home/CtaPuntos.tsx \
        src/components/home/PorQueBlindex.tsx src/components/capacitaciones/ModuloVideo.tsx \
        src/components/capacitaciones/FormularioInscripcion.tsx \
        src/app/capacitaciones-blindex/page.tsx
git commit
```

> Con la paleta anterior `brand-` era el azul de fondo de medio sitio. Con el
> rojo real, ese mismo uso leería "alarma" en vez de "seguridad": los fondos,
> hovers y focus pasan a `ink-`, y el rojo queda reservado para acentos de alta
> jerarquía. Es como la marca se usa en sus propias piezas.

### 5 · `feat(data): modelar productos, obras, boletines y notas técnicas`

```bash
git add src/data/
git commit
```

> Todo el contenido del sitio sale de acá, tipado y en un solo lugar, para que
> actualizarlo no requiera tocar componentes. Incluye la ampliación de puntos de
> venta.

### 6 · `feat(productos): páginas por línea de producto`

```bash
git add src/app/productos/ src/components/home/Productos.tsx src/components/Footer.tsx
git commit
```

> Cada línea (Laminado, Solar, Antirrobo, Acústico, Energy) pasa a tener URL
> propia en lugar de vivir sólo como card en la home. El footer ahora deriva
> sus links del mismo dataset.

### 7 · `feat(obras): sumar obras a la home y darles página propia`

```bash
git add src/app/nuestras-obras/ src/components/home/Obras.tsx src/app/page.tsx public/img/obras/
git commit
```

> Congreso, Ezeiza, Cancillería, MALBA y 20 obras más son el activo más fuerte
> de la marca y en el sitio actual están publicadas pero fuera del menú. Van
> después de Productos: primero qué vende, después la prueba de que funciona.

### 8 · `feat(asesoramiento): notas técnicas y biblioteca descargable`

```bash
git add src/app/asesoramiento/ src/components/home/Boletines.tsx public/docs/
git commit
```

> Los ocho PDF técnicos (ley de vidrios seguros, control del ruido, guía de
> especificación) son material de venta para arquitectos y hoy están dispersos.
> Quedan indexados y descargables desde una sección propia.

### 9 · `feat(contacto): página de contacto con formulario`

```bash
git add src/app/contacto/ src/components/contacto/
git commit
```

### 10 · `feat(capacitacion-online): módulo de capacitación online`

```bash
git add src/app/capacitacion-online/
git commit
```

### 11 · `feat(nav): abrir Obras, Asesoramiento y Contacto en el menú`

```bash
git add src/components/Navbar.tsx
git commit
```

> Va último de la serie de features a propósito: recién ahora los cuatro
> destinos existen. Sale "¿Por qué Blindex?" y "Boletines" (anclas de la home),
> entran las secciones que hoy son inalcanzables navegando.

### 12 · `feat(seo): metadatos, Open Graph y favicons`

```bash
git add src/app/layout.tsx
git commit
```

> El sitio actual no tiene meta description ni og:image: compartido por WhatsApp
> aparece sin imagen. Para una marca que empuja el contacto por WhatsApp es un
> autogol. Queda pendiente reemplazar `metadataBase` por el dominio final.

### 13 · `feat(home): hero con material real y video de rotura`

```bash
git add src/components/home/Hero.tsx public/img/hero/ public/video/
git commit
```

### 14 · `fix(puntos-de-venta): mejorar mapa y fichas`

```bash
git add src/components/puntos/
git commit
```

### 15 · `chore: documentar la deuda de "Elegí tu vidrio"`

```bash
git add next.config.mjs src/components/home/EligeTuVidrio.tsx
git commit
```

> La herramienta es una app estática aparte (Bootstrap + jQuery) que hoy vive en
> el WordPress. El link se rompe al migrar el dominio: queda anotado el rewrite
> y la ruta del mirror bajado. Ver docs/elegi-tu-vidrio.md

### 16 · `chore(claude): dejar sólo permisos reutilizables en settings.json`

```bash
git add .claude/settings.json
git commit
```

> El archivo había juntado 45 permisos de sesiones puntuales: comandos `sed` con
> el reemplazo exacto hardcodeado, rutas de scratchpad de una sesión que ya no
> existe y restos de una máquina Windows. Nada de eso le sirve a otra persona.
> Queda una lista de 10 entradas de sólo lectura: inspección de git, los scripts
> de npm, y las herramientas para abrir el material del cliente (ffprobe para
> videos, pdftotext/pdftocairo para los .ai y PDF del manual).

Se sacaron a propósito `git checkout *` y `git reset *`: son las dos formas más
rápidas de perder trabajo sin querer, y no vale la pena tenerlas pre-aprobadas
en un repo que suele tener cambios sin commitear. Siguen funcionando, sólo
piden confirmación.

---

## Los dos archivos mezclados — resuelto

### `Hero.tsx` → entero al commit 13, sin partir

Revisado hunk por hunk: los tres cambios son la misma historia (bloque `MEDIA`,
reemplazo de la foto de Unsplash por la obra real con art direction mobile,
titular y bajada nuevos). Lo único de color es un `btn-accent` → `btn-primary`
enredado con el cambio de copy. Partirlo ahí sería peor: quedaría un commit con
media línea suelta. Va entero.

### `EligeTuVidrio.tsx` → sí se parte, son exactamente 2 hunks

Salen limpios y separados: el primero es el swap de color, el segundo el link
real más el comentario de la deuda. Con `git add -p` alcanza con dos teclas.

```bash
git add -p src/components/home/EligeTuVidrio.tsx
#   hunk 1 (los gradientes brand-→ink-)  → y
#   hunk 2 (el <a href="/elegituvidrio/">) → n
```

Eso deja el hunk 1 staged para el **commit 4** y el 2 en el working tree para el
**commit 15**. Después del commit 4, `git add src/components/home/EligeTuVidrio.tsx`
levanta el resto.

> Atajo de `add -p`: `y` incluye, `n` saltea, `s` parte el hunk en pedazos más
> chicos, `q` sale. Si te equivocás, `git reset` desarma el staging sin tocar
> los archivos.

---

## Verificación antes de pushear

```bash
npm run build          # que compile con todo aplicado
git log --oneline      # leer la lista: ¿se entiende la historia sin abrir un diff?
git status             # limpio, salvo assets-fuente/ ignorado
git push origin main
```

Chequeo opcional de que cada commit compila por separado (vale la pena si
alguien va a hacer bisect después):

```bash
git rebase -i --exec "npm run build" b455a7f
```

---

## Los videos — decidido: git común, sin Git LFS

Los dos son H.264 720p: 78 s / 12 MB y 40 s / 4,4 MB. `public/` completo pesa
24 MB.

**Van al repo como cualquier otro archivo.** Tienen que estar versionados: son
parte del sitio, se sirven desde `/public` y sin ellos el deploy sale roto.
Dejarlos sólo en tu máquina significa que el sitio no se puede levantar en
ningún otro lado.

Git LFS existe porque git guarda **cada versión completa** de un binario: si
re-exportás un video de 12 MB diez veces, el repo carga los 120 MB para siempre,
aunque sólo uses el último. LFS los reemplaza por punteros y guarda los archivos
en un servidor aparte.

No hace falta acá: 24 MB es un repo chico (GitHub avisa recién a los 50 MB por
archivo y bloquea a los 100 MB), y estos videos son material terminado del
cliente que no se va a estar re-exportando. LFS traería costo sin beneficio —
todos los que clonen tienen que instalar `git-lfs`, y la cuota gratis de GitHub
es 1 GB de storage y 1 GB de tráfico por mes.

**Cuándo sí replantearlo:** si se suman los videos de campaña de
`assets-fuente/` (hay `.mp4` y `.mov` de varios cientos de MB), o si empiezan
las iteraciones de re-encoding. En ese caso, LFS **antes** del primer push que
los incluya — migrar después obliga a reescribir la historia.

**Aparte, no bloqueante:** 12 MB es pesado para una web. Si son click-to-play
(no autoplay), pasa; si en algún momento van en la portada, hay que recomprimir.
