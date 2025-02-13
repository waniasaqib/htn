/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, css}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FF8080",
        'custom-dark': '#3C1A00',
        'custom-light': '#FFD7D7',
      },
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'lily': ['"Lily Script One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
