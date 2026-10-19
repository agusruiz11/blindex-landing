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

export default function Home() {
  return (
    <>
      <Hero />
      <PorQueBlindex />
      <Productos />
      {/* Zócalo de producto destacado: pedido de Estefi (VASA) del 15/10/2026,
          con maqueta. Va entre la grilla de productos y Autenticidad. */}
      <ProductoDestacado />
      {/* Orden pedido por el cliente (mail del 04/09/2026): "Exigí Blindex
          original" va antes que "Nuestras obras". Después de mostrar QUÉ vende
          la marca, primero el mensaje de autenticidad y recién después la
          prueba de que funciona. */}
      <Autenticidad />
      {/* Va pegada a Autenticidad a propósito: esa sección dice "exigí Blindex
          original" y ésta contesta dónde conseguirlo: la red exclusiva es la
          prueba concreta de autenticidad. Si se vuelve a mover Autenticidad,
          esta sección se mueve con ella. */}
      <RedDistribuidores />
      {/* Puntos de venta debajo de los distribuidores: pedido de Blindex del
          22/09/2026. La red dice quién distribuye; esto, dónde se compra. */}
      <PuntosHome />
      <Obras />
      <EligeTuVidrio />
      <Boletines />
      <CtaPuntos />
      {/* Evento seccion_vista por cada <section id> de la home. */}
      <TrackSecciones />
    </>
  );
}
