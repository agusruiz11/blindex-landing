"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Sun,
  Lock,
  Ear,
  Thermometer,
  ArrowUpRight,
  ShowerHead,
  Columns2,
  Sparkles,
  Wrench,
  Leaf,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";
import { productos } from "@pais/productos";
import { sitio } from "@pais/sitio";
import type { LineaId } from "@/paises/tipos";

// Un ícono por línea. Los colores salen del manual de marca: Solar naranja
// (Pantone 130), Anti-Robo azul (285) y Energy verde (369). Laminado usa la
// marca madre. Acústico está pendiente de confirmar.
const ICONOS = {
  "blindex-laminado": Shield,
  "blindex-solar": Sun,
  "blindex-antirrobo": Lock,
  "blindex-acustico": Ear,
  "blindex-energy": Thermometer,
  // Paraguay: sus ids son los slugs del sitio viejo.
  "blindex-laminado-solar": Sun,
  "blindex-solar-neutro-light": Leaf,
  "blindex-templado": Shield,
  "blindex-templado-solar": Sun,
  "blindex-box": ShowerHead,
  "blindex-door-lite": Columns2,
  "blindex-decorativos-templados": Sparkles,
  "blindex-accesorios": Wrench,
} as const;

const ACENTOS = {
  solar: "bg-solar-500 shadow-solar-500/25",
  antirrobo: "bg-antirrobo-500 shadow-antirrobo-500/25",
  energy: "bg-energy-500 shadow-energy-500/25",
  acustico: "bg-acustico-500 shadow-acustico-500/25",
} as const;

// Países con líneas (Paraguay): arriba las dos opciones, laminado y
// templado, con lo que las diferencia; abajo los productos de la elegida.
// Se puede entrar directo a una línea con /#productos-<linea>, que es lo que
// usan el menú y el footer. Sin líneas (Argentina), una sola grilla.
const lineas = sitio.lineas;
const idLinea = (id: LineaId) => `productos-${id}`;

export default function Productos() {
  const reduce = useReducedMotion();
  const [linea, setLinea] = useState<LineaId | undefined>(lineas?.[0]?.id);

  useEffect(() => {
    if (!lineas) return;
    const desdeHash = () => {
      const l = lineas.find((x) => window.location.hash === `#${idLinea(x.id)}`);
      if (l) {
        setLinea(l.id);
        document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    desdeHash();
    window.addEventListener("hashchange", desdeHash);
    return () => window.removeEventListener("hashchange", desdeHash);
  }, []);

  const visibles = lineas ? productos.filter((p) => p.linea === linea) : productos;

  return (
    <section id="productos" className="section bg-paper">
      <div className="container-x">
        <Reveal>
          <span className="chip">Líneas de producto</span>
          <h2 className="h-display mt-4 max-w-2xl text-3xl sm:text-4xl">
            Un vidrio de seguridad para cada necesidad.
          </h2>
        </Reveal>

        {lineas && (
          <Reveal className="mt-10">
            <div role="tablist" aria-label="Líneas de producto" className="grid gap-4 sm:grid-cols-2">
              {lineas.map((l) => {
                const activa = l.id === linea;
                return (
                  <button
                    key={l.id}
                    id={idLinea(l.id)}
                    type="button"
                    role="tab"
                    aria-selected={activa}
                    aria-controls="productos-panel"
                    onClick={() => setLinea(l.id)}
                    className={`rounded-2xl border p-6 text-left transition ${
                      activa
                        ? "border-ink-900 bg-ink-900 text-white shadow-lg"
                        : "border-slate-200 bg-white text-ink hover:border-ink-300"
                    }`}
                  >
                    <span className="h-display block text-2xl">{l.nombre}</span>
                    <span className={`mt-2 block text-sm leading-relaxed ${activa ? "text-white/75" : "text-ink/65"}`}>
                      {l.bajada}
                    </span>
                    <span className="mt-4 flex flex-wrap gap-1.5">
                      {l.usos.map((u) => (
                        <span
                          key={u}
                          className={`rounded-full px-2.5 py-1 text-xs ${
                            activa ? "bg-white/10 text-white/85" : "bg-ink-50 text-ink/70"
                          }`}
                        >
                          {u}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        <RevealStagger
          key={linea}
          className={`${lineas ? "mt-8" : "mt-12"} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {visibles.map((p) => {
            const Icon = ICONOS[p.id as keyof typeof ICONOS] ?? Shield;
            const acento = p.acento
              ? ACENTOS[p.acento]
              : "bg-ink-900 shadow-ink-900/25";
            return (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="glass-card flex h-full flex-col rounded-2xl border-slate-200 p-6"
              >
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl text-white shadow-md ${acento}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="h-display mt-5 text-lg text-ink">{p.nombre}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600">{p.claim}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {p.descripcion}
                </p>
                <Link
                  href={`/productos/${p.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink-600 hover:text-ink-900"
                >
                  Ver más
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
