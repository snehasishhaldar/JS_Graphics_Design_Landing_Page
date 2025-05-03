/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D64553',
          DEFAULT: '#C41E3A',
          dark: '#A21930',
        },
        accent: {
          light: '#F3BB6C',
          DEFAULT: '#E3A857',
          dark: '#C58C3F',
        },
        dark: {
          light: '#404040',
          DEFAULT: '#252525',
          dark: '#121212',
        },
        'off-white': {
          light: '#FFFFFF',
          DEFAULT: '#F5F2E9',
          dark: '#E8E3D9',
        },
        terracotta: {
          light: '#B46E63',
          DEFAULT: '#A45A52',
          dark: '#8A4943',
        },
        green: {
          light: '#1D7A74',
          DEFAULT: '#115E59',
          dark: '#0C4A47',
        },
      },
      fontFamily: {
        karma: ['Karma', 'serif'],
        baloo: ['"Baloo Da 2"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
      },
      backgroundImage: {
        'alpona-pattern': "url('/src/assets/alpona-pattern.svg')",
      },
    },
  },
  plugins: [],
};