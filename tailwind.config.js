/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
       'mainColor': '#744966',
       'secondColor': '#EBE9E4',
       'SideColor': '#68405B',
       'bgSection': '#F9F9F8',
      }
    },
  },
  plugins: [],
}
