# Material recibido — QUAR Media / Blindex

**Fuente:** mail de Manuel García Conejero (Head of Operations, QUAR Media) — 30/07/2026
**Entrega:** WeTransfer `obras-blindex_2026-07-30_1754` · 235 archivos · ~300 MB

---

## 1. Inventario

| Tipo | Cant. | Detalle |
|---|---|---|
| Fotos JPG/JPEG | 224 | obras, producto, casos de uso, stock |
| Videos MP4/MOV | 5 | ~240 MB en total |
| PDF | 3 | 2 fichas Solar Neutro Light (alta/baja) + Revista Acústico |
| Ilustrador `.ai` | 2 | `LOGO BLINDEX ACÚSTICO.ai`, `SOLARNEUTROlight.ai` |
| PNG | 1 | `LOGO-BLINDEX-ACÚSTICO.png` (547×184, con fondo blanco) |
| **Tipografías** | **0** | ⚠️ el mail dice "fuentes" pero no vino ningún `.ttf/.otf/.woff` |

### Fotos por set

- **Raíz** (39) — mixto: producto, avisos gráficos, Malba, Origami, Legislatura de Santiago del Estero, Bariloche/Energy, Acústico (yoga, guitarra), Antirrobo.
- **Obra La Providencia — Blindex Solar** (89): 51 exteriores + 38 interiores, "calidad media".
- **Banana Boliche — Solar Neutro Light** (82): 44 interior + 28 exterior + 10 otras.
- **LP Blx Solar NL seleccionadas** (14): `IMG_16xx.JPG` — parecen la selección curada de La Providencia.

### Videos

`BLINDEX Antirrobo - Casa Mataderos v2 LOW.mp4` (18 MB) · `Blindex Energy l La Hoya.mp4` (78 MB) · `Blindex_LN_c2 (1).mp4` (101 MB) · `capsula 1_accidentes Laminado FINAL (1).mov` (28 MB) · `capsula 2_blindex solar FINAL.mp4` (15 MB)

---

## 2. Hallazgo crítico: la paleta del sitio está equivocada

Los tokens actuales en [tailwind.config.ts](../tailwind.config.ts) y [globals.css](../src/app/globals.css) son un **placeholder azul** (`brand-500: #1C5CB8`, `accent-500: #E8951A`).

Colores reales extraídos del logo y las piezas oficiales:

| Rol | HEX | Dónde aparece |
|---|---|---|
| Blindex rojo (marca madre) | `#ED1C24` | cuadrado del logo, isotipo `BLINDEX®` |
| Negro | `#000000` | wordmark |
| Acústico | `#873594` (violeta) | lockup sub-marca |
| Solar | naranja/ámbar (~`#F5A623`) | ficha técnica, tapa del folleto |

**RESUELTO (provisorio)** — tokens reemplazados el 31/07/2026:

- `brand-*` = escala del rojo Blindex, 500 = `#ED1C24`. Uso acotado: CTAs, logo, destellos.
- `ink-*` = escala grafito. Es el color **estructural** (textos, bordes, fondos de sección).
- `solar-*` y `acustico-*` = colores de línea de producto.

El criterio: grafito estructural + rojo de acento, que es como Blindex usa su marca en el folleto (layout blanco y negro, rojo sólo en el logo). Si el rojo ocupara superficie en todos lados, leería "alarma" y además el CTA dejaría de distinguirse.

⚠️ Falta confirmar contra el manual: los HEX exactos, Energy y Antirrobo (no tenemos pieza de referencia), y si el sistema de color por línea es realmente así.

Tipografía: en las piezas se ve una grotesca humanista tipo Open Sans / Source Sans, no la `Inter + Space Grotesk` que hoy usa [layout.tsx](../src/app/layout.tsx). **Sigue pendiente** — es el ítem 3 del pedido.

---

## 3. Qué falta pedir (checklist)

