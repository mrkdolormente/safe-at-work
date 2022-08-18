/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "saw-",
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'primary': '#880E4F',
        'secondary': '#3F51B5',
        'warn': '#f44336'
      }
    },
  },
  plugins: [],
}
