import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These read from CSS variables (globals.css) that flip when the
        // `.dark` class is present on <html>, so every bg-cream / text-ink
        // utility across the app is theme-aware automatically.
        cream: {
          DEFAULT: "rgb(var(--cream) / <alpha-value>)",
          50: "rgb(var(--cream-50) / <alpha-value>)",
          100: "rgb(var(--cream-100) / <alpha-value>)",
          200: "rgb(var(--cream-200) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
        },
        // Fixed dark/light pair for decorative bands & photo overlays —
        // intentionally does NOT flip with the theme toggle.
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        parchment: "rgb(var(--parchment) / <alpha-value>)",
        rose: {
          50: "rgb(var(--rose-50) / <alpha-value>)",
          100: "rgb(var(--rose-100) / <alpha-value>)",
          200: "#E6BEB8",
          300: "#D69C94",
          400: "#C17C73",
          500: "#AD6259",
          600: "#8F4B44",
          700: "#6B3A36",
          // Deep wine drawn from the AVM monogram itself — for full-bleed
          // banners that want the brand's own rose, not the muted UI shade.
          800: "#7A2536",
        },
        gold: {
          DEFAULT: "#B4915F",
          light: "#D4B888",
          dark: "#8A6D46",
        },
        mauve: "#9B7B78",
        // Reactive accent for the About page's two statement banners —
        // flips with the theme toggle via the --accent-quote CSS variable.
        "accent-quote": "var(--accent-quote)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
