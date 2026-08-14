# Logos de la red de distribuidores exclusivos

Acá van los logos de los 32 distribuidores exclusivos. **Hoy está vacío**: el
cliente todavía no los mandó (Manuel los pidió el 10/08/2026).

Mientras tanto la sección no se rompe — cada distribuidor sin logo se muestra
con su nombre compuesto como wordmark.

## Cómo sumar un logo

1. Guardar el archivo acá con el mismo `id` que tiene en
   [`src/data/distribuidoresExclusivos.ts`](../../../src/data/distribuidoresExclusivos.ts).
   Por ejemplo: `mendoglass.svg`.
2. Agregar el campo en esa data:
   `{ id: "mendoglass", ..., logo: "/logos/distribuidores/mendoglass.svg" }`

No hay que tocar el componente. Se pueden ir sumando de a uno: los que tengan
logo lo muestran, los que no, siguen con el nombre.

## Qué formato pedir

- **SVG** siempre que se pueda. Si sólo hay PNG, que sea con fondo transparente
  y al menos 400 px de ancho.
- **Una sola tinta, o el logo a color.** La franja los muestra en gris y les
  devuelve el color en hover, así que un logo blanco sobre fondo blanco
  desaparece: pedir la versión positiva, para fondo claro.
- Recortado al contenido, sin margen blanco alrededor — si el archivo trae
  aire de sobra, el logo se ve más chico que los de al lado.
