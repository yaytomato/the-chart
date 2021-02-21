module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        "spoqa-neo": ['"Spoqa Han Sans Neo"', "sans-serif"],
      },
      spacing: {
        ["42.5"]: "10.625rem", // 170px
        182: "45.5rem", // 728px
      },
      colors: {
        white: "#fefcfe",
        gray: "#beb9bc",
        mint: "#739c8f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
