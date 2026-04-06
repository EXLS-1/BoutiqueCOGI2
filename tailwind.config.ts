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
          turquoise: "40E0D0"
          rose: "F43F5E"
        },
        secondary: {
          red:
          blue:
          green:
        },
        // ...(Garde les variables par defaut de shadcn ici)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config: