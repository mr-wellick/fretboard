module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
      },
      zIndex: {
        "-10": "-10",
      },
      spacing: {
        sidebar: "228px",
        "main-content-width": "calc(100% - 228px)",
        48: "48px",
      },
      colors: {
        "dark-blue": "#202a35",
        pink: "#f4027d",
      },
      inset: {
        228: "228px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
