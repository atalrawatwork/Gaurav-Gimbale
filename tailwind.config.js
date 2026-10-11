/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Colour theme inspired by wedding / pre-wedding / travel photography:
      // deep warm-black base, champagne gold (wedding), blush rose (pre-wedding)
      // and soft sage (landscapes / travel).
      colors: {
        ink: {
          950: "#0b0908",
          900: "#12100e",
          800: "#1a1714",
          700: "#26211d",
          600: "#3a332d",
        },
        gold: {
          300: "#ecd3a5",
          400: "#e0bb7d",
          500: "#d4a85c",
          600: "#b88b3f",
        },
        blush: {
          300: "#f1c9c4",
          400: "#e8aaa3",
          500: "#d98b83",
        },
        sage: {
          400: "#9fb8a3",
          500: "#7e9b84",
        },
        cream: "#f6efe6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
