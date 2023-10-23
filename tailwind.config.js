/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'LimeGreen': 'hsl(163, 72%, 41%)',
      'BrightRed': 'hsl(356, 69%, 56%)',

      'Facebook': 'hsl(208, 92%, 53%)',
      'Twitter': 'hsl(203, 89%, 53%)',
      'Instagram': 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
      'YouTube': 'hsl(348, 97%, 39%)',

      // #### Dark Theme

      'Dark': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',

      // #### Light Theme

      'Light': 'hsl(230, 22%, 74%)',

      // ### Neutral

      // #### Dark Theme

      'VeryDarkBlue': 'hsl(230, 17%, 14%)',
      'VeryDarkBlueDark': 'hsl(232, 19%, 15%)',
      'DarkDesaturatedBlue': 'hsl(228, 28%, 20%)',
      'DesaturatedBlue': 'hsl(228, 34%, 66%)',
      'White': 'hsl(0, 0%, 100%)',

      // #### Light Theme

      'WhiteLight': 'hsl(0, 0%, 100%)',
      'VeryPaleBlue': 'hsl(225, 100%, 98%)',
      'LightGrayishBlue': 'hsl(227, 47%, 96%)',
      'DarkGrayishBlue': 'hsl(228, 12%, 44%)',
      'VeryDarkBlueLight': 'hsl(230, 17%, 14%)',
    },
    extend: {},
  },
  plugins: [],
}
