// PLACEHOLDER — reemplazar por los cursos reales y sus video IDs (YouTube/Vimeo unlisted)
export type ModuloCapacitacion = {
  id: string;
  titulo: string;
  descripcion: string;
  videoUrl: string;
};

export const modulosCapacitacion: ModuloCapacitacion[] = [
  {
    id: "instalacion-segura",
    titulo: "Módulo 1 — Instalación segura de vidrio Blindex",
    descripcion:
      "Buenas prácticas de manipulación, colocación y sellado para vidrio templado y laminado Blindex en obra.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    id: "identificacion-original",
    titulo: "Módulo 2 — Cómo identificar un Blindex original",
    descripcion:
      "Marcado, documentación y controles de calidad que distinguen al vidrio Blindex del vidrio importado sin respaldo.",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];
