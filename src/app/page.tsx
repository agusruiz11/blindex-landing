import Hero from "@/components/home/Hero";
import PorQueBlindex from "@/components/home/PorQueBlindex";
import Productos from "@/components/home/Productos";
import ProductoDestacado from "@/components/home/ProductoDestacado";
import Obras from "@/components/home/Obras";
import Autenticidad from "@/components/home/Autenticidad";
import RedDistribuidores from "@/components/home/RedDistribuidores";
import PuntosHome from "@/components/home/PuntosHome";
import EligeTuVidrio from "@/components/home/EligeTuVidrio";
import Boletines from "@/components/home/Boletines";
import CtaPuntos from "@/components/home/CtaPuntos";
import TrackSecciones from "@/components/TrackSecciones";
import type { SeccionHome } from "@/paises/tipos";
import { sitio } from "@pais/sitio";

// Qué secciones van y en qué orden lo decide cada país (sitio.home). El
// porqué de cada posición está comentado ahí.
const SECCIONES: Record<SeccionHome, () => JSX.Element> = {
  hero: Hero,
  porQue: PorQueBlindex,
  productos: Productos,
  productoDestacado: ProductoDestacado,
  autenticidad: Autenticidad,
  redDistribuidores: RedDistribuidores,
  puntos: PuntosHome,
  obras: Obras,
  elegiTuVidrio: EligeTuVidrio,
  boletines: Boletines,
  ctaPuntos: CtaPuntos,
};

export default function Home() {
  return (
    <>
      {sitio.home.map((id) => {
        const Seccion = SECCIONES[id];
        return <Seccion key={id} />;
      })}
      {/* Evento seccion_vista por cada <section id> de la home. */}
      <TrackSecciones />
    </>
  );
}
