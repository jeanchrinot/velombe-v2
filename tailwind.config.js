// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            transform: "rotate(2deg) scale(1.05)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(0deg) scale(1)",
          },
        },
      },
      animation: {
        aurora: "aurora 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
