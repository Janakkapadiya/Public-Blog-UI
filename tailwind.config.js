/** @type {import('tailwindcss').Config} */
export const content = [
  // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#1f2937",
      "primary-dark": "#2c785c",
      "regal-blue": "#97b1d1",
    },
  },
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
  },
};
export const plugins = [];
