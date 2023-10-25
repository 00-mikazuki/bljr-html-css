/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  // lightMode: 'class',
  // mengubah mode sesuai dengan class yg diberikan
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      spacing: {
        13: '3.25rem',
      },
      // custom font
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        'regal-blue': '#243c5a',
        kopi: '#c0ffee'
      }, 
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        }
      }
    }
  },
  plugins: [],
}

