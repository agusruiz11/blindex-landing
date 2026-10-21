# Un sitio por país

Desde el 21/10/2026 el mismo código arma el sitio de cada país. El contenido de cada uno vive en su carpeta y el país se elige al compilar.

## Dónde está cada cosa

- `src/paises/tipos.ts`: la forma del contenido, común a todos los países.
- `src/paises/ar/`: Argentina. Productos, puntos de venta, distribuidores, obras, boletines, notas, capacitaciones, redes, países de la región, textos generales (`sitio.ts`) y redirecciones del WordPress (`redirecciones.mjs`).
- Los componentes importan el contenido con `@pais/<archivo>` y los tipos con `@/paises/tipos`.

## Cómo se elige el país

Con la variable `PAIS` al compilar:

```bash
npm run build              # Argentina (por defecto)
PAIS=ar npm run build      # lo mismo
PAIS=py npm run empaquetar # entrega/blindex-preview-py-AAAAMMDD.zip
```

Sin `PAIS` se compila Argentina: el proyecto de Vercel y el paquete para RH Studio no necesitan ningún cambio. Un `PAIS` que no existe corta el build con un error.

Cada país tiene su `tsconfig`: `tsconfig.json` apunta `@pais/*` a `src/paises/ar` y `tsconfig.<pais>.json` a la carpeta de ese país. `next.config.mjs` elige el archivo según `PAIS`, y Next lo usa para chequear tipos y para resolver los imports. Así cada build lleva sólo el contenido de su país.

## Cómo se verificó que Argentina no cambió

Antes de mover nada se compiló `main` y se guardó el HTML de las 17 rutas, los códigos de respuesta, las redirecciones y capturas en desktop y mobile. Después de mover, con y sin `PAIS=ar`:

- El HTML visible (sin scripts ni nombres de archivo con hash) es idéntico en las 17 rutas.
- Códigos de respuesta y redirecciones, iguales.
- Las capturas con movimiento reducido de la home y de puntos de venta son idénticas píxel por píxel. En el resto aparecen diferencias de tiempos de carga (fotos lazy, hidratación) que también aparecen al capturar dos veces el mismo build sin cambios.
