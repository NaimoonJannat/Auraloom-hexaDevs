/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: "'Montserrat',sans-serif"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
<<<<<<< HEAD
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: false,
    themes: [
      "light",
      "dark",
    ],
  },
=======
  plugins: [require('daisyui'),],
>>>>>>> 05ef0d76dd2408a46ec14f2a804a182c1a622381
};
