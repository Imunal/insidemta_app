/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "inside-red-dark": "#6c1d16",
        "inside-red-light": "#de3f3c",
        "inside-bg-darker": "#111217",
        "inside-bg-dark": "#111217",
        "inside-bg-medium": "#101014",
        "inside-bg-light": "#141519",
        "inside-text-light": "#4c5766",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
