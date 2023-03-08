/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
      },
    },
    colors: {
      primary: "#202442",
      secondary: "#00606C"
    }
  },
  plugins: [],
}
