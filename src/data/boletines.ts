// ─────────────────────────────────────────────────────────────────────────
// BOLETINES TÉCNICOS — data real de blindex.com.ar/asesoramiento/
//
// Los PDFs ya están descargados en /public/docs: no dependen más del dominio
// viejo. En el sitio actual /boletines/ y /asesoramiento/ son la MISMA página
// duplicada; acá quedan unificadas.
//
// El texto de las notas técnicas vive en data/notas.ts, ya volcado.
//
// ⚠️ Un PDF del sitio actual está roto en producción: el link a
// "Blindex, Blindex Solar y Blindex Antirrobo"
// (wp-content/uploads/2017/06/Blindex.Junio17_altaOUT2con_Energy.pdf)
// devuelve 404. Queda fuera hasta que el cliente lo reponga.
// ─────────────────────────────────────────────────────────────────────────
export type Boletin = {
  id: string;
  titulo: string;
  pdf: string;
};

const DOCS = "/docs";

export const boletines: Boletin[] = [
  { id: "vidrios-de-seguridad", titulo: "Vidrios de Seguridad", pdf: `${DOCS}/vidrios-de-seguridad.pdf` },
  { id: "ley-de-vidrios-seguros", titulo: "Ley de Vidrios Seguros", pdf: `${DOCS}/ley-de-vidrios-seguros.pdf` },
  { id: "guia-para-especificar-vidrios", titulo: "Guía para Especificar Vidrios", pdf: `${DOCS}/guia-para-especificar-vidrios.pdf` },
  { id: "10-conceptos-para-seleccionar-vidrios", titulo: "10 Conceptos para Seleccionar Vidrios", pdf: `${DOCS}/10-conceptos-para-seleccionar-vidrios.pdf` },
  { id: "control-del-ruido", titulo: "Control del Ruido", pdf: `${DOCS}/control-del-ruido.pdf` },
  { id: "vidriado-de-techos-transparentes", titulo: "Vidriado de Techos Transparentes", pdf: `${DOCS}/vidriado-de-techos-transparentes.pdf` },
  { id: "como-se-fabrica-blindex-laminado", titulo: "Cómo se fabrica Blindex Laminado", pdf: `${DOCS}/como-se-fabrica-blindex-laminado.pdf` },
  { id: "folleto-blindex-2017", titulo: "Folleto institucional Blindex", pdf: `${DOCS}/folleto-blindex-2017.pdf` },
];
