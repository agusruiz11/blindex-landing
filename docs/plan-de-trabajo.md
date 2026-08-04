# Plan de trabajo — Blindex

Actualizado 31/07/2026. El sitio pasó de **6 a 19 páginas**.

---

## ✅ Hecho

### Contenido y datos reales

| Qué | Dónde |
|---|---|
| **116 puntos de venta** con coordenadas y sello Select (23) | `data/puntosDeVenta.ts` |
| **25 obras** con foto | `data/obras.ts` → `/nuestras-obras` |
| **5 líneas de producto** con copy real | `data/productos.ts` → `/productos/[id]` |
| **8 boletines** en PDF | `data/boletines.ts` → `/asesoramiento` |
| **4 notas técnicas** con el texto completo volcado | `data/notas.ts` → `/asesoramiento/[id]` |
| **Capacitación online** (3 videos ya publicados) | `/capacitacion-online` |
| **Contacto** + asistencia técnica | `/contacto` |

### Assets localizados — el riesgo de migración ya está resuelto

Todo lo que se servía desde `blindex.com.ar` ahora vive en `/public`:

- **25 fotos de obra** → WebP, 1600px. **8,4 MB → 3,1 MB**
- **8 PDFs** técnicos → `/public/docs`
- **2 videos de rotura** recomprimidos. **52 MB → 16 MB**
- **4 notas técnicas** → texto volcado a `data/notas.ts`

`public/` total: **23 MB**. No queda ninguna dependencia del dominio viejo en
runtime.

### Otros

Paleta real de marca (provisoria) · navbar y footer exponiendo lo enterrado ·
SEO base con OpenGraph · la card de punto de venta degrada sola si no hay
WhatsApp.

---

## 🔴 Necesito de vos

1. **Curaduría de las 224 fotos del WeTransfer.** Es lo único que no puedo
   decidir yo. Necesito saber cuáles entran de La Providencia (89), Banana (82)
   y las sueltas. Alternativa: hago una preselección y la revisás.
2. **Foto o video para el hero.** Hoy no hay imagen de portada.
3. **¿Eventos entra o no?** La última entrada del sitio actual es de 2023.
4. **Revisar el filtro de provincias** de puntos de venta: se derivaron de las
   coordenadas y conviene una pasada de ojo.

## 🔴 Necesito del cliente (ya pedido en el mail del 31/07)

Manual de marca (HEX + usos del logo) · los 3 logos que faltan (Laminado,
Antirrobo, Energy) · tipografías · **WhatsApp por sucursal** · cuál de los 5
videos va en portada · títulos reales de los 3 videos de capacitación ·
créditos de las obras.

## 🟡 Pedir además — no estaba en ese mail

**Acceso FTP de lectura o backup del WordPress.** Resuelve seis cosas:
la carpeta de `/elegituvidrio/` · el copy que falta volcar · la biblioteca de
medios · **la tipografía real del theme** · qué carga el GTM ·
**los puntos de venta de las 12 provincias que faltan** (la página pública sólo
renderiza 116).

---

## ⚪ A cotizar aparte

- Portar **"Elegí tu vidrio"** (9 páginas HTML + GIFs animados) —
  [elegi-tu-vidrio.md](./elegi-tu-vidrio.md)
- Portar **"Casa interactiva"**
- **Módulo de certificación de vidrieros** (distinto de la capacitación online,
  que ya está hecha)
- **Migración a GA4**, si se confirma que están sin métricas

---

## Puedo seguir solo con

1. **Copiar `/elegituvidrio/`** a `public/` + el rewrite, para que no se rompa.
2. **Pipeline de exportación** de fotos del WeTransfer a `/public` (queda listo
   para cuando definas la curaduría).
3. **Hero** con una de las fotos de obra que ya bajamos, como provisorio.
4. **`og:image`** — hoy el metadata apunta a un archivo que no existe.
5. Volcar el copy de **"¿Cómo vidriar mi casa?"** y las secciones que faltan.

## Hallazgos para pasarle al cliente

- Un PDF de boletines **está roto en su sitio** (404): el de "Blindex, Blindex
  Solar y Blindex Antirrobo".
- El **video de Blindex Solar** que referencia su propia página de producto
  también da 404.
- La home **no tiene meta description ni og:image**: compartida por WhatsApp
  sale sin imagen.
- `/boletines/` y `/asesoramiento/` son **la misma página duplicada**.
- Hay una home publicada con **saludo de fin de año**, en julio.
