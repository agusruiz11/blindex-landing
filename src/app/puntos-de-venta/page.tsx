import type { Metadata } from "next";
import PuntosClient from "@/components/puntos/PuntosClient";

export const metadata: Metadata = {
  title: "Puntos de venta — Blindex",
  description:
    "Encontrá el punto de venta Blindex más cercano. Vidrierías y distribuidores autorizados en todo el país.",
};

export default function PuntosDeVentaPage() {
  return <PuntosClient />;
}
