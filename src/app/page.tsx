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
      {/* Obras va acá a propósito: después de mostrar QUÉ vende la marca, la
          prueba de que funciona. Es el activo más fuerte y en el sitio actual
          está enterrado fuera del menú. */}
      <Obras />
      <Autenticidad />
      {/* Va pegada a Autenticidad a propósito: esa sección dice "exigí Blindex
          original" y ésta contesta dónde conseguirlo. La red exclusiva ES la
          prueba de autenticidad, no un listado más. */}
      <RedDistribuidores />
      <EligeTuVidrio />
      <Boletines />
      <CtaPuntos />
    </>
  );
}
