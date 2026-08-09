module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Arial Black", "Inter", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 60px rgba(110, 85, 255, 0.18)"
      }
    }
  },
  plugins: []
};
