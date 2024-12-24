/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#121212",
        secondary: "#0f1011"
      }
    },
  },
  plugins: [],
};
