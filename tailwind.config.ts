import { redirect } from "next/dist/server/api-utils"
import type { Config } from "tailwindcss"

const Config: Config = {
  darkMode: ["class"],
  content:[
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          turquoise: "rgb(64, 224, 208)"
          rose: "rgb(244, 63, 94)"
        },
        secondary: {
          red:"rgb(255,0,0)"
          blue:"rgb(0,0,255)"
          green:"rgb(0,255,0)"
        },
        // ...(Garde les variables par defaut de shadcn ici)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config: