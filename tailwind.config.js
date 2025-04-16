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
          light: '#E6E6FA', // Lavender
          DEFAULT: '#B0C4DE', // Light Steel Blue
          dark: '#87CEEB', // Sky Blue
        },
        secondary: {
          light: '#98FB98', // Pale Green
          DEFAULT: '#90EE90', // Light Green
          dark: '#32CD32', // Lime Green
        },
        accent: {
          light: '#F0F8FF', // Alice Blue
          DEFAULT: '#E0FFFF', // Light Cyan
          dark: '#AFEEEE', // Pale Turquoise
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 