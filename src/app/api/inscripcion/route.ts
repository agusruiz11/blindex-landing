import { NextResponse } from "next/server";
import { clean, emailValido, enviarMail } from "@/lib/mail";

// Envío del formulario de inscripción de /capacitaciones-blindex.
// Configuración y variables de entorno en src/lib/mail.ts.
//
// Alcance acordado con el cliente: la inscripción llega por mail a la marca
// con los datos y las respuestas del cuestionario. No hay autocorrección ni
// certificado automático: la marca revisa y emite el certificado a mano.
// Cuando Ine y Estefanía definan los módulos y preguntas reales, este handler
// no cambia; sólo cambia `src/data/capacitaciones.ts` y el cuestionario.

export const runtime = "nodejs";

type Payload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  localidad?: string;
  provincia?: string;
  /** Pregunta → respuesta elegida, con el texto de la pregunta como clave. */
  respuestas?: Record<string, string>;
  website?: string; // honeypot: las personas no lo ven, los bots lo completan
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ ok: true });

  const nombre = clean(body.nombre, 120);
  const email = clean(body.email, 160);
  const telefono = clean(body.telefono, 60);
  const empresa = clean(body.empresa, 120);
  const localidad = clean(body.localidad, 120);
  const provincia = clean(body.provincia, 60);

  const respuestas: [string, string][] =
    body.respuestas && typeof body.respuestas === "object"
      ? Object.entries(body.respuestas)
          .slice(0, 30)
          .map(([p, r]) => [clean(p, 300), clean(r, 300)] as [string, string])
          .filter(([p, r]) => p && r)
      : [];

  if (!nombre || !email || !telefono || !empresa || !localidad || !provincia) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }
  if (!emailValido(email)) {
    return NextResponse.json({ ok: false, error: "El email no es válido." }, { status: 400 });
  }
  if (respuestas.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Falta completar el cuestionario." },
      { status: 400 }
    );
  }

  const lineas = [
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Teléfono: ${telefono}`,
    `Vidriería / empresa: ${empresa}`,
    `Localidad: ${localidad}`,
    `Provincia: ${provincia}`,
    "",
    "Cuestionario:",
    ...respuestas.flatMap(([p, r], i) => [`${i + 1}. ${p}`, `   Respuesta: ${r}`]),
    "",
    "Enviado desde el formulario de inscripción a capacitaciones de blindex.com.ar",
  ];

  const r = await enviarMail({
    subject: `[Web Blindex] Inscripción a capacitación: ${nombre}`,
    text: lineas.join("\n"),
    replyTo: email,
  });

  if (!r.ok) return NextResponse.json({ ok: false, error: r.error }, { status: r.status });
  return NextResponse.json({ ok: true });
}
