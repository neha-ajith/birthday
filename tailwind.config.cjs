/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banner: ['Cobbler'],
        body: ["Quicksand", "sans-serif"],

      },
      colors: {
        'navbar': '#FFB634',
        'body': '#FFB332',
        'button': '#E84345'
      }
    },
  },
  plugins: [],
}
