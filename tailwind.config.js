/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      animation:{
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes:{
        fadeIn:{
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors:{
        primary: "#121212",
        secondary: "#0f1011"
      }
    },
  },
  plugins: [],
};
