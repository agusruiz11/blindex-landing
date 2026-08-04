"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { RevealStagger } from "@/components/Reveal";
import { obrasDestacadas, obras } from "@/data/obras";

export default function Obras() {
  const reduce = useReducedMotion();

  return (
    <section id="obras" className="section bg-ink-900 text-white">
      <div className="container-x">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            Nuestras obras
          </span>
          <h2 className="h-display mt-4 max-w-3xl text-3xl sm:text-4xl">
            Donde la seguridad no era negociable, eligieron Blindex.
          </h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Más de {obras.length} obras emblemáticas de la Argentina llevan
            vidrio Blindex. Aeropuertos, organismos públicos, bancos y torres
            residenciales.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {obrasDestacadas.map((obra) => (
            <motion.article
              key={obra.id}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
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
                className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent"
              />
              <h3 className="h-display absolute inset-x-0 bottom-0 p-5 text-lg text-white">
                {obra.nombre}
              </h3>
            </motion.article>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-10">
            <Link
              href="/nuestras-obras"
              className="btn btn-ghost"
            >
              Ver las {obras.length} obras
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
