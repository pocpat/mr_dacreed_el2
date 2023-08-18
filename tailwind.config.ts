 import { type Config } from "tailwindcss";


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",  "./**/*.html"],
  theme: {
    colors: {
      'accentd': '#1E425C',
      'tertiaryd': '#0F5475',
      'secondaryd': '#B9CCC8',
      'midsecondaryd': '#F0F6F5',
      'lightsecondaryd:': '#F1F4F3 ',
      'primaryd': '#FAFAFA',
    },
    extend: {
      boxShadow: {
        'inner-top': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'image': "url('/bg_1.jpg')",
        'header-image' : "url(/BackgroundImage2.png)",
        'header-image3' : "url(/BackgroundImage3.png)",

      },
      keyframes: {
        customBounce: {
          "0%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(-70px)" },
          "100%": { transform: "translateY(20px)" },
        },
        birdin: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(calc((100vw - 200px) / 2.5))" },
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
