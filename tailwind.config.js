/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};