module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brown': '#CCB5A3',
        'brown-light': '#F9F9F9',
        'brown-dark': '#28201A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
