"use client";

import Link from "next/link";
import { Shield, Sun, Lock, Ear, Thermometer, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";
import { productos } from "@/data/productos";

// Un ícono por línea. Los colores salen del manual de marca: Solar naranja
// (Pantone 130), Anti-Robo azul (285) y Energy verde (369). Laminado usa la
// marca madre. Acústico está pendiente de confirmar.
const ICONOS = {
  "blindex-laminado": Shield,
  "blindex-solar": Sun,
  "blindex-antirrobo": Lock,
  "blindex-acustico": Ear,
  "blindex-energy": Thermometer,
} as const;

const ACENTOS = {
  solar: "bg-solar-500 shadow-solar-500/25",
  antirrobo: "bg-antirrobo-500 shadow-antirrobo-500/25",
  energy: "bg-energy-500 shadow-energy-500/25",
  acustico: "bg-acustico-500 shadow-acustico-500/25",
} as const;

export default function Productos() {
  const reduce = useReducedMotion();

  return (
    <section id="productos" className="section bg-paper">
      <div className="container-x">
        <Reveal>
          <span className="chip">Líneas de producto</span>
          <h2 className="h-display mt-4 max-w-2xl text-3xl sm:text-4xl">
            Un vidrio de seguridad para cada necesidad.
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => {
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
