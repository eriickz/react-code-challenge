/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  theme: {
    fontFamily: {
      sans: ["PT Sans Caption", "sans-serif"],
      serif: ["Rubik", "serif"]
    },
    extend: {
      colors: {
        main: "#EFEDED",
        green: "#02B8B3",
        gray: "#BBBABA",
        "useritem-gray": "#B6B6B6",
        "button-cancel": "#D4D4D4",
        "button-delete": "#F26969",
        "button-save": "#0281B8",
        "button-update": "#02B8B3"
      }
    },
  },
  plugins: [],
}
