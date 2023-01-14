/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#f1efe3'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
