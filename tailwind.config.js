/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0F',
        shine: '#f5f5f5',
        green: '#0a996f',
        blue: '#0a6789',
        red: '#cf0638',
        orange: '#fa6632',
        yellow: '#fecd23',
        pink: '#E54980',
        gris: '#1B1B1D',
        yellowsm: '#cfa334',
        purple: '#B43EFE',
        lightgray: '#222222',
        light: '#E1E1E1'
      },
      boxShadow: {
        'custom-white': '5px 5px 0px 0px #c8c8c8db',
        'custom-dark': '5px 5px 0px 0px #0F0F0F', 
        'custom-yellow': '5px 5px 0px 0px #fecd23',
        'custom-pink': '5px 5px 0px 0px #E54980',
      },
    },
    variants: {
      extend: {
        boxShadow: ['dark'], // Habilita variantes de sombra para modo oscuro
      },
    },
    plugins: [],
  }
}

