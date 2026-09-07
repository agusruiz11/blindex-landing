// Redes oficiales de Blindex Argentina. Son las mismas que linkea el sitio
// actual (blindex.com.ar), relevadas el 07/09/2026.
//
// LinkedIn no va: Blindex no tiene página propia (la que existe con ese nombre
// es de una empresa colombiana sin relación). La de la empresa madre es
// "Vidriería Argentina S.A." (linkedin.com/company/vidrieria-argentina-s-a-);
// si el cliente quiere sumarla, se agrega acá y el Footer la toma sola.
import { Facebook, Instagram, Youtube, type LucideIcon } from "lucide-react";

export const socials: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Instagram", href: "https://www.instagram.com/blindex_intl/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/Blindex.intl/", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC4PLj-c6n5o9VJg4MqIwpIw", Icon: Youtube },
];
