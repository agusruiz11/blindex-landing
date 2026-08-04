"use client";

import { forwardRef } from "react";
import { MessageCircle, MapPin, Phone, Navigation, ShieldCheck, Globe } from "lucide-react";
import type { PuntoDeVenta } from "@/data/puntosDeVenta";
import { trackWhatsAppClick } from "@/lib/tracking";

type Props = {
  punto: PuntoDeVenta;
  active: boolean;
  onSelect: () => void;
};

const CardPunto = forwardRef<HTMLElement, Props>(function CardPunto(
  { punto, active, onSelect },
  ref
) {
  // La data real todavía no trae WhatsApp por sucursal (el sitio actual sólo
  // publica fijos). Cuando no hay, la card promueve el teléfono en su lugar
  // en vez de mostrar un botón roto.
  const waHref = punto.whatsapp
    ? `https://wa.me/${punto.whatsapp}?text=${encodeURIComponent(
        "Hola, los contacto desde la web de Blindex"
      )}`
    : undefined;
  const mapsHref = `https://www.google.com/maps/dir/?api=1&destination=${punto.lat},${punto.lng}`;
  const telHref = punto.telefono ? `tel:${punto.telefono.replace(/[\s()]/g, "")}` : undefined;
  // Cuántos botones secundarios hay, para no dejar media fila vacía.
  const secundarios = 1 + ((waHref && telHref) || (!waHref && punto.web) ? 1 : 0);

  return (
    <article
      ref={ref}
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 pl-6 transition-all duration-300
        ${
          active
            ? "border-ink-500 bg-ink-50/40 shadow-lg shadow-ink-500/10 ring-1 ring-ink-500/30"
            : "border-slate-200 bg-white hover:border-ink-200 hover:shadow-md"
        }`}
    >
      {active && (
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-ink-400 to-ink-600"
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="h-display text-lg text-ink leading-tight">
              {punto.nombre}
            </h3>
            {punto.select && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 border border-brand-500/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                <ShieldCheck className="h-3 w-3 fill-brand-500 text-brand-500" />
                Punto de venta Select
              </span>
            )}
          </div>
          <div className="mt-2 flex items-start gap-1.5 text-sm text-ink/70">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-ink-500" />
            <div>
              <div>{punto.direccion}</div>
              <div className="text-ink/55">
                {punto.localidad} · {punto.provincia}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {waHref ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              trackWhatsAppClick(punto.id);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 hover:brightness-110 transition"
            aria-label={`Contactar por WhatsApp a ${punto.nombre}`}
          >
            <MessageCircle className="h-4 w-4" />
            Contactar por WhatsApp
          </a>
        ) : telHref ? (
          <a
            href={telHref}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-ink-900/20 hover:bg-ink-800 transition"
            aria-label={`Llamar a ${punto.nombre}`}
          >
            <Phone className="h-4 w-4" />
            {punto.telefono}
          </a>
        ) : null}

        <div className={secundarios > 1 ? "grid grid-cols-2 gap-2" : "grid gap-2"}>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-ink hover:border-ink-300 hover:text-ink-700 transition"
            aria-label={`Cómo llegar a ${punto.nombre}`}
          >
            <Navigation className="h-3.5 w-3.5" />
            Cómo llegar
          </a>
          {waHref && telHref && (
            <a
              href={telHref}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-ink hover:border-ink-300 hover:text-ink-700 transition"
              aria-label={`Llamar a ${punto.nombre}`}
            >
              <Phone className="h-3.5 w-3.5" />
              Llamar
            </a>
          )}
          {!waHref && punto.web && (
            <a
              href={punto.web}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-ink hover:border-ink-300 hover:text-ink-700 transition"
              aria-label={`Visitar el sitio de ${punto.nombre}`}
            >
              <Globe className="h-3.5 w-3.5" />
              Visitar web
            </a>
          )}
        </div>
      </div>
    </article>
  );
});

export default CardPunto;
