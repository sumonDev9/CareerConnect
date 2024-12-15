/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#613FE5',
        secondary: '#232323',
        info: '#6F6F6F'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

