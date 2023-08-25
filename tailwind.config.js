/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'color-bg': '#1f1f38',
      'color-bg-variant': '#2c2c6c',
      'color-primary': '#4bd5ff',
      'color-primary-variant': 'rgba(77, 181, 255, 0.4)',
      'color-white': '#fff',
      'color-light': 'rgba(255, 255, 255, 0.6)',
      'color-error': '#ff0000',
    },
  },
  plugins: [],
});
