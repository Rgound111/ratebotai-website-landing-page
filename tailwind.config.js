/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Marcellus', 'sans-serif'],
      },
      colors: {
        primary: 'var(--text-color)',
        bgprimary: 'var(--background-color)'
      }
    },
  },
  plugins: [],
}

