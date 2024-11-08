import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   'tahiti': {
      //     light: '#60a5fa',
      //     DEFAULT: '#3b82f6',
      //     dark: '#2563eb',
      //   },
      // }
    },
  },
  plugins: [],
};
export default config;
