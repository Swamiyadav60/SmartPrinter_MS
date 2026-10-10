/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1a9b6c', // SmartPrinter investor portal primary green
        'brand-dark': '#127a54'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  corePlugins: {
    preflight: false, // Avoid breaking existing CSS
  },
  plugins: [],
}
