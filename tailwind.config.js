/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2563EB', // SmartPrinter brand color from globals.css
        'brand-dark': '#1d4ed8'
      }
    },
  },
  corePlugins: {
    preflight: false, // Avoid breaking existing CSS
  },
  plugins: [],
}
