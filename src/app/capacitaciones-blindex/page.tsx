import type { Metadata } from "next";
import { GraduationCap, Award } from "lucide-react";
import { modulosCapacitacion } from "@/data/capacitaciones";
import ModuloVideo from "@/components/capacitaciones/ModuloVideo";
import FormularioInscripcion from "@/components/capacitaciones/FormularioInscripcion";
import Reveal from "@/components/Reveal";

// Ruta oculta: no se linkea desde el menú ni el footer, y no se indexa.
export const metadata: Metadata = {
  title: "Capacitación Blindex para vidrieros",
  description: "Capacitación para vidrieros e instaladores de la red Blindex.",
  robots: { index: false, follow: false },
};

export default function CapacitacionesPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <div className="container-x">
        <Reveal>
          <span className="chip">
            <GraduationCap className="h-3.5 w-3.5" />
            Para vidrieros e instaladores
          </span>
          <h1 className="h-display mt-4 max-w-2xl text-4xl sm:text-5xl leading-tight">
            Capacitación oficial Blindex.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Un espacio para profesionales del vidrio que quieren certificarse
            en la instalación correcta de productos Blindex. Mirá los
            módulos, completá el formulario y la marca revisará tu
            inscripción para emitir tu certificado.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-2.5 text-sm text-brand-700">
            <Award className="h-4 w-4" />
            Al finalizar y ser aprobado, recibís el certificado Blindex.
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {modulosCapacitacion.map((m, i) => (
            <ModuloVideo key={m.id} modulo={m} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <FormularioInscripcion />
        </div>
      </div>
    </div>
  );
}
