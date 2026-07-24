"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop"
          alt="Fachada de vidrio de un edificio moderno"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-grid-soft opacity-30" />
      </div>

      <div className="container-x relative z-10 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span variants={item} className="chip border-white/20 bg-white/10 text-white">
            <ShieldCheck className="h-3.5 w-3.5" />
            Vidrio de seguridad #1 en Argentina
          </motion.span>

          <motion.h1
            variants={item}
            className="h-display mt-6 text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Seguridad en cada vidrio.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
            Blindex es la marca de vidrio de seguridad en la que Argentina
            confía hace décadas. Cuando protegés a tu familia, elegís la
            trayectoria y el respaldo que no se improvisan.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/puntos-de-venta" className="btn-accent">
              <MapPin className="h-4 w-4" />
              Encontrá tu punto de venta
            </Link>
            <Link href="/#elegi-tu-vidrio" className="btn-ghost">
              Elegí tu vidrio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
