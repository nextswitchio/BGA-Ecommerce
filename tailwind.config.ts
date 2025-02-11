import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        xs: "320px",
        xsm: "400px",
        sm: "600px",
        md: "700px",
        lg: "900px",
        xlg: "1000px",
        "2xl": "1220px",
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
