/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      fontSize: {
        "2xs": "10px",
        "3xs": "22px",
        "2md": "26px",
        "3md": "32px",
        "2lg": "40px",
        "3lg": "45px",
        "4lg": "50px",
      },
      colors: {
        shark: "#1D2127",
        lightSky: "#4FA5D0",
        offWhite: "#f2f2f2",
        skyBlue: "#48B4F0",
        smokeGray: "#E5E5E5",
        bostonBlue: "#3A81C3",
        azure: "#2F699E",
        tundora: "#444444",
        governorBay: "#4A3AC2",
        puertoRico: "#3AC2AC",
        wildSand: "#F5F5F5",
        regentStBlue: "#9DC0E1",
        blizzardBlue: "#B2DBF0",
        iron: "#DFDFE0",
        alto: "#D9D9D9",
        governorBayLight: "#493AB9",
        iceberg: "#D8EEF3",
        pelorousBlue: "#3AABC2",
        rollingStone: "#777A7D",
        gallery: "#F0F0F0",
        mercury: "#E9E9E9",
        calypso: "#336A9A",
      },
      backgroundImage: {
        interactivitybox: "linear-gradient(89.91deg, #212AD1 0.08%, #167FC9 23.54%, #1588CA 51.27%, #2C88DC 79.39%, #4077E2 101.76%)",
        developmentBg: "linear-gradient(270deg, #2F699E 0.77%, #3A81C3 50.35%, #2F699E 99.93%);",
        commonBtnBg: "linear-gradient(270deg, #3A81C3 0%, #489FF0 100%);",
        navBtnBg: "linear-gradient(270deg, #3A81C3 3.16%, #1C64A7 97.46%);",
      },
      boxShadow: {
        commonBtnShadow: " 1px 1px 8px 3px rgba(58, 171, 194, 0.70)",
        navBtnShadow: " 1px 1px 8px 3px rgba(255, 255, 255, 0.30);",
        popularCardShadow: " 1px 1px 6px 4px rgba(0, 0, 0, 0.09)",
        loginBtn: " 0px 0px 10px 0px rgba(58, 171, 194, 0.70)",
        whiteShadow: " 0px 0px 16px rgba(0, 0, 0, 0.50)",
        heroBtn: "1px 1px 10px 3px rgba(217, 217, 217, 0.60)",
        workBox: "1px 1px 5px 3px rgba(0, 0, 0, 0.25)"
      },
      screens: {
        "custom-sm": "350px",
        "custom-md": "480px",
        "custom-lg": "590px",
        "custom-xl": "992px",
        "custom-xxl": "1200px",
      },
    },
  },
  plugins: [],
};