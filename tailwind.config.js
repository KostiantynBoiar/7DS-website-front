module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/assets/css/main.css',
    './src/components/*.jsx',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}