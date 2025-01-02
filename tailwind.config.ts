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
        black: "#121212",
        blueGray: {
          900: "#1E293B",
          800: "#374151",
          700: "#4B5563",
        },
      },
      backgroundImage: {
        'parallax':'url("/background-img.png")'
      },
      animation: {
        'rotate-3d': 'rotate3d 4s infinite ease-in-out',
      },
      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotateY(0deg) skewY(3deg)' },
          '50%': { transform: 'rotateY(180deg) skewY(3deg)' },
          '100%': { transform: 'rotateY(360deg) skewY(3deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
