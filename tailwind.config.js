/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#F9ED69',
        'orange': '#F08A5D', 
        'fuschia': '#B83B5E', 
        'purple': '#6A2C70',
      }
    },
  },
  plugins: [],
}
