/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        chronicle: ['"Chronicle Display"', "serif"],
        chronicleSemi: ['"Chronicle Display Semi"', "serif"],
        gilroy: ["Gilroy", "sans-serif"],
        castoro: ["Castoro", "serif"],
      },
      colors: {
        accent: "#FBD784",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
