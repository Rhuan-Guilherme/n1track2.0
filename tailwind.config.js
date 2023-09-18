/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors:{
      'azul': {
        '50': '#eef9ff',
        '100': '#dcf3ff',
        '200': '#b2e9ff',
        '300': '#6ddaff',
        '400': '#20c7ff',
        '500': '#00b0ff',
        '600': '#008ddf',
        '700': '#0070b4',
        '800': '#005f95',
        '900': '#004d7a',
        '950': '#00233a',
    },
    
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}