/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        getirColor : "#5D38BE",
        getirColor2: "#7849f7",
        getirBg : "#f5f5f5",
        getirText:"#ffd10d"
      }
    },
  },
  plugins: [],
}

