/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        myTextGray: '#7B7C85', // название: значение
      },
    },
  },
  plugins: [],
}
