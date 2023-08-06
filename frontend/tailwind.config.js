/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "75% auto",
        settings: "25% auto"
      },
      translate: {
        "80p": "translateX(80%)",
      },
      height: {
        "150": "37.5rem"
      },
      width: {
        "150": "37.5rem"
      },
      backgroundColor: {
        "black-op": "rgb(0 0 0 / 0.37)",
        "btn-set": "rgb(53, 56, 57)",
      },
      margin: {
        "1/2": "50%"
      }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      azeret: ["Azeret Mono", "monospace"],
    },
  },
  plugins: [],
};
