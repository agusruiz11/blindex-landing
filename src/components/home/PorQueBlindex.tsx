"use client";

import { ShieldCheck, History, BadgeCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";
import { sitio } from "@pais/sitio";

// Los textos dependen del país; los íconos van en el mismo orden en todos.
const ICONOS = [ShieldCheck, History, BadgeCheck];
const pilares = sitio.pilares.map((p, i) => ({ ...p, icon: ICONOS[i] }));

export default function PorQueBlindex() {
  const reduce = useReducedMotion();

  return (
    <section id="por-que-blindex" className="section">
      <div className="container-x">
        <Reveal>
          <span className="chip">¿Por qué Blindex?</span>
          <h2 className="h-display mt-4 max-w-2xl text-3xl sm:text-4xl">
            Tres razones por las que Blindex es sinónimo de vidrio seguro.
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {pilares.map(({ icon: Icon, title, text }) => (
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
              className="glass-card group rounded-2xl p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink-50 text-ink-600 transition group-hover:bg-ink-500 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="h-display mt-5 text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{text}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
