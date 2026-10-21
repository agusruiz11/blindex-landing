import Link from "next/link";
import BlindexLogo from "@/components/BlindexLogo";
import { socials } from "@pais/socials";
import { paises } from "@pais/paises";
import { productos } from "@pais/productos";
import { sitio } from "@pais/sitio";

// Con líneas (Paraguay) la primera columna lleva a cada línea; sin líneas,
// a cada producto.
const nav = [
  {
    title: "Líneas de producto",
    items: sitio.lineas
      ? sitio.lineas.map((l) => ({ label: l.nombre, href: `/#productos-${l.id}` }))
      : productos.map((p) => ({
          label: p.nombre,
          href: `/productos/${p.id}`,
        })),
  },
  ...sitio.footer.columnas,
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink text-white/80">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" aria-label="Blindex — inicio" className="inline-flex">
              <BlindexLogo light className="h-12 w-auto sm:h-14" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {sitio.footer.bajada}
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
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-300">
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
            {paises.map((p) => {
              // Los sitios de Bolivia, Paraguay y Uruguay son dominios aparte:
              // abren en pestaña nueva. Argentina es este mismo sitio.
              const externo = p.href.startsWith("http");
              return (
                <a
                  key={p.nombre}
                  href={p.href}
                  aria-label={
                    externo ? `Blindex ${p.nombre} (sitio externo)` : p.nombre
                  }
                  title={p.nombre}
                  target={externo ? "_blank" : undefined}
                  rel={externo ? "noopener noreferrer" : undefined}
                  className="grid h-9 w-9 place-items-center rounded-full text-lg ring-1 ring-white/15 transition hover:ring-white/40 hover:bg-white/10"
                >
                  <span aria-hidden>{p.bandera}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/45">
            {sitio.footer.legal}
          </p>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Blindex. Hecho por{" "}
            <a
              href="https://posicionarte.online"
              target="_blank"
              rel="noopener"
              className="underline decoration-white/25 underline-offset-2 hover:text-white/80"
            >
              posicionarte.online
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
