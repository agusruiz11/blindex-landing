import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────────────────
// TOKENS DE MARCA — PLACEHOLDER
// Todo el esquema de color/tipografía vive acá. Cuando llegue el manual de
// marca real de Blindex, alcanza con reemplazar estos valores (y los de
// :root en globals.css) para que todo el sitio se actualice.
// ─────────────────────────────────────────────────────────────────────────
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Azul profundo — color principal de marca. Transmite solidez y
        // confianza (seguridad), no liviandad.
        brand: {
          50: "#EAF1FB",
          100: "#CFE0F5",
          200: "#9FC1EB",
          300: "#6FA2E1",
          400: "#4483D2",
          500: "#1C5CB8",
          600: "#154794",
          700: "#0F3670",
          800: "#0A2650",
          900: "#061A38",
        },
        // Acento cálido — se usa con moderación para CTAs de alta jerarquía
        // y para la sección de autenticidad ("exigí Blindex original").
        accent: {
          400: "#F2A93B",
          500: "#E8951A",
          600: "#C77A0E",
        },
        ink: {
          DEFAULT: "#0B1420",
          soft: "#1B2A3E",
        },
        paper: "#F6F8FB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.5) inset, 0 10px 30px -12px rgba(6,26,56,0.35)",
        glow: "0 0 0 1px rgba(28,92,184,0.35), 0 20px 60px -20px rgba(28,92,184,0.45)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(28,92,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,92,184,0.07) 1px, transparent 1px)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
