/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#99FFE0',
          200: '#66FFCC',
          300: '#33FFB7',
          400: '#00FFA6',
          500: '#00E98C',
          600: '#00C876',
          700: '#00A25F',
          800: '#00874C',
          900: '#006638',
        },
        secondary: {
          100: '#B88BFF',
          200: '#9A64FF',
          300: '#7C3DFF',
          400: '#8000FF',
          500: '#6B00D9',
          600: '#5500B3',
          700: '#3F008D',
          800: '#2A0068',
          900: '#140042',
        },
        accent: {
          100: '#99FFE0',
          200: '#66FFCC',
          300: '#33FFB7',
          400: '#00FFA6',
          500: '#00E98C',
          600: '#00C876',
          700: '#00A25F',
          800: '#00874C',
          900: '#006638',
        },
        background: {
          100: '#A2A2A2',
          200: '#919191',
          300: '#808080',
          400: '#6F6F6F',
          500: '#5E5E5E',
          600: '#4D4D4D',
          700: '#3C3C3C',
          800: '#2B2B2B',
          900: '#1A1A1A',
        },
        text: {
          100: '#666666',
          200: '#4C4C4C',
          300: '#333333',
          400: '#1A1A1A',
          500: '#0D0D0D',
          600: '#0A0A0A',
          700: '#080808',
          800: '#050505',
          900: '#000000',
        },
        shadow: {
          100: '#99FFE0',
          200: '#66FFCC',
          300: '#33FFB7',
          400: '#00FFA6', 
          500: '#00E98C',
          600: '#00C876',
          700: '#00A25F',
          800: '#00874C',
          900: '#006638',
        },
      },
    },
  },
  plugins: [],
}