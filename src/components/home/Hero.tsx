"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────
// MEDIA DE PORTADA
//
// Único lugar a tocar cuando llegue el video del cliente: cambiar `tipo` a
// "video" y apuntar `src` al mp4. El resto de la sección (degradados,
// jerarquía, botones, mobile) ya está resuelto para cualquiera de los dos.
//
// Hoy: foto de la obra Blindex Solar Verde. Es la única del material
// recibido que sirve como portada — el vidrio es el protagonista (se ve el
// interior iluminado a través del vidriado) y el cielo de atardecer da una
// zona oscura natural donde el texto entra sin velo pesado.
//
// Si va video: mudo, en loop, sin locución ni texto quemado. Dejar `poster`
// apuntando a la foto para que no haya un salto en blanco mientras carga.
// ─────────────────────────────────────────────────────────────────────────
const MEDIA = {
  tipo: "imagen" as "imagen" | "video",
  src: "/img/hero/casa-atardecer.webp",
  srcMobile: "/img/hero/casa-atardecer-mobile.webp",
  alt: "Vivienda con grandes paños de vidrio Blindex Solar al atardecer",
};

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
        {MEDIA.tipo === "video" ? (
          <video
            src={MEDIA.src}
            poster={MEDIA.srcMobile}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            {/* Dirección de arte por dispositivo: en mobile el recorte
                horizontal deja la casa muy chica, así que va una versión
                más cerrada. */}
            <Image
              src={MEDIA.srcMobile}
              alt={MEDIA.alt}
              fill
              priority
              className="object-cover sm:hidden"
              sizes="100vw"
            />
            <Image
              src={MEDIA.src}
              alt={MEDIA.alt}
              fill
              priority
              className="hidden object-cover sm:block"
              sizes="100vw"
            />
          </>
        )}

        {/* Velo direccional: oscurece la izquierda, donde va el texto, y deja
            respirar la derecha, que es donde están las ventanas iluminadas.
            Sin esto el texto compite con la foto; con un velo parejo se
            arruinaría la imagen. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/85 to-transparent" />
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
            Seguridad y confort
            <br />
            para los que más querés.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Blindex es la marca de vidrio de seguridad en la que Argentina
            confía hace décadas. Está en el Congreso de la Nación, en Ezeiza y
            en más de 25 obras emblemáticas del país.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/puntos-de-venta" className="btn-primary">
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
