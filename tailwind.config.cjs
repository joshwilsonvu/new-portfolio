// @ts-check
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mono: ["Courier Prime", "Courier", "monospace"],
      serif: ["Georgia", "serif"],
      // display: ["Playfair Display", "serif"],
      display: ["Old Standard TT", "serif"],
      crimson: ["Crimson Pro", "serif"],
      //   garamond: ["Cormorant Garamond", "Garamond", "serif"],
      //   cm: ["Computer Modern Serif", "serif"],
    },
    screens: {
      xs: "32rem",
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
      "2xl": "96rem",
    },
    extend: {
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms 1s linear",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
