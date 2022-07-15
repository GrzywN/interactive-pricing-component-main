/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SoftCyan: "#a5f3eb", // (Full Slider Bar)
        StrongCyan: "#10d5c2", // (Slider Backround)
        LightGrayishRed: "#feece7", // (Discount Background)
        LightRed: "#ff8c66", // (Discount Text)
        PaleBlue: "#bdccff", // (CTA Text)
        White: "#ffffff", // (Pricing Component Background)
        VeryPaleBlue: "#fafbff", // (Main Background)
        LightGrayishBlue1: "#fafbff", // (Empty Slider Bar)
        LightGrayishBlue2: "#cdd7ee", // (Toggle Background)
        GrayishBlue: "#858fad", // (Text)
        DarkDesaturatedBlue: "#293356", // (Text & CTA Background)
      },
    },
  },
  plugins: [],
};
