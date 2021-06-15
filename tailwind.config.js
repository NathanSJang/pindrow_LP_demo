// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    presets: [
      require('./tailwind-preset.js')
    ],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }