# Manual de marca Blindex — lo que dice

Fuente: `desarrollositiowebblindex/Blindex - Manual de Marca.pdf` (123 páginas),
recibido el 03/08/2026.

---

## Color

El manual define tres sistemas y **declara explícitamente el RGB para digital**
(pág. 14, "El Color en Pantalla"). Estos son los valores que mandan para la web:

### Marca madre

| Rol | RGB | HEX |
|---|---|---|
| **Rojo Blindex** (Pantone 485) | r225 g39 b38 | **`#E12726`** |
| Rojo + 10% negro | R205 G35 B34 | `#CD2322` |
| Rojo + 20% negro | R169 G26 B23 | `#A91A17` |
| **Negro 85%** | r38 g38 b38 | **`#262626`** |
| Negro 70% | R87 G87 B87 | `#575757` |
| Negro 40% | R160 G160 B160 | `#A0A0A0` |

En Pantone: **485**. En CMYK: **C5 M98 Y100 K0**.

### Líneas de producto

Cada sub-marca combina el rojo 485 + negro 85% + un color propio:

| Línea | Pantone | CMYK | HEX | |
|---|---|---|---|---|
| **Solar** | 130 | C2 M38 Y100 K0 | `#F7A800` | naranja |
| **Anti-Robo** | 285 | C85 M50 Y0 K0 | `#1B75BB` | azul |
| **Energy** | 369 | C66 M12 Y100 K0 | `#63A70A` | verde |
| **Acústico** | — | — | `#873594` | violeta ⚠️ |

⚠️ **Acústico no está en este manual.** El violeta salió de muestrear el logo
que mandaron en la tanda anterior. Confirmar.

**Laminado** no tiene color propio: usa la marca madre.

---

## Tipografía

| | |
|---|---|
| **Principal** | **Myriad Pro** — Light, Regular, Bold |
| **Alternativa** | **Arial** — Regular, Bold |

Textual del manual (pág. 11): *"En los casos en donde no se encuentre disponible
la familia tipográfica principal (por ej. en medios digitales), se deberá
reemplazar por la familia Arial."*

### El problema

Myriad Pro es de Adobe: para usarla en web hace falta una licencia de Adobe
Fonts, que el cliente tendría que tener y ceder. Y Arial, que es la alternativa
declarada, es una fuente de sistema que en un sitio nuevo lee a plantilla vieja.

### La recomendación

**Source Sans 3.** Es la sans humanista open source de Adobe, de la misma
familia de diseño que Myriad — mismas proporciones, misma sensación, misma "g"
de doble piso. Es gratis, está en Google Fonts y se carga como `woff2` sin
licencias.

En la práctica: respeta el espíritu del manual mejor que Arial, y no cuesta
nada. Si el cliente insiste con Myriad Pro, hay que pedirle la licencia de
Adobe Fonts.

---

## Qué corregí de la paleta provisoria

La versión que había derivado del logo tenía varios errores:

| | Yo tenía | Real |
|---|---|---|
| Rojo | `#ED1C24` | **`#E12726`** |
| Solar | `#F0A02A` | **`#F7A800`** |
| Anti-Robo | sin color | **`#1B75BB`** azul |
| Energy | sin color | **`#63A70A`** verde |
| Neutros | grafito frío | **neutros puros** (`#262626`, `#575757`, `#A0A0A0`) |

Los dos que más importan: **Anti-Robo es azul y Energy es verde**. No tenía
referencia de ninguno y los estaba tratando como grafito.

---

---

## Logos — resueltos

Los `.ai` son PDF por dentro, así que se convirtieron a SVG con `pdftocairo`
y se recortaron por `viewBox` al lockup exacto. Están en `public/logos/`:

| Archivo | Qué es |
|---|---|
| `blindex.svg` | lockup horizontal: isotipo + claim |
| `blindex-negativo.svg` | ídem, claim en blanco para fondo oscuro |
| `blindex-apilado.svg` / `-negativo` | versión apilada |
| `blindex-isotipo.svg` | sólo el cuadrado rojo — origen del favicon |
| `blindex-solar.svg` · `blindex-antirrobo.svg` · `blindex-energy.svg` | sub-marcas |
| `blindex-acustico.svg` | ⚠️ ver abajo |

**Los claims oficiales**, que no conocíamos:

| | |
|---|---|
| Blindex | **Seguridad para tu hogar.** |
| Solar | **Máximo Confort** |
| Anti \| Robo | **Máxima Protección** |
| Energy | **Máxima Aislación** |

El isologotipo es el **cuadrado rojo con "BLINDEX" en diagonal**. Funciona muy
bien como favicon porque a 16px se lee como mancha de color, no como símbolo.

**Blindex Laminado no tiene logo propio** — usa la marca madre. Por eso no
faltaba nada en el zip.

---

## Lo que sigue abierto

**Acústico.** No figura en el manual. Su lockup se extrajo del `.ai` del
WeTransfer anterior, y ahí aparece el problema: **usa el rojo viejo `#ED1C24`,
no el `#E12726` del manual actual**. Es una pieza de una versión anterior de la
marca. Su violeta exacto (del vector) es `#86349A`.

→ Pedirle al cliente el lockup de Acústico actualizado y su color oficial.

**Versión en negativo del logo.** El manual seguro la define en alguna de sus
123 páginas; por ahora la generamos recoloreando los rellenos oscuros a blanco,
que es lo que la marca hace en sus piezas. Conviene validarlo contra el manual.

**Myriad Pro.** Si el cliente la quiere de verdad en web, hay que pedirle la
licencia de Adobe Fonts.
