"use client";

import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";

const puntos = [
  {
    ok: true,
    text: "Producción certificada, con trazabilidad y normas de calidad verificables.",
  },
  {
    ok: true,
    text: "Red de distribuidores autorizados, respaldada por la marca.",
  },
  {
    ok: false,
    text: "Vidrio importado de baja calidad que se hace pasar por Blindex, sin ningún respaldo real.",
  },
  {
    ok: false,
    text: "Imitaciones que comprometen justo lo que un vidrio de seguridad debería garantizar.",
  },
];

export default function Autenticidad() {
  const reduce = useReducedMotion();

  return (
    <section id="autenticidad" className="section relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-soft opacity-20" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <Reveal>
              <span className="chip border-brand-500/30 bg-brand-500/10 text-brand-400">
                <ShieldAlert className="h-3.5 w-3.5" />
                Exigí Blindex original
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
                La seguridad de tu familia no admite atajos.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-white/70 text-lg leading-relaxed">
                Hoy circula vidrio importado de baja calidad que se presenta
                como si fuera Blindex. No tiene el respaldo, los controles ni
                la trayectoria de la marca original — y eso pone en riesgo
                exactamente lo que estás buscando al elegir un vidrio de
                seguridad.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 max-w-xl text-white/70 text-lg leading-relaxed">
                Verificá siempre que tu vidrio sea Blindex original, comprado
                en un punto de venta autorizado.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-3">
            {puntos.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: reduce ? 0 : 16 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`flex items-start gap-3 rounded-xl border p-4 backdrop-blur ${
                  p.ok
                    ? "border-emerald-400/25 bg-emerald-400/10"
                    : "border-red-400/25 bg-red-400/10"
                }`}
              >
                {p.ok ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                ) : (
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                )}
                <p className="text-sm leading-relaxed text-white/80">{p.text}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
