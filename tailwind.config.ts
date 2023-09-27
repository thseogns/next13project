/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "text-shadow": "0 2px 2px rgb(0 0 0 / 1.06)",
      },
      height: {
        window: "88%",
      },
      spacing: {
        "50%": "50%",
        "93.3%": "93.3%",
        "-1px": "-1px",
        "4px": "4px",
        "3px": "3px",
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "-40px": "-40px",
        "50px": "50px",
        "100px": "100px",
        "200px": "200px",
        "400px": "400px",
        "600px": "600px",
      },
    },
  },
  plugins: [],
};
export default config;
