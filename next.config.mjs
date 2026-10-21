// País del sitio, elegido al compilar: el contenido de cada uno vive en
// src/paises/<pais>/. Sin PAIS se compila Argentina, así el proyecto de
// Vercel y el paquete para RH Studio siguen igual que antes de la división.
//
// El alias @pais/* sale del tsconfig de cada país: tsconfig.json apunta a
// src/paises/ar y tsconfig.<pais>.json a la carpeta de ese país. Next usa
// ese mismo archivo para chequear tipos y para resolver los imports.
const PAISES = ["ar", "py"];
const PAIS = process.env.PAIS || "ar";
if (!PAISES.includes(PAIS)) {
  throw new Error(`PAIS="${PAIS}" no existe. Opciones: ${PAISES.join(", ")}.`);
}
const { redirecciones, reescrituras } = await import(
  `./src/paises/${PAIS}/redirecciones.mjs`
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build "standalone" para el servidor de RH Studio (VPS con cPanel, Node 20
  // corriendo con Passenger). Genera .next/standalone/server.js como archivo
  // de arranque, con sólo las dependencias que usa el sitio. Ver
  // scripts/empaquetar.sh y docs/entrega-rh.md.
  output: "standalone",
  typescript: {
    tsconfigPath: PAIS === "ar" ? "tsconfig.json" : `tsconfig.${PAIS}.json`,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  // Redirecciones desde el sitio viejo de cada país y reescrituras propias
  // (en Argentina, "Elegí tu vidrio"). Ver src/paises/<pais>/redirecciones.mjs.
  async redirects() {
    return redirecciones;
  },
  async rewrites() {
    return reescrituras;
  },
};

export default nextConfig;
