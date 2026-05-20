/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        gold: '#C9A84C',
        cream: '#F7F5F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
