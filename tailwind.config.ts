import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AZUIS (base da marca)
        "navy-deep": "#001848",
        navy: "#003078",
        blue: "#0060A8",
        "blue-bright": "#0078C8",
        "blue-glow": "#008CDC",

        // VERDES (seta / acento — CTAs e destaques)
        "green-lime": "#8CC828",
        green: "#3C8C14",
        "green-deep": "#146414",

        // NEUTROS
        white: "#FFFFFF",
        "off-white": "#F5F7FA",
        "gray-light": "#D8D8D8",
        gray: "#4F4F4F",
        ink: "#0A1628",

        // WhatsApp oficial
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-marca":
          "linear-gradient(135deg, #001848 0%, #003078 55%, #0060A8 100%)",
        "gradient-marca-suave":
          "linear-gradient(135deg, #003078 0%, #0060A8 60%, #0078C8 100%)",
      },
      boxShadow: {
        cta: "0 10px 30px -8px rgba(60, 140, 20, 0.55)",
        card: "0 4px 24px -6px rgba(0, 24, 72, 0.14)",
        "card-hover": "0 12px 36px -8px rgba(0, 24, 72, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
