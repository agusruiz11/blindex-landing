# Un sitio por país

Desde el 21/10/2026 el mismo código arma el sitio de cada país. El contenido de cada uno vive en su carpeta y el país se elige al compilar.

## Dónde está cada cosa

- `src/paises/tipos.ts`: la forma del contenido, común a todos los países.
- `src/paises/ar/`: Argentina.
- `src/paises/py/`: Paraguay.
- En cada carpeta: productos, puntos de venta, distribuidores, obras, boletines, notas, capacitaciones, redes, países de la región, textos generales (`sitio.ts`) y redirecciones del sitio viejo (`redirecciones.mjs`).
- Los componentes importan el contenido con `@pais/<archivo>` y los tipos con `@/paises/tipos`.
- Archivos propios de un país en `public/`: `public/py/` (hoy, las fichas en PDF de Paraguay).

## Cómo se elige el país

Con la variable `PAIS` al compilar:

```bash
npm run build              # Argentina (por defecto)
PAIS=ar npm run build      # lo mismo
PAIS=py npm run build      # Paraguay
PAIS=py npm run empaquetar # entrega/blindex-preview-py-AAAAMMDD.zip
```

Sin `PAIS` se compila Argentina: el proyecto de Vercel y el paquete para RH Studio no necesitan ningún cambio. Un `PAIS` que no existe corta el build con un error.

Cada país tiene su `tsconfig`: `tsconfig.json` apunta `@pais/*` a `src/paises/ar` y `tsconfig.<pais>.json` a la carpeta de ese país. `next.config.mjs` elige el archivo según `PAIS`, y Next lo usa para chequear tipos y para resolver los imports. Así cada build lleva sólo el contenido de su país.

## Qué decide cada país en `sitio.ts`

- `home`: qué secciones van en la home y en qué orden.
- `paginas`: páginas opcionales (contacto, obras, asesoramiento, capacitaciones). Las que faltan responden 404, y los formularios de una página que falta tampoco reciben envíos.
- `menu`, `hero`, `pilares`, `ctaPuntos`, `footer`: textos y links.
- `region`: cómo se llama la división del país en los puntos de venta (provincia, departamento).
- `lineas`: opcional. Con líneas (Paraguay: laminado y templado), la sección de productos arranca con las dos opciones y muestra los productos de la elegida, y los puntos de venta se filtran primero por línea. Cada producto lleva `linea` y cada punto, `lineas`. Se entra directo a una línea con `/#productos-<linea>` o `/puntos-de-venta?linea=<linea>`.

## Paraguay

Alcance en `Paraguay - alcance y plan de trabajo.md` (carpeta QUARMEDIA). Lo que hay hoy:

- 12 productos en dos líneas (6 de laminado, 6 de templado), con texto de blindex.com.py y sus fichas en PDF (recomprimidas; el manual de Roll Door pasó de 66 MB a 2,5 MB rasterizado a 150 dpi).
- 82 puntos de venta (12 de laminado, 70 de templado) con departamento y coordenadas. Sin WhatsApp: los tiene que pasar la marca.
- Sin Elegí tu vidrio, formulario de contacto, capacitaciones, obras, asesoramiento ni producto destacado. La franja de distribuidores espera los logos.
- Redirecciones desde las URLs del WordPress de Paraguay.

Pendientes y dudas para la marca: comentarios `⚠️` en `src/paises/py/`.

## Cómo se verificó que Argentina no cambió

Antes de mover nada se compiló `main` (b9994d0) y se guardó el HTML de las 17 rutas, los códigos de respuesta y las redirecciones. Después de cada paso:

- El HTML visible (sin scripts ni nombres de archivo con hash) es idéntico en las 17 rutas, con y sin `PAIS=ar`.
- Códigos de respuesta y redirecciones, iguales.
- Capturas de página completa con Puppeteer (movimiento reducido, scroll completo, imágenes cargadas) de 10 rutas en desktop y mobile: 19 de 20 idénticas píxel por píxel. La home en desktop difiere en el suavizado de una línea de texto (136 píxeles, diferencia máxima 41 de 255, sin corrimiento): la bajada de puntos de venta pasó de varios nodos de texto a uno solo y el navegador acomoda las letras distinto por fracciones de píxel. El texto es el mismo.
