const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const fontmagician = require("postcss-font-magician");

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    fontmagician(),
  ],
};

module.exports = config;
