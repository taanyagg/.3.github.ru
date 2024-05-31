/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#2d2d2d",
        silver: "#c4c4c4",
        black: "#000",
        gray: "#fbfbfb",
        dimgray: "#6e6e6e",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
