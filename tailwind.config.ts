import { type Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require ("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;


