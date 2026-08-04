// ─────────────────────────────────────────────────────────────────────────
// CAPACITACIÓN ONLINE — pública, ya existe en blindex.com.ar/capacitaciones/
//
// OJO, no confundir con /capacitaciones-blindex (ruta oculta): eso es el
// circuito de CERTIFICACIÓN de vidrieros, que es otro proyecto y va cotizado
// aparte (ver docs/reunion-inicial.md).
//
// Esto es lo que la marca ya publica hoy: tres videos abiertos, sin
// formulario ni certificado. Se migra tal cual.
//
// ⚠️ Los títulos en el sitio actual son "Blindex 1 / 2 / 3". Hay que pedirle
// al cliente los títulos reales y una descripción de cada uno.
// ─────────────────────────────────────────────────────────────────────────
export type VideoCapacitacion = {
  id: string;
  titulo: string;
  descripcion?: string;
  youtubeId: string;
};

export const capacitacionOnline: VideoCapacitacion[] = [
  { id: "blindex-1", titulo: "Blindex 1", youtubeId: "qkTy8peYKrU" },
  { id: "blindex-2", titulo: "Blindex 2", youtubeId: "arzJ9zokr1I" },
  { id: "blindex-3", titulo: "Blindex 3", youtubeId: "OlceapL4vxI" },
];
