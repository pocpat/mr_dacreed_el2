 import { type Config } from "tailwindcss";


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/bg_1.jpg')",
        'header-image' : "url(/BackgroundImage2.png)",
      },
      keyframes: {
        customBounce: {
          "0%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(-70px)" },
          "100%": { transform: "translateY(20px)" },
        },
        birdin: {
          "0%": { transform: "translateX(-400%)" },
          "100%": { transform: "translateX(0%)" },
        },
        textin: {
          "0%": { transform: "translateX(-700px)" },
          "100%": { transform: "translateX(-80px)" },
        },
      },
      animation: {
        "custom-bounce": "customBounce 2s  forwards ",
        "bird-in": "birdin 6s forwards",
        "text-in": "textin 6s forwards",
      },

    },
    darkMode: 'class',
  },

  plugins: [require('daisyui'),require('flowbite/plugin'),],
};

export default config;
