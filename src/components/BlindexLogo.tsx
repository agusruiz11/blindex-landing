import Image from "next/image";

/**
 * Logo oficial de Blindex, extraído de los .ai del manual de marca.
 *
 * El isologotipo es el cuadrado rojo con "BLINDEX" en diagonal. El lockup
 * completo le suma el claim "Seguridad para tu hogar."
 *
 * Los SVG están recortados al contenido real: la altura que se pida acá es
 * la que va a medir el dibujo en pantalla, sin aire de sobra.
 *
 * `light` usa la versión en negativo: el claim pasa a blanco y el cuadrado
 * rojo se mantiene, que es como el manual lo resuelve sobre fondo oscuro.
 */
type Props = {
  /** Clases de altura. El ancho se ajusta solo. */
  className?: string;
  /** Para fondos oscuros (footer, navbar sobre el hero). */
  light?: boolean;
  /** "completo" incluye el claim; "isotipo" es sólo el cuadrado rojo. */
  variante?: "completo" | "isotipo";
};

export default function BlindexLogo({
  className = "h-11 w-auto sm:h-12",
  light = false,
  variante = "completo",
}: Props) {
  const esIsotipo = variante === "isotipo";

  return (
    <Image
      src={
        esIsotipo
          ? "/logos/blindex-isotipo.svg"
          : light
            ? "/logos/blindex-negativo.svg"
            : "/logos/blindex.svg"
      }
      alt={esIsotipo ? "Blindex" : "Blindex — Seguridad para tu hogar"}
      // Proporciones reales del recorte: el lockup es 4.66:1, el isotipo 1:1.
      width={esIsotipo ? 100 : 466}
      height={100}
      priority
      unoptimized
      className={className}
    />
  );
}
