import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-purple-100":"#EFE3FF",

        "brand-purple-500":"#8F4DEA"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bg_hero":"url('../public/assets/images/home/hero_bg.webp')",
          "contact_us_bg":"url('../public/assets/images/home/contact_us_bg.webp')"
      },
      fontFamily:{
        sans: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
};
export default config;
