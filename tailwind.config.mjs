const colors = require("tailwindcss/colors");

export default {
  variants: ["responsive"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,   
        secondary: colors.indigo, 
         },
    },
  },
};
