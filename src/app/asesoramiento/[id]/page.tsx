import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { notas } from "@/data/notas";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return notas.map((n) => ({ id: n.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const n = notas.find((x) => x.id === params.id);
  if (!n) return {};
  return { title: `${n.titulo} — Blindex`, description: n.resumen };
}

export default function NotaPage({ params }: Props) {
  const nota = notas.find((n) => n.id === params.id);
  if (!nota) notFound();

  const otras = notas.filter((n) => n.id !== nota.id);

  return (
    <div className="pt-28 pb-24">
      <div className="container-x">
        <Reveal>
          <Link
            href="/asesoramiento"
            className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Asesoramiento técnico
          </Link>

          <article className="mt-8 max-w-3xl">
            <h1 className="h-display text-3xl sm:text-4xl">{nota.titulo}</h1>
            <p className="mt-4 text-lg text-ink/60">{nota.resumen}</p>
            <div className="mt-10 space-y-5">
              {nota.parrafos.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal>
          <aside className="mt-16 max-w-3xl border-t border-slate-200 pt-8">
            <h2 className="h-display text-lg">Seguí leyendo</h2>
            <ul className="mt-4 space-y-2">
              {otras.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/asesoramiento/${n.id}`}
                    className="text-ink-600 underline-offset-4 hover:text-brand-600 hover:underline"
                  >
                    {n.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
