import { NextResponse } from "next/server";
import { clean, emailValido, enviarMail } from "@/lib/mail";

// Envío del formulario de /contacto. Configuración y variables de entorno en
// src/lib/mail.ts.
//
// Los tres motivos (consulta general, asistencia técnica, presupuesto) van hoy
// a la misma casilla, con el motivo en el asunto para que lo filtren del lado
// de la marca. Si más adelante definen una casilla técnica aparte, acá es
// donde se rutea por `motivo`.

export const runtime = "nodejs";

const MOTIVOS: Record<string, string> = {
  consulta: "Consulta general",
  asistencia: "Asistencia técnica",
  presupuesto: "Pedido de presupuesto",
};

type Payload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  motivo?: string;
  mensaje?: string;
  website?: string; // honeypot: las personas no lo ven, los bots lo completan
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: si viene completo, respondemos ok sin enviar nada.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const nombre = clean(body.nombre, 120);
  const email = clean(body.email, 160);
  const telefono = clean(body.telefono, 60);
  const empresa = clean(body.empresa, 120);
  const motivoId = clean(body.motivo, 30);
  const mensaje = clean(body.mensaje, 3000);
  const motivo = MOTIVOS[motivoId] ?? MOTIVOS.consulta;

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }
  if (!emailValido(email)) {
    return NextResponse.json({ ok: false, error: "El email no es válido." }, { status: 400 });
  }

  const lineas = [
    `Motivo: ${motivo}`,
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    telefono && `Teléfono: ${telefono}`,
    empresa && `Empresa o vidriería: ${empresa}`,
    "",
    "Mensaje:",
    mensaje,
    "",
    "Enviado desde el formulario de contacto de blindex.com.ar",
  ].filter((l): l is string => typeof l === "string");

  const r = await enviarMail({
    subject: `[Web Blindex] ${motivo}: ${nombre}`,
    text: lineas.join("\n"),
    replyTo: email,
  });

  if (!r.ok) return NextResponse.json({ ok: false, error: r.error }, { status: r.status });
  return NextResponse.json({ ok: true });
}
