import { Resend } from "resend";

// Envío de mails desde los formularios del sitio (contacto e inscripción a
// capacitaciones). Un solo lugar para la configuración, así los dos route
// handlers comparten variables de entorno y manejo de errores.
//
// Variables (Vercel → Settings → Environment Variables, y .env local; ver
// .env.example):
//   RESEND_API_KEY   clave de Resend (obligatoria)
//   CONTACT_TO       casilla que recibe consultas e inscripciones. Definida
//                    por el cliente el 04/09/2026: estefania.cruz@ar.nsg.com
//   CONTACT_FROM     remitente. Tiene que ser de un dominio verificado en
//                    Resend: "Blindex Web <web@posicionarte.online>" hasta que
//                    se verifique blindex.com.ar.
//
// Sin RESEND_API_KEY el envío falla con error explícito y el formulario lo
// muestra: preferible a un "enviado" que no envía nada.

export const MAIL_TO = process.env.CONTACT_TO ?? "estefania.cruz@ar.nsg.com";
export const MAIL_FROM =
  process.env.CONTACT_FROM ?? "Blindex Web <onboarding@resend.dev>";

/** Recorta y limpia un valor que vino del cliente. */
export const clean = (v: unknown, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export const emailValido = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

type Envio = {
  subject: string;
  text: string;
  replyTo?: string;
};

/**
 * Envía un mail a la casilla de la marca. Devuelve `{ ok: true }` o
 * `{ ok: false, error, status }` listo para responder desde el route handler.
 */
export async function enviarMail({ subject, text, replyTo }: Envio) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[mail] Falta RESEND_API_KEY");
    return { ok: false as const, error: "El envío no está configurado.", status: 500 };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: MAIL_FROM,
    to: [MAIL_TO],
    replyTo,
    subject,
    text,
  });

  if (error) {
    console.error("[mail] Resend:", error);
    return {
      ok: false as const,
      error: "No pudimos enviar el mensaje. Probá de nuevo en unos minutos.",
      status: 502,
    };
  }

  return { ok: true as const };
}
