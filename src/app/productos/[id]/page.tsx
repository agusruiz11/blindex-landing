import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import BlindexLogo from "@/components/BlindexLogo";
import { productos } from "@/data/productos";
import { boletines } from "@/data/boletines";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = productos.find((x) => x.id === params.id);
  if (!p) return {};
  return {
    title: `${p.nombre} — Blindex`,
    description: p.descripcion.slice(0, 155),
  };
}

export default function ProductoPage({ params }: Props) {
  const producto = productos.find((p) => p.id === params.id);
  if (!producto) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <Link
            href="/#productos"
            className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Todas las líneas
          </Link>
          {/* Cuando la línea tiene lockup propio, manda el logo: es la marca
              real y trae su claim oficial. El h1 sigue existiendo para SEO y
              lectores de pantalla, pero visualmente oculto. */}
          {producto.logo ? (
            <>
              <h1 className="sr-only">
                {producto.nombre}
                {producto.claimMarca ? ` — ${producto.claimMarca}` : ""}
              </h1>
              <Image
                src={producto.logo}
                alt={`${producto.nombre}${
                  producto.claimMarca ? ` — ${producto.claimMarca}` : ""
                }`}
                width={420}
                height={100}
                priority
                unoptimized
                className={`mt-8 ${producto.logoClase ?? "h-16 w-auto sm:h-20"}`}
              />
            </>
          ) : (
            // Laminado no tiene lockup propio: usa la marca madre. Va el
            // isotipo para que la página no arranque sin ancla de marca,
            // como sí la tienen las otras cuatro.
            <div className="mt-8 flex items-center gap-4">
              <BlindexLogo variante="isotipo" className="h-14 w-14 sm:h-16 sm:w-16" />
              <h1 className="h-display text-4xl sm:text-5xl">{producto.nombre}</h1>
            </div>
          )}
          <p className="mt-4 text-lg font-medium text-brand-600">{producto.claim}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">
            {producto.descripcion}
          </p>
        </Reveal>

        {producto.video && (
          <Reveal>
            <div className="mt-14">
              <h2 className="h-display text-2xl">Vealo con sus propios ojos</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {producto.video.map((v) => (
                  <figure key={v.src} className="overflow-hidden rounded-2xl border border-slate-200">
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video
                      src={v.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-video w-full bg-ink-900 object-cover"
                    />
                    <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink/70">
                      {v.titulo}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="h-display text-2xl">Beneficios</h2>
              <ul className="mt-6 space-y-3">
                {producto.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/10">
                      <Check className="h-3 w-3 text-brand-600" />
                    </span>
                    <span className="text-ink/75">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-paper p-6">
              <h2 className="h-display text-lg">Documentación técnica</h2>
              <ul className="mt-4 space-y-2">
                {boletines.slice(0, 4).map((b) => (
                  <li key={b.id}>
                    <a
                      href={b.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-600 underline-offset-4 hover:text-brand-600 hover:underline"
                    >
                      {b.titulo}
                    </a>
                  </li>
                ))}
              </ul>
              <Link href="/puntos-de-venta" className="btn-primary mt-6 w-full">
                <MapPin className="h-4 w-4" />
                Dónde comprarlo
              </Link>
            </aside>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
