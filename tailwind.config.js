module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1p8': '1.875rem'
      },
      backgroundImage: {
        navBarImg: "url('./assets/Slices/nav_bar.png')"
      }
    },
    fontSize: {
      'fs-a': '45pt',
      'fs-e': '36pt'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
