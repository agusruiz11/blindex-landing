"use client";

import { Shield, Layers, Thermometer, Sun, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";

const productos = [
  {
    icon: Shield,
    title: "Vidrio templado",
    desc: "Hasta 5 veces más resistente que el vidrio común. Si se rompe, lo hace en pequeños fragmentos sin filo.",
  },
  {
    icon: Layers,
    title: "Vidrio laminado",
    desc: "Dos o más capas unidas por una lámina de PVB: retiene los fragmentos y frena impactos e intentos de robo.",
  },
  {
    icon: Thermometer,
    title: "DVH — Doble Vidriado Hermético",
    desc: "Cámara de aire estanca que mejora el aislamiento térmico y acústico de tu casa o edificio.",
  },
  {
    icon: Sun,
    title: "Control solar",
    desc: "Reduce el ingreso de calor y la carga de refrigeración sin resignar luminosidad ni diseño.",
  },
];

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

        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
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
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-white shadow-md shadow-brand-500/25">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="h-display mt-5 text-lg text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{desc}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Ver más
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
