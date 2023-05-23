/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["pedestria-mvb"],
        "serif": ["pedestria-mvb"],
        "logo": ["pedestria-mvb"]
      }
    },
  },
  plugins: [],
}
