/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  // NOTA: "Elegí tu vidrio" es BLOQUEANTE antes del cambio de DNS. Hoy el
  // botón de la home apunta provisoriamente al WordPress. La copia completa
  // está bajada en assets-fuente/elegituvidrio-mirror-2026-08-03 (575 MB,
  // fuera de git). Para migrarla:
  //   1. Recomprimir los 9 videos con scripts/elegituvidrio-videos.sh
  //      (6 de ellos pesan entre 80 y 114 MB; a 720p quedan en 5 a 10 MB).
  //   2. Copiar la carpeta a public/elegituvidrio.
  //   3. Agregar <base href="/elegituvidrio/"> en el <head> de cada HTML del
  //      mirror: la app usa rutas relativas y Next redirige "/elegituvidrio/"
  //      a "/elegituvidrio" (sin barra), con lo que css/ y js/ se perderían.
  //   4. Sumar el rewrite:
  //      async rewrites() {
  //        return [{ source: "/elegituvidrio", destination: "/elegituvidrio/index.html" }];
  //      }
  //   5. Volver el botón de EligeTuVidrio.tsx a href="/elegituvidrio/".
  // Ver docs/elegi-tu-vidrio.md
};

export default nextConfig;
