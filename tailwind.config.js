module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          subtle: '#CCDDFF',
          lighter: '#6698FA',
          DEFAULT: '#3E7BFA',
          darker: '#3568D4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
