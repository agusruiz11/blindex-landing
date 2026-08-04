import { Sparkles, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function EligeTuVidrio() {
  return (
    <section id="elegi-tu-vidrio" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-600 to-ink-800 px-8 py-14 text-white sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />

            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="chip border-white/20 bg-white/10 text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Herramienta interactiva
                </span>
                <h2 className="h-display mt-4 text-3xl sm:text-4xl">
                  ¿No sabés qué vidrio necesitás?
                </h2>
                <p className="mt-3 text-white/75 text-lg">
                  Respondé un par de preguntas sobre tu proyecto y te
                  recomendamos el vidrio de seguridad Blindex indicado para
                  ese uso.
                </p>
              </div>

              {/* La herramienta es una app estática aparte (Bootstrap + jQuery)
                  que hoy vive en el WordPress. Este link SE ROMPE cuando se
                  migre el dominio: hay que copiar la carpeta a
                  /public/elegituvidrio manteniendo la misma URL.
                  Ver docs/elegi-tu-vidrio.md */}
              <a
                href="/elegituvidrio/"
                className="btn-primary shrink-0 whitespace-nowrap"
              >
                Elegí tu vidrio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
