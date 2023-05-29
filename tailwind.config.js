/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slide:'slide 1s ease-in-out infinite'
      },
      keyframes:{
        slide:{
          '0%, 100%':{left:'75px'},
          '50%':{left:'50px'}
        }
      },
      fontFamily:{
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}