// Blindex en la región: los sitios locales de cada país.
//
// URLs pasadas por el cliente el 14/08/2026 y verificadas ese mismo día: las
// tres responden 200, sin redirecciones. Argentina apunta a este sitio.
export const paises: { nombre: string; bandera: string; href: string }[] = [
  { nombre: "Argentina", bandera: "🇦🇷", href: "/" },
  { nombre: "Bolivia", bandera: "🇧🇴", href: "https://www.blindex.com.bo/" },
  { nombre: "Paraguay", bandera: "🇵🇾", href: "https://www.blindex.com.py/" },
  { nombre: "Uruguay", bandera: "🇺🇾", href: "https://www.blindex.com.uy/" },
];
