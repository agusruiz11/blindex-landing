import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaPuntos() {
  return (
    // El corte seco gris→blanco caía justo en el borde superior de la card y
    // la partía al medio. Con el degradé la sección arranca en el mismo gris
    // con el que termina Boletines —no hay línea— y se apaga a blanco hacia
    // abajo, que es donde el footer necesita el blanco. La card sigue siendo
    // blanca sobre gris, que es lo que la hace leer como card.
    // El pb va recortado: con el padding completo de `section` más el margen
    // del footer quedaban 200px de blanco muerto entre la card y el footer.
    <section className="section bg-gradient-to-b from-paper via-paper to-white pt-0 pb-12 sm:pb-16">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-500 text-white shadow-lg shadow-ink-500/25">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h2 className="h-display text-2xl text-ink sm:text-3xl">
                  Encontrá tu punto de venta Blindex.
                </h2>
                <p className="mt-2 max-w-lg text-ink/65">
                  Distribuidores autorizados en Argentina, Bolivia, Paraguay
                  y Uruguay, listos para asesorarte y garantizar el vidrio
                  original.
                </p>
              </div>
            </div>

            <Link href="/puntos-de-venta" className="btn-primary shrink-0 whitespace-nowrap">
              Ver puntos de venta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
