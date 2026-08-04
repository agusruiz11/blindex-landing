// ─────────────────────────────────────────────────────────────────────────
// LÍNEAS DE PRODUCTO — copy real de blindex.com.ar/product/* (31/07/2026)
//
// Son cinco, confirmadas contra el sitemap del sitio actual.
//
// Colores y claims salen del manual de marca: Solar naranja "Máximo Confort",
// Anti|Robo azul "Máxima Protección", Energy verde "Máxima Aislación".
// Laminado usa la marca madre y su claim "Seguridad para tu hogar".
// Acústico no figura en el manual — falta su lockup y su color oficial.
// ─────────────────────────────────────────────────────────────────────────
export type Producto = {
  id: string;
  nombre: string;
  /** Una línea para las cards de la home. */
  claim: string;
  descripcion: string;
  beneficios: string[];
  /** Color de la línea según el manual. Laminado usa la marca madre. */
  acento?: "solar" | "acustico" | "antirrobo" | "energy";
  /** Lockup oficial de la sub-marca, extraído de los .ai del manual. */
  logo?: string;
  /**
   * Altura del lockup en pantalla. No es la misma para todos: Solar, Anti|Robo
   * y Energy traen el claim en una segunda línea, y Acústico no. A igual
   * altura total, el "BLINDEX" de Acústico saldría al doble de tamaño, así que
   * va a la mitad para que el cuadrado rojo mida lo mismo en los cuatro.
   */
  logoClase?: string;
  /** El claim propio de cada línea, según el manual. */
  claimMarca?: string;
  /** Videos de producto ya publicados en el sitio actual. */
  video?: { src: string; titulo: string }[];
  urlActual: string;
};

// Ya descargados y recomprimidos en /public/video (52 MB → 16 MB).
const V = "/video";

export const productos: Producto[] = [
  {
    id: "blindex-laminado",
    nombre: "Blindex Laminado",
    claim: "El vidrio que evita accidentes.",
    descripcion:
      "La solución ideal para cerramientos seguros. Se fabrica uniendo dos láminas de vidrio float a una interlámina plástica de alta elasticidad (PVB). Su gran resistencia y su rotura segura evitan accidentes ante un impacto. En todas las áreas vidriadas de riesgo o susceptibles de impacto humano, es imprescindible usar Blindex Laminado.",
    beneficios: [
      "Evita accidentes domésticos con vidrio.",
      "Ante un impacto, contiene a la persona u objeto que golpeó contra el vidrio.",
      "Si se rompe, los fragmentos quedan adheridos a la interlámina.",
      "Filtra el 99% de la radiación UV.",
    ],
    // Los videos comparativos de rotura son el contenido más persuasivo que
    // tiene la marca y hoy está enterrado en una página interna.
    video: [
      { src: `${V}/rotura-vidrio-comun.mp4`, titulo: "Rotura de vidrio común" },
      { src: `${V}/rotura-blindex-laminado-3-3.mp4`, titulo: "Rotura de Blindex Laminado 3+3" },
    ],
    urlActual: "https://www.blindex.com.ar/product/blindex-laminado/",
  },
  {
    id: "blindex-solar",
    nombre: "Blindex Solar",
    claim: "Menos calor, menos encandilamiento.",
    descripcion:
      "La línea de vidrios laminados de control solar, diseñada para las superficies vidriadas que reciben radiación solar directa. Reduce sustancialmente el ingreso de calor radiante del sol y la excesiva luminosidad. Su inclusión en una unidad de Doble Vidriado Hermético mejora aún más el confort y la aislación térmica.",
    beneficios: [
      "Reduce hasta un 70% el ingreso de calor radiante del sol a través del vidrio.",
      "Permite ahorrar energía y achicar los equipos de refrigeración a instalar.",
      "Reduce el deslumbramiento sin resignar luz natural.",
      "Suma todos los beneficios de seguridad de un Blindex Laminado.",
    ],
    acento: "solar",
    logo: "/logos/blindex-solar.svg",
    logoClase: "h-16 w-auto sm:h-20",
    claimMarca: "Máximo Confort",
    // El video de Solar que referencia el sitio actual devuelve 404 en su
    // propio servidor. Pedido al cliente.
    urlActual: "https://www.blindex.com.ar/product/blindex-solar/",
  },
  {
    id: "blindex-antirrobo",
    nombre: "Blindex Anti | Robo",
    claim: "Resistencia ante la intrusión.",
    descripcion:
      "Un vidrio anti intrusión compuesto por dos vidrios float de 5 mm unidos a una interlámina plástica de alta elasticidad, cuatro veces más gruesa que la de un Blindex Laminado estándar (1.52 mm contra 0.38 mm). Extraordinaria resistencia ante intentos de intrusión o vandalismo.",
    beneficios: [
      "Mayor resistencia ante impactos sucesivos con elementos contundentes.",
      "Aumenta el nivel de aislación acústica.",
      "Filtra el 99% de la radiación UV, protegiendo tapizados, muebles y alfombras.",
      "Medidas hasta 2500 × 3600 mm, espesor 5+5 con PVB de 1.52 mm.",
    ],
    acento: "antirrobo",
    logo: "/logos/blindex-antirrobo.svg",
    logoClase: "h-16 w-auto sm:h-20",
    claimMarca: "Máxima Protección",
    urlActual: "https://www.blindex.com.ar/product/blindex-antirrobo/",
  },
  {
    id: "blindex-acustico",
    nombre: "Blindex Acústico",
    claim: "El ruido se queda afuera.",
    descripcion:
      "La solución para lograr una reducción significativa del ruido a través del vidrio. Se fabrica con una interlámina de polivinilbutiral acústica (PVB SC 0.76 mm), desarrollada para eliminar las vibraciones de las ondas sonoras, y con vidrios asimétricos 3+5 mm para evitar coincidencias de frecuencias. Es de uso exclusivo en unidades de doble vidriado hermético (DVH).",
    beneficios: [
      "Reduce significativamente el ruido exterior.",
      "Rinde de forma óptima en unidades de DVH.",
      "Se combina con el resto de la línea Blindex según el clima.",
      "Suma los beneficios de seguridad del vidrio laminado.",
    ],
    acento: "acustico",
    // ⚠️ Este lockup no vino en el manual: se extrajo del .ai del WeTransfer
    // anterior y usa el rojo viejo de la marca. Pedir la versión actualizada.
    logo: "/logos/blindex-acustico.svg",
    logoClase: "h-8 w-auto sm:h-10",
    urlActual: "https://www.blindex.com.ar/product/blindex-acustico/",
  },
  {
    id: "blindex-energy",
    nombre: "Blindex Energy",
    claim: "Aislación térmica para proyectos exigentes.",
    descripcion:
      "La solución para los proyectos donde se requiere aumentar la aislación térmica del DVH y reducir aún más el Factor K. Se compone de un vidrio float incoloro laminado con un float Low-E, de baja emisividad, y fue desarrollado para usar exclusivamente en unidades de DVH.",
    beneficios: [
      "Reduce considerablemente el Factor K (transmitancia térmica) del DVH.",
      "Genera beneficios tanto en climas fríos como cálidos.",
      "En climas cálidos se combina con Blindex Solar del lado externo.",
      "Mejora la eficiencia energética de toda la envolvente.",
    ],
    acento: "energy",
    logo: "/logos/blindex-energy.svg",
    logoClase: "h-16 w-auto sm:h-20",
    claimMarca: "Máxima Aislación",
    urlActual: "https://www.blindex.com.ar/product/blindex-energy/",
  },
];
