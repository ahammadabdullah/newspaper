/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "right-side-bg": "url('https://i.ibb.co/x1QD1MQ/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
