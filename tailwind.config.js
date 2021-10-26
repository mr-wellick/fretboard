module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        17: "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
