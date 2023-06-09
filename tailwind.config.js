/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tall: {
          raw: "(max-width: 850px)",
        },
        smScreenMin: {
          raw: "(min-width: 650px)",
        },
        smScreenMax: {
          raw: "(max-width: 650px)",
        },
      },
    },
  },

  plugins: [],
};
