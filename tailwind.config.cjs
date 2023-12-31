/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./resume/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
