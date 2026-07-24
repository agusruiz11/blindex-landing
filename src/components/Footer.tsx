import Link from "next/link";
import BlindexLogo from "@/components/BlindexLogo";
import { socials } from "@/data/socials";
import { paises } from "@/data/paises";

const nav = [
  {
    title: "Producto",
    items: [
      { label: "Vidrio templado", href: "/#productos" },
      { label: "Vidrio laminado", href: "/#productos" },
      { label: "DVH", href: "/#productos" },
      { label: "Control solar", href: "/#productos" },
    ],
  },
  {
    title: "Blindex",
    items: [
      { label: "¿Por qué Blindex?", href: "/#por-que-blindex" },
      { label: "Exigí Blindex original", href: "/#autenticidad" },
      { label: "Vidriería Argentina S.A.", href: "#" },
      { label: "Prensa", href: "#" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Elegí tu vidrio", href: "/#elegi-tu-vidrio" },
      { label: "Boletines técnicos", href: "/#boletines" },
      { label: "Puntos de venta", href: "/puntos-de-venta" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink text-white/80">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" aria-label="Blindex — inicio" className="inline-flex">
              <BlindexLogo light />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Vidrio de seguridad con la trayectoria y el respaldo que
              Argentina conoce. Cuando protegés a tu familia, no hay lugar
              para atajos.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20 hover:ring-white/30 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {nav.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="hover:text-white transition">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-1.5">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              Blindex en la región
            </span>
            {paises.map((p) => (
              <a
                key={p.nombre}
                href={p.href}
                aria-label={p.nombre}
                title={p.nombre}
                className="grid h-9 w-9 place-items-center rounded-full text-lg ring-1 ring-white/15 transition hover:ring-white/40 hover:bg-white/10"
              >
                <span aria-hidden>{p.bandera}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/45">
            Blindex es marca registrada de Vidriería Argentina S.A. — Todos
            los derechos reservados.
          </p>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Blindex.
          </p>
        </div>
      </div>
    </footer>
  );
}
