import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0D7377",
          dark: "#0A5C5F",
        },
        coral: {
          DEFAULT: "#E8654A",
          dark: "#D4553B",
        },
        warm: {
          white: "#FAF8F5",
          bg: "#F5F2EE",
        },
        charcoal: "#2D2D2D",
      },
      fontFamily: {
        headline: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
