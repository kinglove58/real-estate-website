/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "rgba(225,225,255,0.78)",
        black: "#131110",
        /*  blue: "#4066ff", */
        lightBlue: "#eeeeff",
      },
      boxShadow: {
        "custom-gray": "0 23px 21px -8px rgba(136, 160, 255, 0.25)",
      },
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        "gradient-orange": "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
