module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-gradient": "text 1.5s linear infinite",
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
      height: {
        142: "42rem",
      },
      width: {
        142: "42rem",
      },
      fontFamily: {
        sans: ["Chivo Mono", "monospace"],
        cinzel: ["Cinzel", "serif"],
        semplicita: ["Semplicita medium", "sans-serif"],
        larken: ["Larken Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
