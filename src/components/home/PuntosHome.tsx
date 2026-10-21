"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { puntosDeVenta } from "@pais/puntosDeVenta";
import { sitio } from "@pais/sitio";
import type { LineaId, PuntoDeVenta } from "@/paises/tipos";
import { trackContacto, trackCta } from "@/lib/tracking";

/**
 * Puntos de venta en la home, pedido por Blindex el 22/09/2026 ("poner los
 * PDV debajo de los distris, por más que esté en la barra de arriba").
 *
 * Va pegada a la red de distribuidores a propósito: esa franja dice quién
 * distribuye Blindex; ésta contesta dónde lo compra el consumidor final. Son
 * dos redes distintas (mayorista y minorista) y conviene que se vean juntas.
 *
 * No repite la página completa: es un atajo. Elegís provincia, ves los
 * primeros puntos (los Select primero) con su WhatsApp, y un botón lleva a
 * la página con el mapa y el buscador, con la provincia ya filtrada.
 */

const MAX_VISIBLES = 6;

// Orden de las provincias: por cantidad de puntos, así las que más tienen
// quedan primero y la fila de chips no arranca con una de un solo punto.
function provinciasOrdenadas(puntos: PuntoDeVenta[]) {
  const conteo = new Map<string, number>();
  for (const p of puntos) conteo.set(p.provincia, (conteo.get(p.provincia) ?? 0) + 1);
  return Array.from(conteo.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([provincia, cantidad]) => ({ provincia, cantidad }));
}

// Países con líneas (Paraguay): primero la línea, después la región.
const lineas = sitio.lineas;
const deLinea = (linea: LineaId | undefined) =>
  lineas && linea ? puntosDeVenta.filter((p) => p.lineas?.includes(linea)) : puntosDeVenta;

export default function PuntosHome() {
  const [linea, setLinea] = useState<LineaId | undefined>(lineas?.[0]?.id);
  const puntosLinea = useMemo(() => deLinea(linea), [linea]);
  const provincias = useMemo(() => provinciasOrdenadas(puntosLinea), [puntosLinea]);
  const [provincia, setProvincia] = useState(provincias[0]?.provincia ?? "");

  const cambiarLinea = (l: LineaId) => {
    setLinea(l);
    setProvincia(provinciasOrdenadas(deLinea(l))[0]?.provincia ?? "");
  };

  const enProvincia = useMemo(
    () =>
      puntosLinea
        .filter((p) => p.provincia === provincia)
        // Select primero; dentro de cada grupo, orden alfabético.
        .sort((a, b) => Number(!!b.select) - Number(!!a.select) || a.nombre.localeCompare(b.nombre)),
    [puntosLinea, provincia]
  );
  const visibles = enProvincia.slice(0, MAX_VISIBLES);
  const restantes = enProvincia.length - visibles.length;
  const hrefTodos =
    `/puntos-de-venta?provincia=${encodeURIComponent(provincia)}` +
    (lineas && linea ? `&linea=${linea}` : "");

  return (
    <section id="puntos-de-venta" className="section bg-white">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">Puntos de venta</span>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl">
              Comprá Blindex cerca tuyo.
            </h2>
            <p className="mt-4 text-ink/60">
              {sitio.puntosBajada(puntosLinea.length, provincias.length)}
            </p>
          </div>
        </Reveal>

        {/* Provincias. En mobile la fila se desplaza a lo ancho; en desktop
            entra completa y se centra. */}
        {lineas && (
          <Reveal className="mt-10">
            <div role="tablist" aria-label="Línea" className="flex justify-center">
              <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 text-sm">
                {lineas.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    role="tab"
                    aria-selected={l.id === linea}
                    onClick={() => cambiarLinea(l.id)}
                    className={`rounded-full px-5 py-2 font-semibold transition ${
                      l.id === linea ? "bg-ink-900 text-white shadow-md" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {l.nombre}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal className={lineas ? "mt-6" : "mt-10"}>
          <div
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
            role="tablist"
            aria-label={sitio.region.singular[0].toUpperCase() + sitio.region.singular.slice(1)}
          >
            {provincias.map(({ provincia: p, cantidad }) => {
              const activa = p === provincia;
              return (
                <button
                  key={p}
                  type="button"
                  role="tab"
                  aria-selected={activa}
                  onClick={() => setProvincia(p)}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                    activa
                      ? "border-ink-900 bg-ink-900 text-white shadow-md"
                      : "border-slate-200 bg-white text-ink/70 hover:border-ink-300 hover:text-ink"
                  }`}
                >
                  {p}
                  <span className={`ml-1.5 text-xs ${activa ? "text-white/60" : "text-ink/40"}`}>
                    {cantidad}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p, i) => (
            // En mobile la grilla es una sola columna: seis cards son una
            // pantalla y media de scroll antes del botón. Se muestran cuatro
            // y el resto queda para la página completa.
            <Reveal key={p.id} delay={i * 0.04} className={i >= 4 ? "hidden sm:block" : undefined}>
              <PuntoCompacto punto={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <Link
              href={hrefTodos}
              className="btn-primary"
              onClick={() => trackCta("home_puntos_ver_todos")}
            >
              {restantes > 0
                ? `Ver los ${enProvincia.length} puntos de ${provincia} en el mapa`
                : `Ver ${provincia} en el mapa`}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-ink/50">
              En la página completa podés buscar por localidad o dirección.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Versión reducida de la card de puntos de venta: nombre, localidad y el
 * contacto principal. Lo demás (cómo llegar, web, Instagram) queda para la
 * página completa, que es donde el usuario ya decidió a cuál ir.
 */
function PuntoCompacto({ punto }: { punto: PuntoDeVenta }) {
  const waHref = punto.whatsapp
    ? `https://wa.me/${punto.whatsapp}?text=${encodeURIComponent(
        "Hola, los contacto desde la web de Blindex"
      )}`
    : undefined;
  const telHref = punto.telefono ? `tel:${punto.telefono.replace(/[\s()]/g, "")}` : undefined;

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-ink-200 hover:shadow-md">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="h-display text-lg leading-tight text-ink">{punto.nombre}</h3>
          {punto.select && (
            <span
              className="inline-flex items-center gap-1 rounded-full border border-brand-500/30 bg-brand-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-600"
              title="Punto de venta Select: la red recomendada por Blindex"
            >
              <ShieldCheck className="h-3 w-3 fill-brand-500 text-brand-500" />
              Select
            </span>
          )}
        </div>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-ink/60">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
          <span>
            {punto.direccion}
            <span className="text-ink/45"> · {punto.localidad}</span>
          </span>
        </p>
      </div>

      <div className="mt-4">
        {waHref ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContacto("whatsapp", punto, "home")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:brightness-110"
            aria-label={`Contactar por WhatsApp a ${punto.nombre}`}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        ) : telHref ? (
          <a
            href={telHref}
            onClick={() => trackContacto("llamada", punto, "home")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
            aria-label={`Llamar a ${punto.nombre}`}
          >
            <Phone className="h-4 w-4" />
            {punto.telefono}
          </a>
        ) : null}
      </div>
    </article>
  );
}
