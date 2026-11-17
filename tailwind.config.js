/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosso: {
          corsa: '#D40000',
          scuderia: '#FF2800',
          dark: '#8B0000',
          fiorano: '#990000'
        },
        carbon: {
          900: '#070709',
          800: '#0E0F12',
          700: '#181A20',
          600: '#232730',
        },
        giallo: {
          modena: '#FFD700',
        }
      },
      fontFamily: {
        racing: ['Inter', 'sans-serif'],
        display: ['Cinzel', 'serif']
      }
    },
  },
  plugins: [],
}
