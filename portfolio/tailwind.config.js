/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        card: "#272D2B",
        button: "#2F3634",
      },
    },
    screens: {
      vs: { max: "420px" },
      ls: { min: "421px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1280px" },
      xl: { min: "1280px" },
    },
  },
  plugins: [],
};
