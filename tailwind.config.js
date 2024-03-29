/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightPurple: '#D8C2E9',
        darkPurple: '#2F1B62',
        lightLime: '#def196',
        lightBlue: '#B1D7EF',
      }
    },
  },
  plugins: [],
}
