/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
      extend: {
        colors: {
          bg: "#d9d9d9",
          blueJ: "#2f80ed",
          darkJ: "#1f1f23",
          blackJ: "#050505",
          whiteJ: "#f8f8f8",
        },
        letterSpacing: {
          festival: "0.18em",
        },
      },
    },
    plugins: [],
  };