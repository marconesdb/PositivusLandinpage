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
        grayCustom: "#292A32",

        greyCustom: "#F3F3F3"
      },
      boxShadow: {
        'custom-black': '0 4px 10px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        SpaceGrotesk: ['"Space Grotesk"', 'sans-serif'], // Define como padrão para fontes sans-serif
      },
      screens: {
        xs: '360px', // Defina o valor conforme necessário
      },
    },
  },
  plugins: [],
}
