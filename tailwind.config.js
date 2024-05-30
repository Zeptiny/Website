/** @type {import('tailwindcss').Config} */
// npm install -D tailwindcss
// npx tailwindcss init
// npx tailwindcss -i ./input.css -o ./style.css --watch
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: { //TO-DO
        'surface':'#121212',//Background
        'onSurface':'#D1D1D1',//Text on Background
        'onSurfaceSM':'#A9B4C4',//Small Text on Background
        'primary':'#242424',//Primary Color
        'onPrimary':'#F2F2F2',//Text on Primary Color
        'secondary':'#6F6F6F',//Yada Yada...
        'onSecondary':'#1A1A1A',
        'tertiary':'#E34234',
        'onTertiary':'#F2F2F2',
      }
    },
  },
  plugins: [],
}

