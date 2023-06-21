/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    

    extend: {
      visibility: ["group-hover"],
      screens: {
        'lg': '1366px',
        'xl': '1440px'
        
      }
    },

  },
  plugins: [],
}
