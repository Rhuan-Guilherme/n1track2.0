/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors:{
      'fundo': '#000105',
      'azul': {
        '50': '#eef9ff',
        '100': '#dcf3ff',
        '200': '#b2e9ff',
        '300': '#6ddaff',
        '400': '#20c7ff',
        '500': '#00b0ff',
        '600': '#0067EE',
        '700': '#0070b4',
        '800': '#005f95',
        '900': '#004d7a',
        '950': '#00233a',
    },

    'cinza': {
      '50': '#f6f6f6',
      '100': '#e7e7e7',
      '200': '#d1d1d1',
      '300': '#b0b0b0',
      '400': '#888888',
      '500': '#6d6d6d',
      '600': '#5d5d5d',
      '700': '#525252',
      '800': '#454545',
      '900': '#292929',
      '950': '#141414',
  },

  'azul-escuro': {
    '50': '#eef2ff',
    '100': '#dce5ff',
    '200': '#b2caff',
    '300': '#6d9fff',
    '400': '#206dff',
    '500': '#0049ff',
    '600': '#0033df',
    '700': '#0027b4',
    '800': '#002295',
    '900': '#001c7a',
    '950': '#000814',
},


    
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}