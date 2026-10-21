import type { Sitio } from "../tipos";

// Textos y datos generales de Blindex Argentina. Hasta el 21/10/2026 vivían
// sueltos en los componentes; se juntaron acá sin cambiar una coma al
// dividir el sitio por país.
export const sitio: Sitio = {
  // TODO: reemplazar por el dominio final antes de producción.
  url: "https://www.blindex.com.ar",
  idioma: "es-AR",
  locale: "es_AR",
  // Definida por el cliente el 04/09/2026. En el servidor manda CONTACT_TO.
  mailContacto: "estefania.cruz@ar.nsg.com",

  // El sitio actual no tiene meta description ni og:image: compartido por
  // WhatsApp aparece sin imagen. Para una marca que empuja el contacto por
  // WhatsApp es un autogol, así que acá queda cubierto desde el arranque.
  descripcion:
    "Blindex, la marca de vidrio de seguridad en la que Argentina confía. Laminado, control solar, antirrobo, acústico y DVH, con la trayectoria de Vidriería Argentina S.A.",
  descripcionCompartir:
    "La marca de vidrio de seguridad en la que Argentina confía. Está en el Congreso de la Nación, en Ezeiza y en más de 25 obras emblemáticas.",

  // El sitio actual expone sólo 4 páginas de 91 en el menú: Obras, Asesoramiento
  // y Contacto están publicadas pero son inalcanzables navegando. Sacarlas a la
  // superficie es el objetivo central del refresh.
  menu: [
    { href: "/#productos", label: "Productos" },
    { href: "/nuestras-obras", label: "Obras" },
    { href: "/#elegi-tu-vidrio", label: "Elegí tu vidrio" },
    { href: "/asesoramiento", label: "Asesoramiento" },
    { href: "/contacto", label: "Contacto" },
  ],

  hero: {
    chip: "Vidrio de seguridad #1 en Argentina",
    bajada:
      "Blindex es la marca de vidrio de seguridad en la que Argentina confía hace décadas. Está en el Congreso de la Nación, en Ezeiza y en más de 25 obras emblemáticas del país.",
    ctaSecundario: { href: "/#elegi-tu-vidrio", label: "Elegí tu vidrio", evento: "hero_elegi_tu_vidrio" },
  },

  pilares: [
    {
      title: "Seguridad",
      text: "Vidrios fabricados y certificados para proteger a las personas ante roturas e impactos, en cada ambiente del hogar y la obra.",
    },
    {
      title: "Trayectoria",
      text: "Décadas siendo la marca de vidrio de seguridad que arquitectos, instaladores y familias argentinas reconocen y eligen.",
    },
    {
      title: "Respaldo",
      text: "Producción propia, control de calidad en cada etapa y una red de distribuidores autorizados en todo el país.",
    },
  ],

  ctaPuntos:
    "Distribuidores autorizados en Argentina, Bolivia, Paraguay y Uruguay, listos para asesorarte y garantizar el vidrio original.",

  footer: {
    bajada:
      "Vidrio de seguridad con la trayectoria y el respaldo que Argentina conoce. Cuando protegés a tu familia, no hay lugar para atajos.",
    legal:
      "Blindex es marca registrada de Vidriería Argentina S.A. — Todos los derechos reservados.",
    columnas: [
      {
        title: "Blindex",
        items: [
          { label: "¿Por qué Blindex?", href: "/#por-que-blindex" },
          { label: "Exigí Blindex original", href: "/#autenticidad" },
          { label: "Nuestras obras", href: "/nuestras-obras" },
          { label: "Contacto", href: "/contacto" },
        ],
      },
      {
        title: "Recursos",
        items: [
          { label: "Elegí tu vidrio", href: "/#elegi-tu-vidrio" },
          { label: "Asesoramiento técnico", href: "/asesoramiento" },
          { label: "Capacitación online", href: "/capacitacion-online" },
          { label: "Puntos de venta", href: "/puntos-de-venta" },
        ],
      },
    ],
  },
};
