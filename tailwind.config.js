import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,jsx, js}',
    './src/components/**/*.{html,jsx, js}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#3498db',
      },
      fontFamily: {
        'font-primary': ['Orbitron', 'sans-serif'],
        'font-secondary': ['Raleway', 'sans-serif'],
      },
    },
  },

  plugins: [tailwindcss, autoprefixer],
};
