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
        slagless: ["slagless", "cursive"],
        trap: ["trap", "sans-serif"],
      },
      colors: {
        "gold-90": "#E9D2B2",
        "gold-40": "#665C4E",
        yellow: "#CC914D",
        orange: "#CB7329",
        "yellow-60": "#664927",
      },
      backgroundImage: {
        header: "url('~/assets/images/header.webp')",
        body: "url('~/assets/images/body.webp')",
        hero: "url('~/assets/images/hero.webp')",
      },
      screens: {
        "1.5xl": "1440px",
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },
  plugins: [],
};
