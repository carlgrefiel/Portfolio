/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  isActive: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs' : '375px',
      },
    },
  },
  plugins: [],
}