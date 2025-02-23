/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        olive: '#5F6D5F',
        beige: '#E5DED3',
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

