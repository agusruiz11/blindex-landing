import type { Producto } from "../tipos";

// ─────────────────────────────────────────────────────────────────────────
// PRODUCTOS DE PARAGUAY, en dos líneas: laminado y templado.
//
// Texto tomado de blindex.com.py/product/* el 21/10/2026 (en la reunión de
// ese día se acordó tomar lo que está publicado y avanzar; la marca hace el
// doble chequeo de stock). Se ordenó y se sacaron guiones; los datos son los
// del sitio. Los ids son los slugs del sitio viejo, así /product/<id>
// redirige uno a uno (ver redirecciones.mjs).
//
// Los lockups y los videos de rotura son los mismos de Argentina.
//
// ⚠️ A CONFIRMAR CON LA MARCA (preguntas 3 y 5 del alcance):
//  · Laminado: el sitio cita la Norma IRAM 12595 y la Ley de Vidrio de
//    Seguridad, que son argentinas. No se pasó.
//  · Solar Neutro Light: el sitio dice que cumple el Código de Edificación de
//    la Ciudad de Buenos Aires. No se pasó.
//  · Laminado dice "más del 94%" de filtro UV; Acústico y Antirrobo, 99%. En
//    Argentina, Laminado dice 99%. Se dejó lo que dice cada ficha.
//  · La ficha de Accesorios del sitio muestra por error el texto de Templado
//    Decorativo. Se armó con el texto de /accesorios/ y las cuatro fichas de
//    accesorios (frenos, puertas automáticas, barras antipánico, herrajes).
// ─────────────────────────────────────────────────────────────────────────

const V = "/video";
const DOCS = "/py/docs";
const URL = "https://www.blindex.com.py/product";

