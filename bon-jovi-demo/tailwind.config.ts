import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-formula)"],
      mono: ["var(--font-founders-mono)"],
      sans: ["var(--font-founders)"],
    },
    fontSize: {
      "4xl": ["max(5.25rem, 9.8vw)", { lineHeight: "90%" }], // 140px
      "4xlMediumMobile": ["max(4rem, 9.8vw)", { lineHeight: "90%" }], // 140px
      "4xlSmallMobile": ["max(3rem, 9.8vw)", { lineHeight: "90%" }], // 140px
      "3xl": ["max(3rem, 6.8vw)", { lineHeight: "90%" }], // 98px
      "3xlBigMobile": ["max(4rem, 6.8vw)", { lineHeight: "90%" }], // 98px
      "2xl": ["max(3rem, 3.4vw)", { lineHeight: "90%" }], // 48px
      xl: ["max(1.75rem, 2vw)", { lineHeight: "110%" }], // 28px
      lg: ["max(1.5rem, 1.7vw)", { lineHeight: "100%" }], // 24px
      base: ["max(1.375rem, 1.55vw)", { lineHeight: "110%" }], // 22px
      sm: ["max(1.125rem, 1.125vw)", { lineHeight: "110%" }], // 18px
      xs: ["max(0.813rem, 0.8vw)", { lineHeight: "110%" }], // 13px
    },
    colors: {
      red: "#9F2828",
      black: "#090909",
      white: { DEFAULT: "#EFEFEA", pure: "#FFFFFF" },
      grey: { light: "#F0F0F0", DEFAULT: "#3C3C3C" },
      transparent: "transparent",
    },
    extend: {
      spacing: {
        "9-fluid": "max(36px,5vw)",
        "16-fluid": "max(64px,12.6vw)",
        "24-big-mobile-fluid": "max(148px,13.8vw)",
        "24-fluid": "max(98px,13.8vw)",
        "24-big-fluid": "max(98px,6.8vw)",
      },
      keyframes: {
        "rotate-scroll": {
          "0%": { transform: "rotate(-3deg) translateX(0)" },
          "100%": { transform: "rotate(-3deg) translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
