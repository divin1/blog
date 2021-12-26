const defaultTheme =  require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.rose,
        secondary: colors.indigo
      },
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
