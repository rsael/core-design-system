// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E5F0FF",
          200: "#9DBFF9",
          300: "#5B8DEF",
          400: "#0063F7",
          500: "#004FC4",
        },
        green: {
          100: "#E3FFF1",
          200: "#57EBA1",
          300: "#39D98A",
          400: "#06C270",
          500: "#05A660",
        },
        red: {
          100: "#FFE5E5",
          200: "#FF8080",
          300: "#FF5C5C",
          400: "#FF3B3B",
          500: "#E53535",
        },
        yellow: {
          100: "#FFFEE5",
          200: "#FDED72",
          300: "#FDDD48",
          400: "#FFCC00",
          500: "#E5B800",
        },
        orange: {
          100: "#FFF8E5",
          200: "#FCCC75",
          300: "#FDAC42",
          400: "#FF8800",
          500: "#E57A00",
        },
        teal: {
          100: "#E5FFFF",
          200: "#A9EFF2",
          300: "#73DFE7",
          400: "#00CFDE",
          500: "#00B7C4",
        },
        purple: {
          100: "#FFE5FF",
          200: "#DDA5E9",
          300: "#AC5DD9",
          400: "#6600CC",
          500: "#4D0099",
        },
        light: {
          100: "#FFFFFF",
          200: "#FAFAFC",
          300: "#F2F2F5",
          400: "#EBEBF0",
          500: "#E4E4EB",
        },
        dark: {
          100: "#C7C9D9",
          200: "#8F90A6",
          300: "#555770",
          400: "#28293D",
          500: "#1C1C28",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
