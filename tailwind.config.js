/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["shadow-md", "shadow-electricViolet/20", "lg:shadow-none"],
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
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        scaleUp: "scaleUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
