/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aside: '#1E1E20',
        titleAdmin: '#D7F6F1',
        main: '#161616',
        asideH: '#393A3E',
        iconCH: '#6D8682'
      },
      
    },
  },
  plugins: [],
}