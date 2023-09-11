/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "manrope" : ["Manrope", "sans-serif"]
      },
      colors : {
        "lightcyan" : "#cee3e9",
        "neongreen" : "#52ffa8",
        "normal" : "#4e5d73",
        "dark" : "#323a49",
        "vdark" : "	#1f2632"
      },
      boxShadow : {
        'diceShadow' : '0 0 40px 0 rgba(82,255,169,1)'
      }
    },
  },
  plugins: [],
}

