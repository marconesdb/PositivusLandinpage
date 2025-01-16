/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeCustom: "#B9FF66", // Nome personalizado para a cor
        grayCustom: "#292A32"
      },
      fontFamily: {
        SpaceGrotesk: ['"Space Grotesk"', 'sans-serif'], // Define como padrão para fontes sans-serif
      },
    },
  },
  plugins: [],
}
