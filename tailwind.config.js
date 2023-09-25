/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textGray': "#666666",
        'pink-1000': "#e60278",

      },
      backgroundImage: {
        'home-banner': "url('public/assets/HomeBanner.png')",
    },
  },
  plugins: [],
}}