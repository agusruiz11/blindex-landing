import Hero from "@/components/home/Hero";
import PorQueBlindex from "@/components/home/PorQueBlindex";
import Productos from "@/components/home/Productos";
import Obras from "@/components/home/Obras";
import Autenticidad from "@/components/home/Autenticidad";
import RedDistribuidores from "@/components/home/RedDistribuidores";
import EligeTuVidrio from "@/components/home/EligeTuVidrio";
import Boletines from "@/components/home/Boletines";
import CtaPuntos from "@/components/home/CtaPuntos";

export default function Home() {
  return (
    <>
      <Hero />
      <PorQueBlindex />
      <Productos />
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
      <Obras />
      <EligeTuVidrio />
      <Boletines />
      <CtaPuntos />
    </>
  );
}
