module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        187: "46.75rem", // 748px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
