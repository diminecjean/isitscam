/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
      colors: {
        primary: '#102E4A', // Dark blue
        secondary: '#15A1CE', // weird shade of blue
        background: '#EBF9FE', // Light Blue
        red: '#9A0000',
      },
    },
  },
  plugins: [require("flowbite"), require("flowbite/plugin")],
};
