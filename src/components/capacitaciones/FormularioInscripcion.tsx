"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Reveal from "@/components/Reveal";

type Respuestas = Record<string, string>;

type DatosInscripcion = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  localidad: string;
  provincia: string;
  respuestas: Respuestas;
};

const preguntas = [
  {
    id: "p1",
    texto: "¿Qué distingue principalmente al vidrio templado del vidrio común?",
    opciones: [
      "Se rompe en fragmentos pequeños y sin filo",
      "Es más liviano",
      "Es más económico",
      "No se puede cortar",
    ],
  },
  {
    id: "p2",
    texto: "¿Qué función cumple la lámina de PVB en el vidrio laminado?",
    opciones: [
      "Le da color al vidrio",
      "Retiene los fragmentos ante un impacto",
      "Reduce el peso del vidrio",
      "Evita la condensación",
    ],
  },
  {
    id: "p3",
    texto: "¿Qué norma IRAM aplica al Doble Vidriado Hermético (DVH)?",
    opciones: ["IRAM 12598-1", "IRAM 3541", "IRAM 62381", "IRAM 11549"],
  },
  {
    id: "p4",
    texto: "Ante la duda sobre si un vidrio es Blindex original, ¿qué corresponde hacer?",
    opciones: [
      "Verificarlo con un punto de venta autorizado",
      "Asumir que es original si es azulado",
      "Consultarlo en un foro",
      "No es relevante para la instalación",
    ],
  },
];

const initialData: DatosInscripcion = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  localidad: "",
  provincia: "",
  respuestas: {},
};

// Única función de envío del formulario, stubbeada para la demo.
// TODO: integrar → guardar en Supabase (tabla exportable) + enviar mail de
// aviso a la marca (Resend). La emisión del certificado la hace la marca
// manualmente, fuera de este flujo.
function handleSubmit(datos: DatosInscripcion) {
  console.log("[inscripcion-capacitacion]", datos);
}

export default function FormularioInscripcion() {
  const [datos, setDatos] = useState<DatosInscripcion>(initialData);
  const [enviado, setEnviado] = useState(false);

  const set = (campo: keyof Omit<DatosInscripcion, "respuestas">) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const setRespuesta = (preguntaId: string, opcion: string) =>
    setDatos((d) => ({ ...d, respuestas: { ...d.respuestas, [preguntaId]: opcion } }));

  const camposCompletos =
    datos.nombre.trim() &&
    datos.email.trim() &&
    datos.telefono.trim() &&
    datos.empresa.trim() &&
    datos.localidad.trim() &&
    datos.provincia.trim() &&
    preguntas.every((p) => datos.respuestas[p.id]);

  if (enviado) {
    return (
      <Reveal>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
          <h3 className="h-display mt-4 text-xl text-ink">
            ¡Recibimos tu inscripción!
          </h3>
          <p className="mt-2 text-ink/70">
            La marca revisará tus datos y te contactará para emitir el
            certificado.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h3 className="h-display text-xl text-ink">Formulario de inscripción</h3>
        <p className="mt-1.5 text-sm text-ink/60">
          Completá tus datos y el cuestionario para avanzar en la
          certificación Blindex.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Nombre y apellido</span>
            <input
              type="text"
              value={datos.nombre}
              onChange={set("nombre")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Juan Pérez"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Email</span>
            <input
              type="email"
              value={datos.email}
              onChange={set("email")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="juan@vidrieria.com"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Teléfono</span>
            <input
              type="tel"
              value={datos.telefono}
              onChange={set("telefono")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="+54 11 4000-0000"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Vidriería / empresa</span>
            <input
              type="text"
              value={datos.empresa}
              onChange={set("empresa")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Vidriería Pérez"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Localidad</span>
            <input
              type="text"
              value={datos.localidad}
              onChange={set("localidad")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Rosario"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink/80">Provincia</span>
            <input
              type="text"
              value={datos.provincia}
              onChange={set("provincia")}
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Santa Fe"
            />
          </label>
        </div>

        <div className="mt-8 space-y-6">
          <h4 className="h-display text-base text-ink">Cuestionario</h4>
          {preguntas.map((p, i) => (
            <fieldset key={p.id}>
              <legend className="text-sm font-medium text-ink/80">
                {i + 1}. {p.texto}
              </legend>
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {p.opciones.map((op) => (
                  <label
                    key={op}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm transition ${
                      datos.respuestas[p.id] === op
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-slate-200 text-ink/75 hover:border-brand-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name={p.id}
                      value={op}
                      checked={datos.respuestas[p.id] === op}
                      onChange={() => setRespuesta(p.id, op)}
                      className="accent-brand-500"
                    />
                    {op}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <button
          type="button"
          disabled={!camposCompletos}
          onClick={() => {
            handleSubmit(datos);
            setEnviado(true);
          }}
          className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Enviar inscripción
        </button>
      </div>
    </Reveal>
  );
}
