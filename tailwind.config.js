/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        warning: '#fb923c',
        dark: '#111827',
        secondary: '#4b5563',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}