// Isotipo placeholder (escudo = seguridad). Reemplazar por el logo real de
// Blindex cuando llegue el manual de marca.
export default function BlindexLogo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 36"
        aria-hidden
        className={`h-7 w-7 sm:h-8 sm:w-8 ${light ? "text-white" : "text-brand-600"}`}
      >
        <path
          d="M16 1 L30 7 V17 C30 26 24 32 16 35 C8 32 2 26 2 17 V7 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M11 17.5 L14.5 21 L21.5 13.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`h-display text-xl sm:text-2xl tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Blindex
      </span>
    </span>
  );
}
