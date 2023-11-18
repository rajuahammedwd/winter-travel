/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        reenie: ['Reenie Beanie', "cursive"]
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("daisyui")],
};

