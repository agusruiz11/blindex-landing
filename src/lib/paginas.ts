import { notFound } from "next/navigation";
import type { PaginaOpcional } from "@/paises/tipos";
import { sitio } from "@pais/sitio";

// Páginas que no todos los países tienen (sitio.paginas). Las rutas existen
// en el código para todos, así que cada una se corta acá con un 404 en el
// país que no la usa.

export const tienePagina = (p: PaginaOpcional) => sitio.paginas.includes(p);

/** Para usar al principio de la página: 404 si el país no la tiene. */
export function exigirPagina(p: PaginaOpcional) {
  if (!tienePagina(p)) notFound();
}
