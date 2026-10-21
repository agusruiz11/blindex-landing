import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { exigirPagina } from "@/lib/paginas";

// Ruta oculta: no se linkea desde el menú ni el footer, y no se indexa.
//
// 19/10/2026: queda como "Próximamente" hasta que la marca defina módulos,
// cuestionarios y certificado (mail de Manuel del 15/10: "la ocultamos o la
// dejamos como Próximamente"). Antes, quien entraba por URL veía módulos de
// ejemplo y un formulario de inscripción que funcionaba.
//
// Para reactivarla, volver a la versión anterior de este archivo (git log):
// los módulos están en src/paises/<pais>/capacitaciones.ts y los componentes
// ModuloVideo y FormularioInscripcion siguen en components/capacitaciones/.
export const metadata: Metadata = {
  title: "Capacitación Blindex para vidrieros",
  description: "Capacitación para vidrieros e instaladores de la red Blindex.",
  robots: { index: false, follow: false },
};

export default function CapacitacionesPage() {
  exigirPagina("capacitaciones");
  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">
              <GraduationCap className="h-3.5 w-3.5" />
              Para vidrieros e instaladores
            </span>
            <h1 className="h-display mt-4 text-4xl sm:text-5xl leading-tight">
              Capacitación oficial Blindex.
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              Estamos preparando un espacio para que los profesionales del
              vidrio se certifiquen en la instalación correcta de productos
              Blindex. Muy pronto vas a poder inscribirte desde acá.
            </p>
            <div className="mt-6 inline-flex items-center rounded-full bg-ink-50 px-4 py-2 text-sm font-medium text-ink-700">
              Próximamente
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/capacitacion-online" className="btn-primary">
                Ver la capacitación online
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contacto" className="btn-outline">
                Hacer una consulta
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
