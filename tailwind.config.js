/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dpurple: {
          DEFAULT: '#3D3C7A', // Digisol purple
        },
        dblue: {
          DEFAULT: '#31A2DB',
        },
        dgrey: {
          DEFAULT: '#444444',
        },
      },
      fontFamily:{
        body:['Inter']
      }
    },
  },
  plugins: [],
}

