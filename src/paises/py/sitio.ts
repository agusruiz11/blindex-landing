import type { Sitio } from "../tipos";

// Textos y datos generales de Blindex Paraguay. Alcance acordado en la
// reunión del 21/10/2026 (ver "Paraguay - alcance y plan de trabajo.md"):
// productos en dos líneas, dónde comprar separado por línea, sin "Elegí tu
// vidrio", sin formulario de contacto y sin capacitaciones.
//
// ⚠️ Tono: se dejó el vos de Argentina. Está preguntado a la marca si en
// Paraguay va vos, tú o usted (su sitio actual mezcla "Escribe" y "Seguinos").
export const sitio: Sitio = {
  url: "https://www.blindex.com.py",
  idioma: "es-PY",
  locale: "es_PY",
  // Paraguay no tiene formularios (ver `paginas`): no recibe mails.
  mailContacto: "",

  descripcion:
    "Blindex, vidrio de seguridad en Paraguay. Línea laminado (laminado, antirrobo, control solar, acústico y Energy) y línea templado (templado, box de baño, Roll Door, decorativos y accesorios).",
  descripcionCompartir:
    "Vidrio de seguridad laminado y templado. Encontrá tu punto de venta Blindex en Paraguay.",

  menu: [
    { href: "/#productos-laminado", label: "Laminado" },
    { href: "/#productos-templado", label: "Templado" },
    { href: "/#por-que-blindex", label: "¿Por qué Blindex?" },
    { href: "/#autenticidad", label: "Exigí Blindex original" },
  ],

  // Sin producto destacado (es un pedido de Argentina), sin obras (las del
  // sitio de Paraguay son las de Argentina), sin Elegí tu vidrio y sin
  // boletines hasta resolver las normas de Paraguay. La franja de
  // distribuidores entra cuando estén los grupos de laminado y templado.
  home: ["hero", "porQue", "productos", "autenticidad", "puntos", "ctaPuntos"],
  paginas: [],
  region: { singular: "departamento", plural: "departamentos", todas: "Todos los departamentos" },
  puntosBajada: (puntos, regiones) =>
    `${puntos} puntos de venta en ${regiones} departamentos. Elegí la línea y tu departamento.`,

  lineas: [
    {
      id: "laminado",
      nombre: "Laminado",
      bajada:
        "Dos vidrios unidos por una lámina plástica. Si se rompe, los trozos quedan pegados a la lámina y el paño sigue en su lugar.",
      usos: ["Ventanas", "Barandas", "Techos", "Control solar", "Aislación acústica"],
    },
    {
      id: "templado",
      nombre: "Templado",
      bajada:
        "Un vidrio entre 4 y 5 veces más resistente que el común. Si se rompe, lo hace en pequeños fragmentos sin filo.",
      usos: ["Mamparas de baño", "Puertas", "Divisores", "Puertas corredizas", "Muebles"],
    },
  ],

  hero: {
    chip: "Vidrio de seguridad laminado y templado",
    bajada:
      "Blindex es la marca de vidrio de seguridad reconocida en toda la región. En Paraguay, con dos líneas, laminado y templado, y puntos de venta en todo el país.",
    ctaSecundario: { href: "/#productos", label: "Ver productos", evento: "hero_productos" },
  },

  pilares: [
    {
      title: "Seguridad",
      text: "Vidrios fabricados y certificados para proteger a las personas ante roturas e impactos, en cada ambiente del hogar y la obra.",
    },
    {
      title: "Trayectoria",
      text: "Décadas siendo la marca de vidrio de seguridad que arquitectos, instaladores y familias de la región reconocen y eligen.",
    },
    {
      title: "Respaldo",
      text: "Control de calidad en cada etapa y una red de puntos de venta autorizados en todo Paraguay.",
    },
  ],

  ctaPuntos:
    "Puntos de venta autorizados de laminado y templado en todo Paraguay, listos para asesorarte y garantizar el vidrio original.",

  footer: {
    bajada:
      "Vidrio de seguridad laminado y templado, con el respaldo de una marca reconocida en toda la región. Cuando protegés a tu familia, no hay lugar para atajos.",
    legal: "Blindex es marca registrada de Vidriería Argentina S.A. Todos los derechos reservados.",
    columnas: [
      {
        title: "Blindex",
        items: [
          { label: "¿Por qué Blindex?", href: "/#por-que-blindex" },
          { label: "Exigí Blindex original", href: "/#autenticidad" },
        ],
      },
      {
        title: "Dónde comprar",
        items: [
          { label: "Puntos de venta de laminado", href: "/puntos-de-venta?linea=laminado" },
          { label: "Puntos de venta de templado", href: "/puntos-de-venta?linea=templado" },
        ],
      },
    ],
  },
};
