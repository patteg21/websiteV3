/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(119, 166, 247)', // Replace this with your desired color code
      },
    },
  },
  plugins: [],
}

