"use client";

import { FileText, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";

// PLACEHOLDER — reemplazar por los boletines/folletos reales (PDF)
const boletines = [
  { title: "Folleto institucional Blindex", meta: "PDF · 2.1 MB" },
  { title: "Boletín técnico — Vidrio templado", meta: "PDF · 850 KB" },
  { title: "Boletín técnico — Vidrio laminado", meta: "PDF · 920 KB" },
  { title: "Guía DVH — Norma IRAM 12598-1", meta: "PDF · 1.4 MB" },
  { title: "Ficha técnica — Control solar", meta: "PDF · 780 KB" },
  { title: "Manual de instalación para vidrieros", meta: "PDF · 3.2 MB" },
];

export default function Boletines() {
  const reduce = useReducedMotion();

  return (
    <section id="boletines" className="section bg-paper">
      <div className="container-x">
        <Reveal>
          <span className="chip">Descargas</span>
          <h2 className="h-display mt-4 max-w-2xl text-3xl sm:text-4xl">
            Boletines técnicos y material de marca.
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {boletines.map((b) => (
            <motion.div
              key={b.title}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="glass-card flex items-center gap-4 rounded-2xl border-slate-200 p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate font-semibold text-ink">{b.title}</div>
                <div className="text-xs text-ink/50">{b.meta}</div>
              </div>
              <a
                href="#"
                aria-label={`Descargar ${b.title}`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-500/25 text-brand-600 transition hover:bg-brand-500 hover:text-white"
              >
                <Download className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
