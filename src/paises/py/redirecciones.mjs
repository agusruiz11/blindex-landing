// Redirecciones y reescrituras de Paraguay. Las lee next.config.mjs al
// compilar con PAIS=py.

// Redirecciones 301 desde el WordPress de blindex.com.py (sitemap relevado
// el 21/10/2026). Sin barra final: Next ya normaliza "/x/" a "/x".
export const redirecciones = [
  // Productos: los ids son los slugs del sitio viejo. Las cuatro fichas de
  // accesorios van a la ficha única de Accesorios. Las reglas específicas van
  // antes que la general.
  { source: "/product/blindex-frenos", destination: "/productos/blindex-accesorios", permanent: true },
  { source: "/product/blindex-puertas-automaticas", destination: "/productos/blindex-accesorios", permanent: true },
  { source: "/product/blindex-barra-antipanico", destination: "/productos/blindex-accesorios", permanent: true },
  { source: "/product/blindex-herrajes", destination: "/productos/blindex-accesorios", permanent: true },
  { source: "/product", destination: "/#productos", permanent: true },
  { source: "/product/:id", destination: "/productos/:id", permanent: true },
  { source: "/productos", destination: "/#productos", permanent: true },
  { source: "/templados", destination: "/#productos-templado", permanent: true },
  { source: "/accesorios", destination: "/productos/blindex-accesorios", permanent: true },
  { source: "/aplicaciones", destination: "/#productos", permanent: true },
  { source: "/applications/:slug", destination: "/#productos", permanent: true },

  // Dónde comprar: las páginas por línea y por ciudad pasan al buscador, con
  // la línea ya elegida.
  { source: "/distribucion-laminado", destination: "/puntos-de-venta?linea=laminado", permanent: true },
  { source: "/laminados_d/:path*", destination: "/puntos-de-venta?linea=laminado", permanent: true },
  { source: "/distribucion-templado", destination: "/puntos-de-venta?linea=templado", permanent: true },
  { source: "/templado_d/:path*", destination: "/puntos-de-venta?linea=templado", permanent: true },
  { source: "/distribuidores-certificados", destination: "/puntos-de-venta", permanent: true },
  { source: "/distribuidores/:path*", destination: "/puntos-de-venta", permanent: true },
  { source: "/pdv_cert/:path*", destination: "/puntos-de-venta", permanent: true },

  // Secciones que no van en el sitio nuevo de Paraguay: obras (eran las de
  // Argentina), asesoramiento y boletines (pendientes de las normas de
  // Paraguay), contacto (sin formulario), eventos y casa interactiva.
  { source: "/nuestras-obras", destination: "/", permanent: true },
  { source: "/works/:slug", destination: "/", permanent: true },
  { source: "/asesoramiento", destination: "/", permanent: true },
  { source: "/boletines", destination: "/", permanent: true },
  { source: "/notes/:slug", destination: "/", permanent: true },
  { source: "/boletines_tecnicos/:slug", destination: "/", permanent: true },
  { source: "/contactenos", destination: "/puntos-de-venta", permanent: true },
  { source: "/eventos", destination: "/", permanent: true },
  { source: "/event/:slug", destination: "/", permanent: true },
  { source: "/casa-interactiva", destination: "/", permanent: true },
  { source: "/pre", destination: "/", permanent: true },
  { source: "/category/:slug", destination: "/", permanent: true },

  // "Elegí tu vidrio" no va en Paraguay, pero la carpeta public/elegituvidrio
  // viaja igual en el build: se corta acá para que no quede accesible.
  { source: "/elegituvidrio", destination: "/", permanent: false },
  { source: "/elegituvidrio/:path*", destination: "/", permanent: false },
];

export const reescrituras = [];
