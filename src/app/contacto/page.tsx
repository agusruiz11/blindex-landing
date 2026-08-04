import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Wrench, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";
import FormularioContacto from "@/components/contacto/FormularioContacto";

export const metadata: Metadata = {
  title: "Contacto — Blindex",
  description:
    "Escribinos para consultas generales, asistencia técnica o pedidos de presupuesto de vidrio de seguridad Blindex.",
};

const ATAJOS = [
  {
    icon: MapPin,
    titulo: "Buscás dónde comprar",
    texto: "Encontrá el punto de venta Blindex más cercano.",
    href: "/puntos-de-venta",
    cta: "Ver puntos de venta",
  },
  {
    icon: FileText,
    titulo: "Necesitás documentación",
    texto: "Boletines técnicos, normativa y guías de especificación.",
    href: "/asesoramiento",
    cta: "Ir a asesoramiento",
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <span className="chip">Contacto</span>
          <h1 className="h-display mt-4 max-w-3xl text-4xl sm:text-5xl">
            ¿Tenés preguntas? Te escuchamos.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            Consultas comerciales, asistencia técnica para tu obra o pedidos de
            presupuesto. Escribinos y te respondemos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <FormularioContacto />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-500/25 bg-brand-50 p-6">
                <Wrench className="h-6 w-6 text-brand-600" />
                <h2 className="h-display mt-3 text-lg">Asistencia técnica</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Si estás definiendo el vidriado de una obra, nuestro equipo te
                  ayuda a elegir el producto, calcular espesores y cumplir con la
                  normativa vigente. Elegí{" "}
                  <strong className="font-semibold">Asistencia técnica</strong> en
                  el formulario.
                </p>
              </div>

              {ATAJOS.map(({ icon: Icon, titulo, texto, href, cta }) => (
                <div
                  key={href}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-ink-500" />
                  <h2 className="h-display mt-3 text-lg">{titulo}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{texto}</p>
                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-600 hover:text-brand-600"
                  >
                    {cta} →
                  </Link>
                </div>
              ))}

              {/* TODO: reemplazar por los datos oficiales cuando los mande el
                  cliente — WhatsApp, mail y redes. Pedido en el mail del 31/07. */}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
