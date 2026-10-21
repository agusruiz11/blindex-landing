// Redes de Blindex Paraguay.
//
// ⚠️ A CONFIRMAR: el sitio actual de Paraguay linkea redes de Argentina
// (Facebook "BlindexArgentina", Twitter "BlindexArg") y el canal de YouTube
// de la marca. Mientras no confirmen redes propias, van las internacionales,
// las mismas que usa el sitio argentino.
import { Facebook, Instagram, Youtube, type LucideIcon } from "lucide-react";

export const socials: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Instagram", href: "https://www.instagram.com/blindex_intl/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/Blindex.intl/", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC4PLj-c6n5o9VJg4MqIwpIw", Icon: Youtube },
];
