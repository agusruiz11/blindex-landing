import type { Metadata } from "next";
import Link from "next/link";
import { FileDown, ArrowRight, Scale } from "lucide-react";
import Reveal from "@/components/Reveal";
import { boletines } from "@/data/boletines";
import { notas } from "@/data/notas";

export const metadata: Metadata = {
  title: "Asesoramiento técnico y legal — Blindex",
  description:
    "Boletines técnicos, guías de especificación de vidrios, cálculo de espesores y el marco legal argentino de vidrios de seguridad.",
};

export default function AsesoramientoPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <span className="chip">Asesoramiento</span>
          <h1 className="h-display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Asesoramiento técnico y legal.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            Todo lo que necesitás para especificar vidrio de seguridad con
            criterio: documentación técnica, cálculo de espesores y la normativa
            vigente en la Argentina.
          </p>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <h2 className="h-display text-2xl">Boletines técnicos</h2>
            <p className="mt-2 text-ink/60">
              Descargables en PDF, listos para adjuntar a tu pliego.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {boletines.map((b) => (
                <li key={b.id}>
                  <a
                    href={b.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex h-full flex-col rounded-2xl border-slate-200 p-5"
                  >
                    <FileDown className="h-6 w-6 text-brand-500" />
                    <span className="h-display mt-4 flex-1 text-base text-ink">
                      {b.titulo}
                    </span>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/45">
                      Descargar PDF
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <h2 className="h-display text-2xl">Notas técnicas</h2>
            <p className="mt-2 text-ink/60">
              Normativa, criterios de especificación y responsabilidad
              profesional.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {notas.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/asesoramiento/${n.id}`}
                    className="glass-card flex h-full flex-col rounded-2xl border-slate-200 p-6"
                  >
                    <Scale className="h-5 w-5 text-ink-400" />
                    <h3 className="h-display mt-4 text-base text-ink">
                      {n.titulo}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                      {n.resumen}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                      Leer la nota
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
