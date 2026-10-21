"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { trackCta } from "@/lib/tracking";

// Zócalo "Producto destacado". Pedido de Estefanía Cruz (VASA) en el mail del
// 15/10/2026, reenviado por Manuel/QUAR: va debajo de la grilla de productos,
// con la foto de obra, "Encontrá tu punto de venta" y un "Ver más" que abre
// la ficha en PDF. Para cambiar el producto destacado alcanza con tocar esta
// constante y reemplazar la foto y el PDF en public/.
const DESTACADO = {
  nombre: "Blindex Solar Neutro Light",
  bajada: "Vidrio laminado de control solar neutro.",
  // Foto recortada sin los bordes blancos del original.
  foto: "/img/destacado/blindex-solar-neutro-light.jpg",
  // PDF original de 8,2 MB; la tapa se recomprimió a JPEG y quedó en 1,2 MB
  // sin cambios visibles, para que abra rápido en el celular.
  pdf: "/docs/blindex-solar-neutro-light.pdf",
};

export default function ProductoDestacado() {
  return (
    <section
      id="producto-destacado"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* En mobile la foto ocupa todo el fondo; en desktop, la mitad derecha.
          El degradé desde la izquierda asegura el contraste del texto. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={DESTACADO.foto}
        alt={`Edificio con ${DESTACADO.nombre}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%] lg:left-auto lg:w-3/5"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30 lg:via-ink/70 lg:to-transparent" />

      <div className="container-x relative py-20 sm:py-24">
        <Reveal>
          <div className="max-w-xl">
            <span className="chip border-solar-500/40 bg-solar-500/15 text-solar-300">
              Producto destacado
            </span>
            <h2 className="h-display mt-4 text-3xl leading-tight sm:text-4xl">
              {DESTACADO.nombre}
            </h2>
            <p className="mt-3 text-lg text-white/75">{DESTACADO.bajada}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/puntos-de-venta"
                className="btn-primary"
                onClick={() => trackCta("destacado_puntos_de_venta")}
              >
                <MapPin className="h-4 w-4" />
                Encontrá tu punto de venta
              </Link>
              <a
                href={DESTACADO.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                onClick={() => trackCta("destacado_ver_mas_pdf")}
              >
                Ver más
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
