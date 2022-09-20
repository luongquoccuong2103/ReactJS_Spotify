/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      
=======
      width: {
        navBar: "232px",
      },

      height: {
        topBar: "60px",
        nowPlayingBar: "90px",
      },

      colors: {
        primary: "#1db954",
        sliderRail: "#535353",
        sliderTrack: "#b3b3b3",
      },
>>>>>>> main
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
