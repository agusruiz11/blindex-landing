import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { capacitacionOnline } from "@/data/capacitacionOnline";

// OJO: esta es la capacitación online ABIERTA, que ya existe hoy en
// blindex.com.ar/capacitaciones/. No confundir con /capacitaciones-blindex,
// que es la ruta oculta del circuito de certificación de vidrieros.

export const metadata: Metadata = {
  title: "Capacitación online — Blindex",
  description:
    "Videos de capacitación Blindex sobre vidrio de seguridad, abiertos y gratuitos.",
};

export default function CapacitacionOnlinePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <span className="chip">Capacitación</span>
          <h1 className="h-display mt-4 max-w-3xl text-4xl sm:text-5xl">
            No te pierdas nuestra capacitación online.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            Videos abiertos sobre vidrio de seguridad: cómo se fabrica, cómo se
            especifica y qué mirar antes de elegir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {capacitacionOnline.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.05}>
              <article>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-ink-900">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="aspect-video w-full"
                  />
                </div>
                <h2 className="h-display mt-4 text-lg text-ink">{v.titulo}</h2>
                {v.descripcion && (
                  <p className="mt-1 text-sm text-ink/65">{v.descripcion}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {/* TODO: pedirle al cliente los títulos y descripciones reales — en el
            sitio actual se llaman sólo "Blindex 1 / 2 / 3". */}
      </div>
    </div>
  );
}
