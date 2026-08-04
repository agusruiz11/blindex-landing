// ─────────────────────────────────────────────────────────────────────────
// OBRAS — data real de blindex.com.ar/nuestras-obras/ (relevado 31/07/2026)
//
// En el sitio actual estas 25 obras están publicadas pero NO son alcanzables
// desde el menú, y cada ficha tiene sólo el título. Son el activo de marca
// más desaprovechado que tienen: Blindex está en el Congreso y en Ezeiza.
//
// Las imágenes ya están descargadas del WordPress y convertidas a WebP en
// /public/img/obras (8.4 MB → 3.1 MB). Ya no dependen del dominio viejo.
//
// ⚠️ PENDIENTE: falta ubicación, año, producto usado y estudio de
// arquitectura. Está pedido al cliente junto con los créditos de fotografía.
// `destacada` es criterio nuestro para la home, no del cliente.
// ─────────────────────────────────────────────────────────────────────────
export type Obra = {
  id: string;
  nombre: string;
  img: string;
  /** Se muestra en la home. El resto vive en /nuestras-obras. */
  destacada?: boolean;
};

const BASE = "/img/obras";

export const obras: Obra[] = [
  { id: "congreso-de-la-nacion", nombre: "Congreso de la Nación", img: `${BASE}/congreso-de-la-nacion.webp`, destacada: true },
  { id: "aeropuerto-ezeiza", nombre: "Aeropuerto Ezeiza", img: `${BASE}/aeropuerto-ezeiza.webp`, destacada: true },
  { id: "cancilleria", nombre: "Cancillería", img: `${BASE}/cancilleria.webp`, destacada: true },
  { id: "banco-central", nombre: "Banco Central", img: `${BASE}/banco-central.webp`, destacada: true },
  { id: "parque-de-la-memoria", nombre: "Parque de la Memoria", img: `${BASE}/parque-de-la-memoria.webp`, destacada: true },
  { id: "le-parc-alcorta", nombre: "Le Parc Alcorta", img: `${BASE}/le-parc-alcorta.webp`, destacada: true },
  { id: "torres-el-faro", nombre: "Torres El Faro", img: `${BASE}/torres-el-faro.webp` },
  { id: "sheraton-pilar", nombre: "Sheraton Pilar", img: `${BASE}/sheraton-pilar.webp` },
  { id: "consultatio-torre-bbva", nombre: "Consultatio Torre BBVA", img: `${BASE}/consultatio-torre-bbva.webp` },
  { id: "madero-harobour", nombre: "Madero Harbour", img: `${BASE}/madero-harobour.webp` },
  { id: "banco-ciudad", nombre: "Banco Ciudad", img: `${BASE}/banco-ciudad.webp` },
  { id: "banco-galicia", nombre: "Banco Galicia", img: `${BASE}/banco-galicia.webp` },
  { id: "banco-supervielle", nombre: "Banco Supervielle", img: `${BASE}/banco-supervielle.webp` },
  { id: "legislatura-de-la-plata", nombre: "Legislatura de La Plata", img: `${BASE}/legislatura-de-la-plata.webp` },
  { id: "torre-santiago-del-estero", nombre: "Torre Santiago del Estero", img: `${BASE}/torre-santiago-del-estero.webp` },
  { id: "centro-empresarial-urbano", nombre: "Centro Empresarial Urbano", img: `${BASE}/centro-empresarial-urbano.webp` },
  { id: "terrazas-del-yacht", nombre: "Terrazas del Yacht", img: `${BASE}/terrazas-del-yacht.webp` },
  { id: "torre-union", nombre: "Torre Unión", img: `${BASE}/torre-union.webp` },
  { id: "edificio-libertador", nombre: "Edificio Libertador", img: `${BASE}/edificio-libertador.webp` },
  { id: "edificio-quilmes", nombre: "Edificio Quilmes", img: `${BASE}/edificio-quilmes.webp` },
  { id: "sancor-sunchales", nombre: "Sancor Sunchales", img: `${BASE}/sancor-sunchales.webp` },
  { id: "la-segunda", nombre: "La Segunda", img: `${BASE}/la-segunda.webp` },
  { id: "mulieris", nombre: "Mulieris", img: `${BASE}/mulieris.webp` },
  { id: "bellini", nombre: "Bellini", img: `${BASE}/bellini.webp` },
  { id: "dique-4", nombre: "Dique 4", img: `${BASE}/dique-4.webp` },
];

export const obrasDestacadas = obras.filter((o) => o.destacada);
