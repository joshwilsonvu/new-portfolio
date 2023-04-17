/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mono: ["Courier Prime", "Courier", "monospace"],
      serif: ["Old Standard TT", "serif"],
      display: ["Playfair Display", "serif"],
    },
    screens: {
      xs: "32rem",
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
      "2xl": "96rem",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
