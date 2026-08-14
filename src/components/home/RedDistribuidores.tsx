"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import {
  distribuidoresExclusivos,
  type DistribuidorExclusivo,
} from "@/data/distribuidoresExclusivos";

/**
 * Franja de la red de distribuidores exclusivos. Es el equivalente Blindex de
 * la "Red Ekoglass" que pidió el cliente.
 *
 * Está construida para que los logos lleguen después: hoy ninguno de los 32
 * tiene archivo, así que cada ficha cae en un wordmark con el nombre. El día
 * que Manuel mande los logos, se agrega `logo` en la data y la sección los
 * toma sola, sin tocar este archivo.
 *
 * Los logos van en gris y sólo toman color en hover: son 32 marcas distintas,
 * cada una con su paleta, y a todo color la franja compite con el rojo Blindex
 * en vez de acompañarlo.
 */
export default function RedDistribuidores() {
  const reduce = useReducedMotion();

  // Dos pistas que corren en sentidos opuestos. Partir la lista al medio evita
  // que la misma marca aparezca dos veces en pantalla al mismo tiempo.
  const mitad = Math.ceil(distribuidoresExclusivos.length / 2);
  const filas = [
    distribuidoresExclusivos.slice(0, mitad),
    distribuidoresExclusivos.slice(mitad),
  ];

  return (
    <section id="red-distribuidores" className="section bg-paper">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">Red Blindex</span>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl">
              La red de distribuidores exclusivos.
            </h2>
            <p className="mt-4 text-ink/60">
              {distribuidoresExclusivos.length} empresas distribuyen Blindex de
              forma exclusiva en todo el país. Comprarles a ellos es la garantía
              de que el vidrio es original.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Las pistas se salen del container a propósito: la franja tiene que
          tocar los dos bordes de la pantalla para que se lea como algo que
          sigue de largo, no como una grilla que termina. */}
      <Reveal className="mt-14">
        {reduce ? (
          // Sin animación, una grilla centrada: el mismo contenido, quieto.
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {distribuidoresExclusivos.map((d) => (
                <FichaDistribuidor key={d.id} distribuidor={d} />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="space-y-6 overflow-hidden"
            // Difuminado en los dos bordes, para que los logos entren y salgan
            // en lugar de aparecer cortados contra el filo de la pantalla.
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            {filas.map((fila, i) => (
              <div key={i} className="group flex overflow-hidden">
                <div
                  className="flex w-max shrink-0 animate-marquee items-center gap-x-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-x-14 sm:pr-14"
                  style={{
                    animationDuration: i === 0 ? "64s" : "78s",
                    animationDirection: i === 0 ? "normal" : "reverse",
                  }}
                >
                  {/* La pista va duplicada: la segunda copia es la que entra
                      por la derecha cuando la primera termina de salir. */}
                  {[...fila, ...fila].map((d, j) => (
                    <FichaDistribuidor
                      key={`${d.id}-${j}`}
                      distribuidor={d}
                      // La copia es decorativa; que no la lea dos veces.
                      oculto={j >= fila.length}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Reveal>

    </section>
  );
}

/**
 * Una marca de la red. Con `logo` muestra la imagen; sin `logo`, el nombre
 * compuesto como wordmark. Con `web` es un link; sin `web`, no lo es.
 */
function FichaDistribuidor({
  distribuidor,
  oculto = false,
}: {
  distribuidor: DistribuidorExclusivo;
  oculto?: boolean;
}) {
  const { nombre, logo, web } = distribuidor;

  const contenido = logo ? (
    <Image
      src={logo}
      alt={nombre}
      width={320}
      height={120}
      unoptimized
      className="h-full w-auto object-contain"
    />
  ) : (
    <span className="h-display whitespace-nowrap text-lg text-ink-500 transition-colors group-hover/ficha:text-ink-900 sm:text-xl">
      {nombre}
    </span>
  );

  // El apagado en gris es sólo para los logos. Al wordmark no se le baja la
  // opacidad: el gris ya lo pone en segundo plano, y encima de eso quedaba
  // ilegible.
  const clases = logo
    ? "group/ficha grid h-12 shrink-0 place-items-center opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
    : "group/ficha grid h-12 shrink-0 place-items-center transition duration-300 sm:h-14";

  if (web) {
    return (
      <a
        href={web}
        target="_blank"
        rel="noopener noreferrer"
        className={clases}
        aria-hidden={oculto || undefined}
        tabIndex={oculto ? -1 : undefined}
      >
        {contenido}
      </a>
    );
  }

  return (
    <div className={clases} aria-hidden={oculto || undefined}>
      {contenido}
    </div>
  );
}
