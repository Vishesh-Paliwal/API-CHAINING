/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#1b1e26',
        'black' : '#14181d',
        'yellow-50' : '#282c31',
        'green-300' : '#302328',
      },
    },
  },
  plugins: [],
}