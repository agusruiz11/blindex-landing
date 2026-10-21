import type { Metadata } from "next";
import PuntosClient from "@/components/puntos/PuntosClient";

export const metadata: Metadata = {
  title: "Puntos de venta — Blindex",
  description:
    "Encontrá el punto de venta Blindex más cercano. Vidrierías y distribuidores autorizados en todo el país.",
};

// `?provincia=Santa%20Fe` llega desde la sección de puntos de venta de la
// home y deja el filtro ya puesto. Sin el parámetro, arranca en "todas".
export default function PuntosDeVentaPage({
  searchParams,
}: {
  searchParams?: { provincia?: string; linea?: string };
}) {
  return (
    <PuntosClient
      provinciaInicial={searchParams?.provincia}
      lineaInicial={searchParams?.linea}
    />
  );
}
