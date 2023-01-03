/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "brutalist-2": "2px 2px 0 #262626",
        "brutalist-4": "4px 4px 0 #262626",
        "brutalist-8": "8px 8px 0 #262626",
        "brutalist-16": "16px 16px 0 #262626",
      },
      colors: {
        "burtal-orange": "#ffb443",
        "brutal-red": "#ff5d5d",
        "brutal-green": "#00ff75",
        "brutal-blue": "#38dbff",
        "brutal-purple": "#dd7dff",
        "brutal-yellow": "#fff503",
      },
    },
  },
  plugins: [],
};
