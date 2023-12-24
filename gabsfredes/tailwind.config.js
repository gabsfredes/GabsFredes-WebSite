/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        nav: "#666666",
        header: "#42446E",
        html5: "#E44F26",
        css3: "#1572B6",
        js: "#F5DE19",
        react: "#00D8FF",
        vscode: "#0065A9",
        ts: "#3178c6",
        graphql: "#e535ab",
        git: "#DE4C36",
        tail: "#44A8B3",
      },
      backgroundImage: {
        "header-pattern": "./src/assets/images/chevron.png",
      },
    },
  },
  variants: {},
  plugins: [],
};
