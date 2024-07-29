/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'h1': '4.5rem',
        'h2': '3.75rem',
        'h3': '3rem',
        'h4': '2.5rem',
        'h5': '2rem',
        'h6': '1.75rem',
        'bodyLG': '1.75rem',
        'body': '1.5rem',
        'bodySM': '1.25rem',
      
        'mobile-h1': '2rem',
        'mobile-h2': '2.25rem',
        'mobile-h3': '2rem',
        'mobile-h4': '1.75rem',
        'mobile-h5': '1.625rem',
        'mobile-h6': '1.5rem',
        'mobile-bodyLG': '1.5rem',
        'mobile-body': '1.5rem',
        'mobile-bodySM': '1.25rem',
      },

      fontSize: {
        'h1': '3.75rem',
        'h2': '3rem',
        'h3': '2.438rem',
        'h4': '1.938rem',
        'h5': '1.563rem',
        'h6': '1.25rem',
        'bodyLG': '1.125rem',
        'body': '1rem',
        'bodySM': '0.75rem',


        'mobile-h1': '2rem',
        'mobile-h2': '1.75rem',
        'mobile-h3': '1.563rem',
        'mobile-h4': '1.375rem',
        'mobile-h5': '1.25rem',
        'mobile-h6': '1.125rem',
        'mobile-bodyLG': '1.063rem',
        'mobile-body': '1rem',
        'mobile-bodySM': '0.75rem',

      },

      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        'primary': '#F8F5EF',
        'p-gradient1': '#5046E5',
        'p-gradient2': '#9966FF',

      },
      fontFamily: {
        body: ['Montserrat']
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}