import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,jsx,js}',
    './src/components/**/*.{html,jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
      },
      fontFamily: {
        primary: ['Orbitron', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg': "url('/login/version-login-background.png')",
      },
      borderColor: {
        primary: '#3498db',
      },
    },
  },

  plugins: [tailwindcss, autoprefixer],
};
