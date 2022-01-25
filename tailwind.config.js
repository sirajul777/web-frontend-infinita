const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["'Poppins'", "sans-serif"],
        pusher: ["'Pushster'", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        viga: ["viga", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const hero = {
        ".bg-nav": {
          "background-color": "#ebdb34",
        },

        ".bg-hero": {
          background: "url(/assets/img/hero.jpg)",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-attachment": "fixed",
          "background-position": "center",
        },
        ".bg-paralax": {
          background: "url(/assets/img/abstract.jpg)",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-attachment": "fixed",
          "background-position": "center",
        },
        ".bg-accent": {
          "background-color": "#CEDA6C",
        },
        ".text-accent": {
          color: "#CEDA6C",
        },
        ".border-accent": {
          "border-color": "#CEDA6C",
        },
        ".bg-primary": {
          "background-color": "#8B4F0F",
        },
        ".text-primary": {
          color: "#8B4F0F",
        },
        ".border-primary": {
          "border-color": "#8B4F0F",
        },
        ".border-l-primary": {
          "boder-left-color": "#8B4F0F",
        },
        ".bg-custom": {
          "background-color": "#fef3c7",
        },
      };
      addUtilities(hero);
    }),
  ],
};
