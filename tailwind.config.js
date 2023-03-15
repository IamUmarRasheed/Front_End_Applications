/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: [`Lexend Deca`],
      },
      colors: {
        "regal-blue": "#243c5a",
        mycolor: "#224957",
        mycolor2:"slate-400"
      },
    },
  },
  plugins: [],
};
