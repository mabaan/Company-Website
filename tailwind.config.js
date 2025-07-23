/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0D47A1",
        dark: "#1E293B", // slate-800
        accent: "#ED1C24",
        light: "#F9FAFB",
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
