"use client";

import Link from "next/link";
import { FileText, Download, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";
import { boletines } from "@/data/boletines";

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
          <p className="mt-4 max-w-2xl text-ink/60">
            Documentación para especificar vidrio de seguridad con criterio.
            Descargable y lista para adjuntar a tu pliego.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {boletines.map((b) => (
            <motion.a
              key={b.id}
              href={b.pdf}
              target="_blank"
              rel="noopener noreferrer"
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
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink-50 text-ink-600">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold leading-snug text-ink">{b.titulo}</div>
                <div className="mt-0.5 text-xs text-ink/50">PDF</div>
              </div>
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-500/25 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white"
              >
                <Download className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-10">
            <Link href="/asesoramiento" className="btn-outline">
              Ver todo el asesoramiento técnico
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
