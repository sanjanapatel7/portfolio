/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
      },
    },
  },
  plugins: [],
}

