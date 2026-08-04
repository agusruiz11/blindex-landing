import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { obras } from "@/data/obras";

export const metadata: Metadata = {
  title: "Nuestras obras — Blindex",
  description:
    "Más de 25 obras emblemáticas de la Argentina llevan vidrio Blindex: el Congreso de la Nación, el Aeropuerto de Ezeiza, la Cancillería, el Banco Central y el Parque de la Memoria, entre otras.",
};

export default function NuestrasObrasPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="h-display mt-6 max-w-3xl text-4xl sm:text-5xl">
            Donde la seguridad no era negociable.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            {obras.length} obras emblemáticas de la Argentina llevan vidrio
            Blindex. Aeropuertos, organismos públicos, bancos y torres
            residenciales que confiaron en la marca.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {obras.map((obra) => (
            <article
              key={obra.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200"
            >
              <Image
                src={obra.img}
                alt={`Obra ${obra.nombre} con vidrio Blindex`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent"
              />
              <h2 className="h-display absolute inset-x-0 bottom-0 p-5 text-lg text-white">
                {obra.nombre}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
