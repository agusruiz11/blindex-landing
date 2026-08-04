import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────────────────
// TOKENS DE MARCA — BLINDEX
//
// Valores OFICIALES del manual de marca (recibido 03/08/2026). El manual
// declara el RGB como el sistema para medios digitales, así que estos son
// los que mandan. Detalle en docs/manual-de-marca.md
//
// El sistema es: negro/gris como color ESTRUCTURAL, rojo Blindex como ACENTO
// de alto impacto, y un color propio por línea de producto. Es como la marca
// se usa en sus propias piezas. Un sitio mayoritariamente rojo leería
// "alarma", no "seguridad".
// ─────────────────────────────────────────────────────────────────────────
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── ROJO BLINDEX — marca madre ──
        // Pantone 485. El manual da tres valores para pantalla: el rojo puro
        // y sus dos grisados. El resto de la escala la derivamos nosotros
        // para estados y superficies suaves.
        brand: {
          50: "#FEF2F2",
          100: "#FDE1E0",
          200: "#FABEBC",
          300: "#F59290",
          400: "#EC5A57",
          500: "#E12726", // ← oficial (r225 g39 b38)
          600: "#CD2322", // ← oficial, 485 + 10% negro
          700: "#A91A17", // ← oficial, 485 + 20% negro
          800: "#7D1311",
          900: "#530D0B",
        },

        // ── NEGRO Y GRISES — color estructural ──
        // El manual define negro 85%, 70% y 40%. Son neutros puros, sin
        // sesgo de temperatura. Hacen el trabajo pesado: textos, bordes,
        // fondos de sección.
        ink: {
          DEFAULT: "#262626",
          soft: "#575757",
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A0A0A0", // ← oficial, negro 40%
          500: "#7A7A7A",
          600: "#575757", // ← oficial, negro 70%
          700: "#404040",
          800: "#333333",
          900: "#262626", // ← oficial, negro 85%
        },

        // ── LÍNEAS DE PRODUCTO ──
        // Cada sub-marca combina el rojo 485 + negro 85% + su color propio.
        // Los 500 son los oficiales del manual; el resto de cada escala es
        // derivado para hover, bordes y fondos suaves.
        solar: {
          50: "#FFF8EB",
          100: "#FEEDCC",
          300: "#FBD076",
          500: "#F7A800", // ← oficial, Pantone 130
          600: "#D18E00",
          700: "#9E6C00",
        },
        antirrobo: {
          50: "#EDF5FC",
          100: "#D3E7F7",
          300: "#7FBAE5",
          500: "#1B75BB", // ← oficial, Pantone 285
          600: "#16619C",
          700: "#114A77",
        },
        energy: {
          50: "#F2F9E8",
          100: "#DFF1C6",
          300: "#A8D470",
          500: "#63A70A", // ← oficial, Pantone 369
          600: "#528C08",
          700: "#3E6A06",
        },
        // ⚠️ Acústico NO figura en el manual de marca. El violeta sale del
        // vector de su logo (que además usa el rojo VIEJO #ED1C24, no el
        // #E12726 del manual: ese lockup es de una versión anterior).
        // Confirmar con el cliente.
        acustico: {
          50: "#F6EFF8",
          100: "#EBDBF0",
          300: "#C299D0",
          500: "#86349A",
          600: "#6D2A7D",
          700: "#52205E",
        },

        paper: "#F7F7F7",
      },
      fontFamily: {
        // El manual pide Myriad Pro, con Arial como alternativa "para medios
        // digitales". Myriad es de Adobe y necesita licencia de Adobe Fonts;
        // Arial en un sitio nuevo lee a plantilla vieja.
        // Source Sans 3 es la humanista open source de Adobe, misma familia
        // de diseño que Myriad: respeta el espíritu del manual sin licencia.
        sans: ["var(--font-source-sans)", "Arial", "system-ui", "sans-serif"],
        display: ["var(--font-source-sans)", "Arial", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.5) inset, 0 10px 30px -12px rgba(38,38,38,0.35)",
        glow: "0 0 0 1px rgba(225,39,38,0.35), 0 20px 60px -20px rgba(225,39,38,0.45)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(38,38,38,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(38,38,38,0.06) 1px, transparent 1px)",
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
