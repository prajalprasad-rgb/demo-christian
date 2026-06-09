/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 18px 60px rgba(170, 126, 35, 0.22)",
        soft: "0 18px 70px rgba(52, 45, 34, 0.12)",
      },
      keyframes: {
        floatPetal: {
          "0%": { transform: "translate3d(0, -10vh, 0) rotate(0deg)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "100%": { transform: "translate3d(var(--drift), 110vh, 0) rotate(420deg)", opacity: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) rotate(12deg)" },
          "100%": { transform: "translateX(140%) rotate(12deg)" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0.7)", opacity: "0.35" },
          "50%": { transform: "scale(1.25)", opacity: "1" },
        },
      },
      animation: {
        floatPetal: "floatPetal linear infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
        sparkle: "sparkle 1.35s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
