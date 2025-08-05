// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'fill-gray-800',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};