import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fii: {
          void: "#040406",
          dark: "#08080C",
          surface: "#0E0E14",
          card: "#14141D",
          border: "#1F1F2C",
          "border-subtle": "rgba(255, 255, 255, 0.07)",
          "border-highlight": "rgba(204, 255, 0, 0.3)",
          lime: "#CCFF00",
          "lime-bright": "#D6FF33",
          "lime-glow": "rgba(204, 255, 0, 0.15)",
          chrome: "#E4E8EE",
          "chrome-muted": "#8F96A3",
          ivory: "#F5F3EF",
          "ivory-muted": "#9C9B96",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Syne", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "chrome-gradient": "linear-gradient(135deg, #FFFFFF 0%, #CCD3DF 50%, #8A94A6 100%)",
        "lime-radial": "radial-gradient(circle at center, rgba(204,255,0,0.15) 0%, rgba(204,255,0,0) 70%)",
        "void-glow": "radial-gradient(circle at 50% 0%, rgba(204,255,0,0.08) 0%, rgba(4,4,6,0) 60%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "lime-glow": "0 0 30px -5px rgba(204, 255, 0, 0.25)",
        "lime-glow-lg": "0 0 60px -10px rgba(204, 255, 0, 0.35)",
        "chrome-glow": "0 0 40px -10px rgba(255, 255, 255, 0.12)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