export const productos: Producto[] = [
  // ── Laminado ──────────────────────────────────────────────────────────
  {
    id: "blindex-laminado",
    linea: "laminado",
    nombre: "Blindex Laminado",
    claim: "El vidrio que evita accidentes.",
    descripcion:
      "La solución ideal para cerramientos seguros. Se fabrica uniendo dos láminas de vidrio float a una interlámina plástica de alta elasticidad (PVB). Su gran resistencia y su rotura segura evitan accidentes con vidrio ante un impacto. En todas las áreas vidriadas de riesgo o susceptibles de impacto humano, es imprescindible usar Blindex Laminado.",
    beneficios: [
      "Evita accidentes domésticos con vidrio.",
      "Ante un impacto, contiene a la persona u objeto que golpeó contra el vidrio.",
      "Si se rompe, los trozos quedan adheridos a la lámina de PVB y el paño mantiene su visibilidad.",
      "Aumenta el nivel de aislación acústica.",
      "Filtra más del 94% de la radiación UV y evita la decoloración de muebles y tapizados.",
    ],
    video: [
      { src: `${V}/rotura-vidrio-comun.mp4`, titulo: "Rotura de vidrio común" },
      { src: `${V}/rotura-blindex-laminado-3-3.mp4`, titulo: "Rotura de Blindex Laminado 3+3" },
    ],
    documentos: [{ titulo: "Blindex Laminado", pdf: `${DOCS}/blindex-laminado.pdf` }],
    urlActual: `${URL}/blindex-laminado/`,
  },
  {
    id: "blindex-antirrobo",
    linea: "laminado",
    nombre: "Blindex Laminado Antirrobo",
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
    documentos: [{ titulo: "Folleto Blindex Anti | Robo", pdf: `${DOCS}/blindex-antirrobo.pdf` }],
    urlActual: `${URL}/blindex-antirrobo/`,
  },
  {
    id: "blindex-laminado-solar",
    linea: "laminado",
    nombre: "Blindex Laminado Solar",
    claim: "Menos calor, menos encandilamiento.",
    descripcion:
      "La línea de vidrios laminados de control solar, diseñada para las superficies vidriadas que reciben radiación solar directa. Reduce el ingreso de calor radiante del sol y la excesiva luminosidad. Su inclusión en una unidad de Doble Vidriado Hermético mejora aún más el confort y la aislación térmica.",
    beneficios: [
      "Reduce hasta un 70% el ingreso de calor radiante del sol a través del vidrio.",
      "Permite ahorrar energía y achicar los equipos de refrigeración a instalar.",
      "Reduce el ingreso excesivo de luz y el deslumbramiento.",
      "En tonos gris y azul reflectivos, para edificios comerciales, y neutro y verde, para viviendas.",
    ],
    acento: "solar",
    logo: "/logos/blindex-solar.svg",
    logoClase: "h-16 w-auto sm:h-20",
    claimMarca: "Máximo Confort",
    documentos: [{ titulo: "Folleto Blindex Solar", pdf: `${DOCS}/blindex-laminado-solar.pdf` }],
    urlActual: `${URL}/blindex-laminado-solar/`,
  },
  {
    id: "blindex-solar-neutro-light",
    linea: "laminado",
    nombre: "Blindex Solar Neutro Light",
    claim: "Control solar en un tono neutro, sin reflejos.",
    descripcion:
      "Un vidrio sutilmente coloreado en su masa con óxidos metálicos, producido en Argentina por VASA y desarrollado en los laboratorios de NSG Pilkington, en Inglaterra. Fue pensado para viviendas, cuidando su estética y sus prestaciones térmicas: su tono neutro y sin reflejos se incorpora fácilmente a las ventanas de hoy. Lo recomendado es usarlo en paneles de DVH.",
    beneficios: [
      "Reduce más del 50% del ingreso de calor radiante del sol a través del vidrio.",
      "Deja pasar más de un 15% más de luz natural que otros vidrios de rendimiento térmico similar.",
      "Permite ahorrar energía al reducir la carga de los equipos de aire acondicionado.",
      "Se puede templar: así es vidrio de seguridad para grandes paños y áreas de impacto humano.",
    ],
    acento: "solar",
    // Misma ficha que usa Argentina en el zócalo de producto destacado.
    documentos: [{ titulo: "Ficha Solar Neutro Light", pdf: "/docs/blindex-solar-neutro-light.pdf" }],
    urlActual: `${URL}/blindex-solar-neutro-light/`,
  },
  {
    id: "blindex-acustico",
    linea: "laminado",
    nombre: "Blindex Acústico",
    claim: "El ruido se queda afuera.",
    descripcion:
      "La solución para lograr una reducción significativa del ruido a través del vidrio. Se fabrica con una interlámina de polivinilbutiral acústica (PVB SC 0.76 mm), desarrollada para eliminar las vibraciones de las ondas sonoras, y con vidrios asimétricos 3+5 mm para evitar coincidencias de frecuencias. Es de uso exclusivo en unidades de doble vidriado hermético (DVH), donde logra su mejor rendimiento.",
    beneficios: [
      "Aumenta 3 dB la aislación acústica frente a un vidrio laminado estándar.",
      "Evita accidentes domésticos con vidrio ante el impacto humano.",
      "Filtra más del 99% de la radiación UV, protegiendo tapizados, muebles y alfombras.",
      "Se combina con el resto de la línea Blindex según el clima.",
    ],
    acento: "acustico",
    logo: "/logos/blindex-acustico.svg",
    logoClase: "h-8 w-auto sm:h-10",
    documentos: [{ titulo: "Folleto Blindex 2023", pdf: `${DOCS}/folleto-blindex-2023.pdf` }],
    urlActual: `${URL}/blindex-acustico/`,
  },
  {
    id: "blindex-energy",
    linea: "laminado",
    nombre: "Blindex Energy",
    claim: "Aislación térmica para proyectos exigentes.",
    descripcion:
      "La solución para los proyectos donde se requiere aumentar la aislación térmica del DVH y reducir aún más el Factor K. Se compone de un vidrio float incoloro laminado con un float Low-E, de baja emisividad, y fue desarrollado para usar exclusivamente en unidades de DVH. En climas cálidos, el DVH tiene que llevar un Blindex Solar del lado externo para evitar el ingreso excesivo de calor.",
    beneficios: [
      "Reduce la transmitancia térmica del DVH un 70% frente a un vidrio float incoloro común.",
      "Logra una aislación térmica similar a la de un triple vidriado hermético.",
      "Es estéticamente incoloro.",
      "Combinado con Blindex Solar, filtra todavía más calor solar.",
    ],
    acento: "energy",
    logo: "/logos/blindex-energy.svg",
    logoClase: "h-16 w-auto sm:h-20",
    claimMarca: "Máxima Aislación",
    documentos: [{ titulo: "Blindex Energy", pdf: `${DOCS}/blindex-energy.pdf` }],
    urlActual: `${URL}/blindex-energy/`,
  },

  // ── Templado ──────────────────────────────────────────────────────────
  {
    id: "blindex-templado",
    linea: "templado",
    nombre: "Blindex Templado",
    claim: "Entre 4 y 5 veces más resistente que el vidrio común.",
    descripcion:
      "Ante un impacto, el vidrio templado es difícil de romper: es entre 4 y 5 veces más resistente que un vidrio crudo, también a altas temperaturas. Si llega a romperse, lo hace en pequeños fragmentos sin aristas filosas, evitando heridas cortantes. Se usa en fachadas, puertas, ventanas, divisores, muebles, mamparas de baño y puertas deslizantes.",
    beneficios: [
      "Resistencia mecánica: ante un impacto es difícil de romper.",
      "Resistencia al choque térmico: evita la rotura espontánea en vidrios con mucha radiación solar.",
      "Si se rompe, lo hace en pequeños fragmentos sin aristas filosas.",
      "Espesores de 4, 5, 6, 8, 10, 12, 15 y 19 mm.",
    ],
    documentos: [{ titulo: "Blindex Templado", pdf: `${DOCS}/blindex-templado.pdf` }],
    urlActual: `${URL}/blindex-templado/`,
  },
  {
    id: "blindex-templado-solar",
    linea: "templado",
    nombre: "Blindex Templado Solar",
    claim: "Templado para vidrios con mucho sol.",
    descripcion:
      "En vidrios expuestos a gran radiación solar es necesario usar vidrio templado, para evitar la rotura espontánea por stress térmico. El vidrio templado es entre 4 y 5 veces más resistente que el vidrio común a altas temperaturas.",
    beneficios: [
      "Evita la rotura espontánea por stress térmico.",
      "Entre 4 y 5 veces más resistente que el vidrio común a altas temperaturas.",
      "Espesores de 4, 6, 8 y 10 mm.",
    ],
    acento: "solar",
    urlActual: `${URL}/blindex-templado-solar/`,
  },
  {
    id: "blindex-box",
    linea: "templado",
    nombre: "Blindex Templado Box",
    claim: "Mamparas de baño de vidrio templado.",
    descripcion:
      "El sistema de box de baño de Blindex combina vidrio templado Blindex, kit de herrajes, perfiles y artículos exclusivos, para un baño más seguro, práctico y elegante. Hay tres modelos: Classic y Aluminium, con perfiles de aluminio (redondeado o recto en la parte de arriba), y Chromus, en aluminio niquelado con terminación premium.",
    beneficios: [
      "Tres modelos: Classic, Aluminium y Chromus.",
      "Kit completo: vidrio templado, herrajes y perfiles.",
      "Chromus suma trabas de seguridad en el borde superior de las puertas, que evitan su caída.",
      "Film de seguridad opcional, instalado en fábrica: si el vidrio se rompe, mantiene unidos los fragmentos.",
    ],
    documentos: [{ titulo: "Folleto Box Blindex", pdf: `${DOCS}/folleto-box-blindex.pdf` }],
    urlActual: `${URL}/blindex-box/`,
  },
  {
    id: "blindex-door-lite",
    linea: "templado",
    nombre: "Blindex Roll Door y Roll Door Lite",
    claim: "Puertas corredizas para cerrar y dividir espacios.",
    descripcion:
      "Un sistema de puertas corredizas de vidrio para que los ambientes sean más prácticos. Sus ruedas ajustables reparten el peso y permiten corregir la altura y la inclinación, compensando imperfecciones de paredes y pisos. Roll Door sirve para cerrar y dividir espacios grandes, como quinchos, gimnasios y salones. Roll Door Lite, con perfiles más chicos y finos, es para espacios medianos y chicos, como ventanas.",
    beneficios: [
      "Roll Door: hasta 260 kg por módulo y 4,40 m de altura, sin límite de ancho por ser modular.",
      "Roll Door Lite: hasta 50 kg por módulo.",
      "Sin tornillos a la vista, con perfiles de aluminio y roldanas de acero inoxidable.",
      "Guía de seguridad que limpia los rieles y evita que la puerta se descarrile.",
    ],
    documentos: [
      { titulo: "Folleto Roll Door", pdf: `${DOCS}/roll-door-folleto.pdf` },
      { titulo: "Manual de instalación Roll Door", pdf: `${DOCS}/roll-door-manual-de-instalacion.pdf` },
    ],
    urlActual: `${URL}/blindex-door-lite/`,
  },
  {
    id: "blindex-decorativos-templados",
    linea: "templado",
    nombre: "Blindex Templado Decorativo",
    claim: "Vidrios con textura, templados.",
    descripcion:
      "Vidrios impresos con un dibujo o textura decorativa en una o ambas caras, que impide la visión clara y deja pasar la luz en forma difusa. Según el diseño, dan distintos grados de translucidez e intimidad. Son templados: ante un impacto se rompen de forma segura, evitando accidentes con vidrio.",
    beneficios: [
      "Dan intimidad sin quitar luz.",
      "Diseños Acanalado Ancho, Austral, Morisco, Yacaré, Rombo, Pacífico, Stipolite y Dreamline.",
      "Espesores de 4 a 10 mm según el diseño.",
      "Templados: ante un impacto se rompen de forma segura.",
    ],
    urlActual: `${URL}/blindex-decorativos-templados/`,
  },
  {
    id: "blindex-accesorios",
    linea: "templado",
    nombre: "Blindex Accesorios",
    claim: "Herrajes, frenos y puertas para instalar vidrio Blindex.",
    descripcion:
      "La línea de accesorios Blindex reúne herrajes, frenos, barras antipánico y puertas automáticas y deslizantes para la instalación de vidrios Blindex.",
    beneficios: [
      "Frenos hidráulicos de piso y frenos aéreos.",
      "Puertas automáticas simples o dobles, con rieles de 4300 y 6100 mm.",
      "Barras antipánico para puertas de una o dos hojas, de hasta 1200 mm de ancho.",
      "Kits para puertas batientes, bisagras, cerraduras y fechos, en niquelado o marrón.",
    ],
    urlActual: "https://www.blindex.com.py/accesorios/",
  },
];
