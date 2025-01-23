/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        indigo: "#590892",
        electricViolet: "#930DF2",
        onyx: "#343A40",
        platinum: "#D9D9D9",
        seasalt: "#F8F9FA",
        heliotrope: "#BE6EF7",
      },
    },
  },
  plugins: [],
};
