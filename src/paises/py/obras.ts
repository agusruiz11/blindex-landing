import type { Obra } from "../tipos";

// Paraguay no muestra obras: las que tiene su sitio actual son las de
// Argentina. Si la marca manda obras de Paraguay, van acá y se suma
// "obras" a sitio.home y "nuestrasObras" a sitio.paginas.
export const obras: Obra[] = [];
export const obrasDestacadas = obras.filter((o) => o.destacada);
