/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  // NOTA: "Elegí tu vidrio" queda para más adelante. La copia completa del
  // WordPress está bajada en assets-fuente/elegituvidrio-mirror-2026-08-03
  // (553 MB, fuera de git). Cuando se retome, hay que mover la carpeta a
  // public/elegituvidrio, recomprimir los 9 videos y sumar este rewrite:
  //   { source: "/elegituvidrio", destination: "/elegituvidrio/index.html" }
  // Ver docs/elegi-tu-vidrio.md
};

export default nextConfig;
