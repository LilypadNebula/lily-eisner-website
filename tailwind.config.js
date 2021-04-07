const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray
    },
    extend: {
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
        display: ['Audiowide', 'display'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
