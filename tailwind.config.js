/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
      
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }   ,                 
      colors: {
        'primary': '#F8F5EF',
        'p-gradient1': '#5046E5',
        'p-gradient2': '#9966FF',

      },
      fontFamily:{
        body: ['Montserrat']
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}