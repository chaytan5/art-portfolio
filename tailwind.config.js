/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-limelight)"],
        meddon: ["var(--font-meddon)"],
        marcellus: ["var(--font-marcellus)"],
        marc: ["var(--font-marc)"],
      },
      colors: {
        "gold-90": "#E9D2B2",
        "gold-40": "#665C4E",
        yellow: "#CC914D",
        orange: "#CB7329",
        "yellow-60": "#664927",
      },
      backgroundImage: {
        headerBg: "url('~/assets/images/header.png')",
        headerBg2: "url('~/assets/images/header2.png')",
        hero: "url('~/assets/images/hero.png')",
      },
      screens: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
