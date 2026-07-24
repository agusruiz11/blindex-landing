import Hero from "@/components/home/Hero";
import PorQueBlindex from "@/components/home/PorQueBlindex";
import Productos from "@/components/home/Productos";
import Autenticidad from "@/components/home/Autenticidad";
import EligeTuVidrio from "@/components/home/EligeTuVidrio";
import Boletines from "@/components/home/Boletines";
import CtaPuntos from "@/components/home/CtaPuntos";

export default function Home() {
  return (
    <>
      <Hero />
      <PorQueBlindex />
      <Productos />
      <Autenticidad />
      <EligeTuVidrio />
      <Boletines />
      <CtaPuntos />
    </>
  );
}
