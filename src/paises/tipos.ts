// Tipos del contenido de cada país. Los datos de cada uno viven en
// src/paises/<pais>/ y se eligen al compilar con PAIS (ver next.config.mjs).
// Los comentarios de cada campo vienen de cuando el contenido era sólo de
// Argentina; lo que es propio de un país va en su carpeta.

export type Boletin = {
  id: string;
  titulo: string;
  pdf: string;
};

export type VideoCapacitacion = {
  id: string;
  titulo: string;
  descripcion?: string;
  youtubeId: string;
};

export type ModuloCapacitacion = {
  id: string;
  titulo: string;
  descripcion: string;
  videoUrl: string;
};

export type DistribuidorExclusivo = {
  id: string;
  /** Nombre comercial, para mostrar. */
  nombre: string;
  /** Razón social textual como la mandó el cliente. No editar. */
  razonSocial: string;
  /** Ruta en /public/logos/distribuidores. Sin esto, se muestra el nombre. */
  logo?: string;
  /** Sitio web o perfil de Instagram (URL completa). Sin esto, la ficha no linkea. */
  web?: string;
};

export type Nota = {
  id: string;
  titulo: string;
  resumen: string;
  parrafos: string[];
};

export type Obra = {
  id: string;
  nombre: string;
  img: string;
  /** Se muestra en la home. El resto vive en /nuestras-obras. */
  destacada?: boolean;
};

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
  /** Línea a la que pertenece, en los países que separan productos por línea (Paraguay). */
  linea?: LineaId;
  /** Fichas y folletos propios del producto. Sin esto, la ficha muestra los boletines generales. */
  documentos?: { titulo: string; pdf: string }[];
};

export type PuntoDeVenta = {
  id: string;
  nombre: string;
  direccion: string;
  localidad: string;
  provincia: string;
  lat: number;
  lng: number;
  /** Formato wa.me: sólo dígitos, con país (549...), sin + ni espacios. */
  whatsapp?: string;
  telefono?: string;
  web?: string;
  /** Usuario de Instagram, sin @. */
  instagram?: string;
  /** "Punto de venta Select" — la red recomendada por la marca. */
  select?: boolean;
  /** Líneas que vende, en los países que separan la red por línea (Paraguay). */
  lineas?: LineaId[];
};


export type Enlace = { href: string; label: string };

/** Líneas de producto. Hoy sólo Paraguay separa productos y puntos de venta así. */
export type LineaId = "laminado" | "templado";

export type Linea = {
  id: LineaId;
  nombre: string;
  /** Una línea para explicar para qué sirve y en qué se diferencia de la otra. */
  bajada: string;
  usos: string[];
};

/** Secciones de la home, en el orden en que se muestran. */
export type SeccionHome =
  | "hero"
  | "porQue"
  | "productos"
  | "productoDestacado"
  | "autenticidad"
  | "redDistribuidores"
  | "puntos"
  | "obras"
  | "elegiTuVidrio"
  | "boletines"
  | "ctaPuntos";

/** Páginas que no todos los países tienen. Las que faltan responden 404. */
export type PaginaOpcional =
  | "contacto"
  | "nuestrasObras"
  | "asesoramiento"
  | "capacitaciones"
  | "capacitacionOnline";

/** Textos y datos generales del sitio de cada país (src/paises/<pais>/sitio.ts). */
export type Sitio = {
  /** Dominio final, con https y www. Base de metadata y de los mails. */
  url: string;
  /** Atributo lang del <html>. */
  idioma: string;
  /** Locale de Open Graph. */
  locale: string;
  /** Casilla que recibe los formularios si el servidor no define CONTACT_TO. */
  mailContacto: string;
  /** Meta description de la home. */
  descripcion: string;
  /** Descripción al compartir el link (Open Graph). */
  descripcionCompartir: string;
  menu: Enlace[];
  home: SeccionHome[];
  paginas: PaginaOpcional[];
  /**
   * Cómo se llama la división del país en los puntos de venta (el campo
   * `provincia` de cada punto): provincia en Argentina, departamento en
   * Paraguay.
   */
  region: { singular: string; plural: string; todas: string };
  /** Bajada de la sección de puntos de venta de la home. */
  puntosBajada: (puntos: number, regiones: number) => string;
  /** Líneas de producto. Sin esto, los productos van en una sola grilla. */
  lineas?: Linea[];
  hero: {
    chip: string;
    bajada: string;
    /** Segundo botón, al lado de "Encontrá tu punto de venta". */
    ctaSecundario: Enlace & { evento: string };
  };
  /** Las tres razones de "¿Por qué Blindex?", en orden: seguridad, trayectoria, respaldo. */
  pilares: { title: string; text: string }[];
  ctaPuntos: string;
  footer: {
    bajada: string;
    legal: string;
    /** Columnas de links. La de productos se arma sola con los productos. */
    columnas: { title: string; items: Enlace[] }[];
  };
};
