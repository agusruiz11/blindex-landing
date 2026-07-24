"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BlindexLogo from "@/components/BlindexLogo";

const links = [
  { href: "/#productos", label: "Productos" },
  { href: "/#por-que-blindex", label: "¿Por qué Blindex?" },
  { href: "/#elegi-tu-vidrio", label: "Elegí tu vidrio" },
  { href: "/#boletines", label: "Boletines" },
  { href: "/puntos-de-venta", label: "Puntos de venta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El home tiene un hero oscuro detrás del header (logo/links en blanco).
  // En el resto de las páginas el fondo es claro: el header va siempre "sólido".
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_10px_30px_-12px_rgba(6,26,56,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" aria-label="Blindex — inicio" className="group">
          <BlindexLogo light={!solid} />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-medium transition ${
                solid ? "text-ink/80 hover:text-brand-600" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/puntos-de-venta" className="btn-primary">
            <MapPin className="h-4 w-4" />
            Encontrá tu punto de venta
          </Link>
        </nav>

        <button
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden frosted mx-4 mb-3 rounded-2xl p-4 shadow-glass"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink/90 hover:bg-brand-50"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/puntos-de-venta"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                <MapPin className="h-4 w-4" />
                Encontrá tu punto de venta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
