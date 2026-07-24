import { PlayCircle } from "lucide-react";
import type { ModuloCapacitacion } from "@/data/capacitaciones";
import Reveal from "@/components/Reveal";

export default function ModuloVideo({
  modulo,
  index,
}: {
  modulo: ModuloCapacitacion;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="aspect-video w-full bg-ink">
          <iframe
            src={modulo.videoUrl}
            title={modulo.titulo}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-6">
          <div className="flex items-start gap-3">
            <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
            <div>
              <h3 className="h-display text-lg text-ink">{modulo.titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {modulo.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
