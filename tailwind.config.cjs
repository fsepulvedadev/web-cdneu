/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009FF0",

          secondary: "#F04D2E",

          accent: "#FFCA00",

          neutral: "#1A1A1A",

          "base-100": "#FFFFFF",

          info: "#E0A1BE",

          success: "#86BF4C",

          warning: "#CDEFFB",

          error: "#EA4034",
        },
      },
    ],
  },
};
