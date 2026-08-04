"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

/**
 * Dos motivos de contacto en un solo formulario: la consulta general y la
 * asistencia técnica, que en el sitio actual son dos canales separados.
 * El campo `motivo` es lo que permite rutearlos después.
 */
const MOTIVOS = [
  { id: "consulta", label: "Consulta general" },
  { id: "asistencia", label: "Asistencia técnica" },
  { id: "presupuesto", label: "Pedido de presupuesto" },
] as const;

type Estado = "idle" | "enviando" | "enviado";

export default function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    motivo: "consulta",
    mensaje: "",
  });

  const set = (k: keyof typeof datos) => (v: string) =>
    setDatos((d) => ({ ...d, [k]: v }));

  const completo =
    datos.nombre.trim() && datos.email.trim() && datos.mensaje.trim();

  function handleSubmit() {
    if (!completo) return;
    setEstado("enviando");
    // TODO: integrar → enviar a la casilla que defina Blindex (Resend / SMTP)
    // y guardar el lead. El campo `motivo` decide el destinatario:
    // asistencia técnica va al equipo técnico, el resto a comercial.
    // Pendiente del cliente: a qué mail llega cada uno.
    setTimeout(() => setEstado("enviado"), 600);
  }

  if (estado === "enviado") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-500" />
        <h3 className="h-display mt-4 text-xl">¡Recibimos tu consulta!</h3>
        <p className="mt-2 text-ink/65">
          Te vamos a responder a la brevedad al correo que nos dejaste.
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="motivo" className="mb-1.5 block text-sm font-medium text-ink">
            ¿En qué te podemos ayudar?
          </label>
          <select
            id="motivo"
            value={datos.motivo}
            onChange={(e) => set("motivo")(e.target.value)}
            className={input}
          >
            {MOTIVOS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-ink">
            Nombre y apellido *
          </label>
          <input
            id="nombre"
            value={datos.nombre}
            onChange={(e) => set("nombre")(e.target.value)}
            className={input}
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={datos.email}
            onChange={(e) => set("email")(e.target.value)}
            className={input}
            placeholder="juan@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-ink">
            Teléfono
          </label>
          <input
            id="telefono"
            value={datos.telefono}
            onChange={(e) => set("telefono")(e.target.value)}
            className={input}
            placeholder="11 5555-5555"
          />
        </div>

        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-ink">
            Empresa o vidriería
          </label>
          <input
            id="empresa"
            value={datos.empresa}
            onChange={(e) => set("empresa")(e.target.value)}
            className={input}
            placeholder="Opcional"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-ink">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            rows={5}
            value={datos.mensaje}
            onChange={(e) => set("mensaje")(e.target.value)}
            className={`${input} resize-y`}
            placeholder="Contanos qué necesitás. Si es una consulta técnica, sumá el tipo de obra y las medidas."
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!completo || estado === "enviando"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-45"
      >
        <Send className="h-4 w-4" />
        {estado === "enviando" ? "Enviando…" : "Enviar consulta"}
      </button>
      <p className="mt-3 text-center text-xs text-ink/45">
        Los campos con * son obligatorios.
      </p>
    </div>
  );
}
