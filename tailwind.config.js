const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: ['./components/**/*.js', './pages/**/*.js', './styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'system-ui', 'sans-serif']
    }
  },
  variants: {}
}