### Bloqueantes — sin esto no se cierra el diseño
- [ ] **Manual de marca** en PDF: paleta con **HEX/RGB** (no CMYK), tipografías, usos del logo, zona de resguardo, versiones mono y negativo.
- [ ] **Logo maestro Blindex en SVG** + todo el sistema de sub-marcas (Solar, Acústico, Energy, Antirrobo, Laminado, Templado, DVH). Vino sólo Acústico y Solar Neutro Light. `.ai` no sirve para web: hace falta **SVG**.
- [ ] **Tipografías con licencia web** (`.woff2`) o el nombre exacto + de dónde se licencian (Google Fonts / Adobe Fonts / Monotype). Si la licencia es sólo desktop, no se puede embeber.

### Legales — riesgo real si no llegan
- [ ] **Licencias del stock**: hay archivos `GettyImages-*` y `AdobeStock_*`. Necesitamos constancia de licencia con uso web/digital vigente.
- [ ] **Créditos y cesión de derechos** de las fotos de obra. En los nombres figura *"ph G Viramonte"*. Para cada obra: fotógrafo, estudio de arquitectura, nombre de obra y autorización de uso.
- [ ] **Claims legales**: garantía, normas IRAM, certificaciones, Código de Edificación de CABA — texto exacto aprobado y qué se puede afirmar.

### Contenido
- [ ] **Copy definitivo aprobado** por producto (hoy hay texto de relleno).
- [ ] **Fichas técnicas PDF de toda la línea** (llegaron sólo Solar Neutro Light y la revista Acústico).
- [ ] **Videos**: pedir los links de **YouTube/Vimeo oficiales** del canal Blindex en vez de los MP4. 240 MB de video no van hosteados en el sitio.
- [ ] **Metadata por foto**: qué obra es, dónde queda, qué producto Blindex lleva. Sin esto los epígrafes los inventamos nosotros.

### Datos operativos
- [ ] **Puntos de venta actualizados** (hay un [dataset](../src/data/puntosDeVenta.ts) que hay que validar): nombre, dirección, coordenadas, tel, horario.
- [ ] **Contacto oficial**: WhatsApp, mail, redes ([socials.ts](../src/data/socials.ts)).
- [ ] **Destino de los leads** del formulario de capacitaciones: ¿mail, CRM, HubSpot?
- [ ] **Dominio, hosting y analytics** (GA4 / Meta Pixel / GTM).
- [ ] **Sitemap aprobado** — confirmar que Home + Puntos de Venta + Capacitaciones es el alcance.

---

## 4. Dónde ubicar los archivos en el proyecto

**Regla:** los originales del cliente **no van en `public/`**. Todo lo que está en `public/` se sirve tal cual, se descarga público y se sube en cada deploy. 300 MB de `.ai`, PDFs de imprenta y JPG de 5000 px inflarían el repo y romperían el límite de deploy de Vercel.

```
blindex-landing/
├── assets-fuente/                       ← gitignored. Originales intactos.
│   └── 2026-07-30-quar-obras-blindex/   ← la carpeta del WeTransfer, tal cual llegó
├── docs/                                ← este archivo, briefs, mails
└── public/                              ← SÓLO derivados optimizados para web
    ├── logos/          blindex.svg, blindex-solar.svg, blindex-acustico.svg…
    ├── img/
    │   ├── obras/      la-providencia/, banana/, malba/, legislatura/
    │   ├── productos/  solar-neutro-light/, acustico/, antirrobo/, energy/
    │   └── og/         imágenes de Open Graph
    └── docs/           fichas técnicas PDF descargables (livianas)
```

**Convención de nombres en `public/`:** kebab-case, sin acentos, sin espacios, sin paréntesis. Hoy los archivos vienen con espacios y con `Ú` (`LOGO BLINDEX ACÚSTICO.ai`) — eso rompe URLs y builds en deploys Linux.

Ejemplo: `Origami Blx Sol NL bA0052.jpg` → `public/img/obras/origami/origami-01.jpg`

**Videos:** no van al repo. YouTube/Vimeo sin listar, o Cloudflare Stream / Mux si se quiere sin branding.

**Los originales**, además de en `assets-fuente/`, conviene dejarlos en un Drive compartido del proyecto — WeTransfer expira.
