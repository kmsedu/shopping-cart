/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "auto-fit": "repeat(auto-fill, minmax(400px, 1fr))",
    },
    extend: {
      fontFamily: {
        display: '"Expletus Sans"',
        nav: '"Inder"',
      },
      backgroundImage: {
        "shop-hero":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), #e5e5e5), url('../public/assets/shop-hero-min.jpg')",
      },
    },
  },
  plugins: [],
};
