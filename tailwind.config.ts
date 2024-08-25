import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          100: 'var(--primary-btn)',
          500: 'var(--primary-default)',
          600: 'var(--primary-hover)',
          700: 'var(--primary-pressed)'
        },
        'secondary': {
          300: 'var(--secondary-desabled)'
        }
      },
      boxShadow: {
        'top': '0px -8px 15px -15px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
};
export default config;