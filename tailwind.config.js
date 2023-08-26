/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: "Blinker-regular",
    },

    extend: {
      colors: {
        github: "#f4f4f5",
      },
    },
  },
  plugins: [],
};
