/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff5f2',
          100: '#ffe6e0',
          200: '#ffd1c7',
          300: '#ffb3a3',
          400: '#ff8670',
          500: '#ff5b3d',
          600: '#ed3515',
          700: '#c5280d',
          800: '#a3240f',
          900: '#862314',
        },
      },
    },
  },
  plugins: [],
};