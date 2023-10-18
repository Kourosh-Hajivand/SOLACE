/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: "IBM",
        IBMBold: "IBMBold",
        IBMThin: "IBMThin",
        IBMReg: "IBMReg",
        IBMLight: "IBMLight",
      },
    },
  },
  plugins: [],
};
