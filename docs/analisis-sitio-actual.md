# Análisis del sitio actual — blindex.com.ar

Relevado el 31/07/2026 sobre WordPress 6.7.5. **91 URLs** en el sitemap.

---

## 1. El hallazgo principal: el menú expone 4 de 91 páginas

El menú principal tiene **cuatro ítems**:

`Home` · `Productos` · `Puntos de Ventas` · `Elegí tu vidrio`

Todo lo demás está construido, publicado y **es inalcanzable navegando**:

| Sección enterrada | Qué tiene |
|---|---|
| `/nuestras-obras/` | **25 obras**: Aeropuerto Ezeiza, Congreso de la Nación, Cancillería, Banco Central, Parque de la Memoria, Sheraton Pilar, Le Parc Alcorta, Torres El Faro… |
| `/asesoramiento/` | 17 boletines técnicos + 4 notas + 7 PDFs descargables |
| `/capacitaciones/` | **ya existe, con 3 videos de YouTube publicados** |
| `/casa-interactiva/` | segunda herramienta interactiva ("¿Cómo vidriar mi casa?") |
| `/contactenos/` | formulario de contacto con reCAPTCHA |
| `/eventos/` | 8 eventos |

**Esta es la oportunidad más grande del refresh.** No hay que producir contenido:
hay que hacer visible el que ya existe. Blindex tiene vidrio en el Congreso y en
Ezeiza y no lo muestra en ningún lado.

---

## 2. Inventario por tipo de contenido

| Tipo | Cant. | Notas |
|---|---|---|
| `works` (obras) | 25 | sólo título + imagen, ~9 palabras cada una |
| `boletines_tecnicos` | 17 | PDFs descargables |
| `pdv_cert` | 13 | una por provincia |
| `event` | 8 | el último es de 2023 |
| `product` | **5** | Laminado, Solar, Antirrobo, Energy, Acústico |
| `notes` | 4 | notas técnicas |
| `page` | 16 | incluye 4 variantes de home |
| `distribuidores` + `landing` | 3 | |

### Las 5 líneas de producto — confirmado

`blindex-laminado` · `blindex-solar` · `blindex-antirrobo` · `blindex-energy` ·
`blindex-acustico`

Esto **cierra la pregunta de los logos**: son cinco sub-marcas, no más. De dos
tenemos el logo, faltan tres.

---

## 3. Estructura de la home actual vs. la que armamos

| # | Home actual | ¿La tenemos? |
|---|---|---|
| 1 | Hero: *"Seguridad y confort para los que más querés"* | ✅ Hero |
| 2 | *"Aprendé a seleccionar el vidrio ideal para tu obra"* | ✅ EligeTuVidrio |
| 3 | *"¿Sabés si tus vidrios son BLINDEX?"* | ✅ Autenticidad |
| 4 | *"Conocé más sobre Blindex Solar Verde"* | ⚠️ destacado de producto rotativo |
| 5 | *"¿Cómo vidriar mi casa?"* | ❌ **falta** |
| 6 | *"Información Técnica y Regulaciones"* | ✅ Boletines |
| 7 | *"Solicitá Asistencia Técnica"* | ❌ **falta** |
| 8 | *"Eventos"* | ❌ **falta** |

Lo que armamos coincide bastante. Acertamos de lleno con **Autenticidad**: el
sitio real tiene *"¿Sabés si tus vidrios son BLINDEX?"* como sección propia.

### Lo que falta incorporar

1. **Nuestras Obras** — la ausencia más grave. 25 obras emblemáticas y encima
   nos acaban de mandar fotos de obra. Va como sección de home + página propia.
2. **Solicitá Asistencia Técnica** — es un canal de leads B2B que hoy no
   contemplamos. Distinto del contacto general.
3. **¿Cómo vidriar mi casa?** (casa interactiva) — segunda herramienta, mismo
   problema de portabilidad que "Elegí tu vidrio".
4. **Contacto** — no tenemos página de contacto.
5. **Eventos** — decidir si se mantiene (ver punto 6).

Y una que tenemos de más: **"Por qué Blindex"** no existe en el sitio actual.
Es un agregado nuestro; me parece que suma, pero conviene decirlo.

---

## 4. Puntos de venta: la data existe, pero le falta lo que más necesitamos

La página `/distribuidores-certificados/` tiene **116 distribuidores** cargados
sólo en la vista por defecto (Buenos Aires/GBA), y hay **13 provincias**. El
total real es de varios cientos.

