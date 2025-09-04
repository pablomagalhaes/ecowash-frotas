/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#16a34a',
          600: '#15803d',
          700: '#166534'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,185,129,.12)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
