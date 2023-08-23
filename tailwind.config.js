/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2e3030',
        primaryLight:'#404142'
      },
      fontFamily:{
        'roboto':['"Roboto"', 'serif'],
        'audiowide':['"Audiowide"', 'serif']
      }
      
    },
  },
  plugins: [],
}