Está publicada y es extraíble. Por cada uno hay:

✅ nombre · ✅ dirección · ✅ teléfono · ✅ web (sólo 10) · ✅ el flag de red
recomendada — textual: *"Los Puntos de Venta identificados con [ícono] forman
parte de la red recomendada por Blindex"*, que es el sello **Select**.

**⚠️ Lo que NO hay, y choca con nuestro diseño:**

- **Coordenadas.** El mapa las necesita. Hay que geocodificar las direcciones,
  lo cual es automatizable pero requiere revisión manual — las direcciones vienen
  sucias (*"3 DE febrero 3510"*, *"PARANA 518 (3364) 426553"*).
- **WhatsApp.** Los teléfonos son **fijos**: `4291-0528/0538`, `47598216`,
  `(011) 4763-8891`. Nuestro diseño tiene un botón de WhatsApp prominente por
  punto de venta, que fue pedido explícito del cliente. **Con esta data ese
  botón no funciona.** Hay que pedir los celulares, o el botón cae.

Esto hay que blanquearlo ya: es un requisito del cliente que su propia data no
soporta.

---

## 5. Capacitaciones: ya existe y tiene contenido

`/capacitaciones/` está publicada, dice *"No te pierdas nuestra capacitación
online"* y tiene **3 videos de YouTube embebidos**, titulados "Blindex 1",
"Blindex 2" y "Blindex 3".

Esto matiza lo que se dijo en la reunión ("una sección que hoy no está"). La
sección existe; lo que no existe es el circuito de certificación (cuestionario,
formulario, certificado). Vale confirmarlo con Manu: **quizá los videos base ya
están y no hace falta esperar la autorización de CAVIPLAN.**

---

## 6. Problemas encontrados

**SEO — la home no tiene meta description ni `og:image`.** Sin `og:image`,
cuando alguien comparte blindex.com.ar por WhatsApp aparece sin imagen. Para una
marca que empuja el contacto por WhatsApp, es un autogol. Se arregla solo en el
sitio nuevo, pero conviene mencionarlo como valor agregado.

**Contenido duplicado.** `/boletines/` y `/asesoramiento/` son **la misma
página**: mismos títulos, mismas 393 palabras, mismos 7 PDFs. Hay que unificar.

**Contenido vencido en producción.** La variante `inicio-video-3` está publicada
con un saludo de fin de año: *"Te deseamos unas fiestas llenas de felicidad,
amor y prosperidad"*. Estamos en julio. Además hay 4 variantes de home
(`inicio-video`, `-2`, `-3`, `-3-2`) conviviendo.

**Eventos frenados en 2023.** La última entrada es de hace tres años. O se
reactiva o se saca — una sección de eventos desactualizada envejece todo el
sitio.

**Obras sin contenido.** Las 25 obras tienen ~9 palabras cada una: son título +
foto. El valor está en los nombres, pero convendría sumar ficha (ubicación, año,
producto usado, estudio). Ahí encaja el pedido de créditos que ya hicimos.

---

## 7. Material aprovechable que no sabíamos que existía

**Videos comparativos de rotura.** La página de `blindex-laminado` tiene videos
titulados *"Rotura Vidrio Común"* vs *"Rotura Vidrio Blindex Laminado 3+3"*. Es
el contenido más persuasivo del sitio — muestra el producto haciendo
exactamente lo que promete. Merece lugar destacado en la home nueva.

**7 PDFs técnicos** ya alojados, y 17 boletines.

**Las 25 obras emblemáticas** son un activo de marca enorme desaprovechado.

---

## 8. Plan de trabajo sugerido

**Ahora, sin depender de nadie:**

1. **Nuestras Obras** — sección en home + página. Los nombres los tenemos, las
   fotos también (La Providencia, Banana, Malba, Legislatura).
2. **Volcar el copy real** de productos, asesoramiento y autenticidad. Está todo
   publicado y es accesible.
3. **Página de contacto** + bloque "Solicitá Asistencia Técnica".
4. **Extraer los 116+ distribuidores** a `puntosDeVenta.ts` y arrancar el
   geocoding.

**Cuando llegue el manual de marca:** paleta definitiva, tipografías, los 3
logos faltantes.

**A definir con el cliente:** el WhatsApp de los puntos de venta (bloqueante
para esa sección) · si eventos sigue · si los videos de capacitación ya
publicados sirven · qué video va en el hero.

**Aparte (a cotizar):** portar "Elegí tu vidrio" y "Casa interactiva".
