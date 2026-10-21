import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { sitio } from "@pais/sitio";

// El manual pide Myriad Pro (Light/Regular/Bold), con Arial de alternativa
// para digital. Source Sans 3 es la humanista open source de Adobe, misma
// familia de diseño que Myriad, y no necesita licencia.
// Ver docs/manual-de-marca.md
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

// Dominio, descripciones e idioma salen del país (src/paises/<pais>/sitio.ts).
export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: "Blindex — Seguridad en cada vidrio",
    template: "%s",
  },
  description: sitio.descripcion,
  openGraph: {
    type: "website",
    locale: sitio.locale,
    siteName: "Blindex",
    title: "Blindex — Seguridad en cada vidrio",
    description: sitio.descripcionCompartir,
    // TODO: reemplazar por la pieza que defina la marca (1200×630).
    images: ["/img/og/blindex-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  // El isotipo (cuadrado rojo con BLINDEX en diagonal) funciona muy bien como
  // favicon: se reconoce a 16px porque es una mancha de color, no un símbolo.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#262626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={sitio.idioma} className={sourceSans.variable}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Botón flotante de WhatsApp sacado el 21/10/2026 a pedido de la marca. El componente sigue en components/WhatsAppFloat.tsx. */}
        <Analytics />
      </body>
    </html>
  );
}
