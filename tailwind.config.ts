import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'olive': {
          400: '#8B9B6B',
        },
        'purple': {
          400: '#9B6B9B',
        },
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
