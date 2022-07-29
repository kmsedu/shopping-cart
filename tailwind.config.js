/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    gridTemplateColumns: {
      'auto-fit': 'repeat(auto-fill, minmax(400px, 1fr))'
    },
    extend: {
      fontFamily: {
        display: '"Expletus Sans"',
        nav: '"Inder"'
      }
    }
  },
  plugins: []
}
