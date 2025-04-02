/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Open Sans", "sans-serif"]
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
