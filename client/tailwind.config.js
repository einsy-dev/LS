/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '5/2': '5 / 2',
        '2/3': '2 / 3',
      }
    },
  },
  plugins: [],
}