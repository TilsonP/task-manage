/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFEFEF',
        inputBackground: '#EEEEEE',
        principal: '#818181',
        second: '#B3B3B3',
        valid: '#52FF46',
        invalid: '#FF7E7E',
        invalidSecond: '#ffc6c6',
      },
      boxShadow: {
        general: '2px 4px 5px rgba(144, 144, 144, 0.24)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
