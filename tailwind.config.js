module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1p8': '1.875rem',
        'p8': '0.875rem'
      },
      backgroundImage: {
        navBarImg: "url('./assets/Slices/nav_bar.png')"
      }
    },
    fontSize: {
      'fs-a': '6vw',
      'fs-e': '3vw'
    },
    minHeight: {
      'tile': '11rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
