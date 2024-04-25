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
  },
  plugins: [],
};
