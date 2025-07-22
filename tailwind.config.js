/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001e36",
        accent: "#d4af37",
        light: "#f6f6f6",
        darkText: "#333333",
        gcRed: "#ed1c24",
        gcBlue: "#0d47a1",
        gcLight: "#e3f2fd",
        gcAccent: "#bbdefb",
      },
    },
  },
  plugins: [],
};
