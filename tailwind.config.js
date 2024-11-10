/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#EDEDED',
        customDark: '#222222',
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
      },
      fontWeight: {
        demi: '500',
      },
  },
  plugins: [],
}

}