// Punto único de tracking de contactos por WhatsApp, por punto de venta.
// Centralizado acá para que sea fácil de cablear a analítica real.
export function trackWhatsAppClick(puntoId: string) {
  console.log(`[tracking] whatsapp_click — punto_id=${puntoId}`);
  // TODO: enviar evento a GA4 / Meta con el id del punto
}
