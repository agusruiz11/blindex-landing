/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  // "Elegí tu vidrio" es una app estática aparte (Bootstrap 4 + jQuery) que
  // vive copiada en public/elegituvidrio, con la misma URL que tenía en el
  // WordPress. Next no sirve el index.html de una carpeta de public/ por sí
  // solo, y además redirige "/elegituvidrio/" a "/elegituvidrio" (sin barra):
  // este rewrite resuelve lo primero y el <base href="/elegituvidrio/"> de
  // los HTML de la raíz de la carpeta resuelve lo segundo.
  // Ver docs/elegi-tu-vidrio.md
  // Redirecciones 301 desde las URLs del WordPress actual (sitemap relevado
  // el 23/09/2026: 94 URLs). Sin esto, el día del cambio de DNS cada link
  // externo e indexado por Google daría 404. Fuente y tabla comentada en
  // docs/redirecciones-wordpress.md. Sin barra final: Next ya normaliza
  // "/x/" a "/x" antes de evaluar estas reglas.
  async redirects() {
    return [
      // Productos: los ids coinciden uno a uno.
      { source: "/productos", destination: "/#productos", permanent: true },
      { source: "/product/:id", destination: "/productos/:id", permanent: true },

      // Puntos de venta: la página vieja por provincia pasa al buscador único.
      { source: "/distribuidores-certificados", destination: "/puntos-de-venta", permanent: true },
      { source: "/distribuidores/:path*", destination: "/puntos-de-venta", permanent: true },
      { source: "/pdv_cert/:provincia", destination: "/puntos-de-venta", permanent: true },
      { source: "/red-distribuidores-exclusivos-blindex", destination: "/#red-distribuidores", permanent: true },

      // Obras: no hay página por obra, van al listado.
      { source: "/works/:slug", destination: "/nuestras-obras", permanent: true },

      // Asesoramiento: /boletines/ y /asesoramiento/ eran la misma página.
      // Las 4 notas coinciden por id. Los 17 "boletines_tecnicos" viejos eran
      // páginas vacías (sólo título), van al listado.
      { source: "/boletines", destination: "/asesoramiento", permanent: true },
      { source: "/notes/:id", destination: "/asesoramiento/:id", permanent: true },
      { source: "/boletines_tecnicos/:slug", destination: "/asesoramiento", permanent: true },

      // Los 7 PDFs que el WordPress servía desde wp-content, por si están
      // linkeados desde afuera (catálogos, mails, sitios de distribuidores).
      { source: "/wp-content/uploads/2016/06/conceptosvidrios.pdf", destination: "/docs/10-conceptos-para-seleccionar-vidrios.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/06/controldelruido.pdf", destination: "/docs/control-del-ruido.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/06/guiaespecificarvidrios.pdf", destination: "/docs/guia-para-especificar-vidrios.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/06/leydevidrios.pdf", destination: "/docs/ley-de-vidrios-seguros.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/06/vidriadostechos.pdf", destination: "/docs/vidriado-de-techos-transparentes.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/06/vidriosseguridad.pdf", destination: "/docs/vidrios-de-seguridad.pdf", permanent: true },
      { source: "/wp-content/uploads/2016/07/Blindex.Junio17_altaOUT2con_Energy.pdf", destination: "/docs/folleto-blindex-2017.pdf", permanent: true },

      // Capacitaciones y contacto.
      { source: "/capacitaciones", destination: "/capacitacion-online", permanent: true },
      { source: "/contactenos", destination: "/contacto", permanent: true },

      // Renovate! es un programa de Ekoglass (renovación de ventanas con DVH).
      // Su landing y sus dos formularios de cotización van al sitio de Ekoglass.
      { source: "/renovate", destination: "https://www.ekoglass.com.ar/", permanent: true },
      { source: "/landing/:path*", destination: "https://www.ekoglass.com.ar/", permanent: true },
      { source: "/landing_1/:path*", destination: "https://www.ekoglass.com.ar/", permanent: true },

      // Secciones que no siguen en el sitio nuevo: eventos (frenado en 2023),
      // las 4 variantes viejas de la home, autor y categoría del blog.
      { source: "/eventos", destination: "/", permanent: true },
      { source: "/event/:slug", destination: "/", permanent: true },
      { source: "/inicio-video", destination: "/", permanent: true },
      { source: "/inicio-video-2", destination: "/", permanent: true },
      { source: "/inicio-video-3", destination: "/", permanent: true },
      { source: "/inicio-video-3-2", destination: "/", permanent: true },
      { source: "/author/:slug", destination: "/", permanent: true },
      { source: "/category/:slug", destination: "/", permanent: true },

      // "Casa interactiva" no es una app: es una página de texto (conceptos
      // básicos de vidrio) con el video "Blindex 1" embebido, el mismo que ya
      // está en /capacitacion-online. Va ahí.
      { source: "/casa-interactiva", destination: "/capacitacion-online", permanent: true },

      // Pendiente de decisión (ver docs/redirecciones-wordpress.md):
      // /terminos-y-condiciones no existe en el sitio nuevo. Va a la home
      // mientras se decide si se porta el texto.
      { source: "/terminos-y-condiciones", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/elegituvidrio", destination: "/elegituvidrio/index.html" },
    ];
  },
};

export default nextConfig;
