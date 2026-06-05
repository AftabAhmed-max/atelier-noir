import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",      // charcoal / near-black
        bone: "#F4F1EC",     // warm off-white
        taupe: "#B8A99A",    // warm neutral
        clay: "#A8624A",     // terracotta accent
        brass: "#9A7B4F",    // refined brass accent
        rule: "#E4DED4",     // hairline rules on bone
        inkrule: "#2E2E2E",  // hairline rules on ink
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
      },
      maxWidth: {
        editorial: "78rem",
      },
    },
  },
  plugins: [],
};
export default config;

