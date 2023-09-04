 import { type Config } from "tailwindcss";


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",  "./**/*.html"],
  theme: {
    fontFamily: {
      'nunito': ['Cambria']
    },
    colors: {
      'accentd': '#1E425C',
      'tertiaryd': '#0F5475',
      'secondaryd': '#B9CCC8',
      'midsecondaryd': '#F0F6F5',
      'lightsecondaryd': '#F1F4F3 ',
      'primaryd': '#FAFAFA',
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
        display: ["Lexend Deca", "sans-serif"],
      },
      customWave: {
        'position': 'relative',
        'width': '100% relative',
        'height': '100% relative',
        'background':' #4973ff relative',
        'border-radius': '50% relative',
        'box-shadow': 'inset 0 0 50px rgba(0, 0, 0, 0.5) relative',
      },
     
      boxShadow: {
        'inner-top': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',       
         'custom': '0 0 0 5px #4973ff',
      },

      backgroundImage: {
        'image': "url('/bg_1.jpg')",
        'header-image' : "url(/BackgroundImage2.png)",
        'header-image3' : "url(/BackgroundImage3.png)",
      },

      keyframes: {

        riseUp: {
          '0%': { top: '-90%' },
          '100%': { top: '-220%' },
        },
        riseUpWave1: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-300px)' },
        },
          
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
        wave1: {
          '0%': { transform: 'translateY(0%) rotate(-1350deg) scale(1.4)' }, // Initial position
          '50%': { transform: 'translateY(-44%) rotate(10deg) scale(1.2)' }, // Initial position
          '100%': { transform: 'translateY(-125%) rotate(1350deg) scale(1.2)' }, // Final position
        },
        wave2: {
          '0%': { transform: 'translateY(2%) rotate(-1900deg)   scale(1.4)' }, // Initial position
          '100%': { transform: 'translateY(-135%) rotate(1200deg) scale(1.5)' }, // Final position
        },

      },
      animation: {
        "custom-bounce": "customBounce 2s  forwards ",
        "bird-in": "birdin 6s forwards",
        "text-in": "textin 6s forwards",
        "wave1": "wave1 10s linear forwards",
        "wave2": "wave2 10s linear forwards",
        "wave1-5s": "wave1 5s linear forwards",
        "wave1-10s": "wave1 10s linear forwards",
        "wave1-15s": "wave1 15s linear forwards",
        "wave2-5s": "wave2 5s linear forwards",
        "wave2-10s": "wave2 10s linear forwards",
        "wave2-15s": "wave2 15s linear forwards",
        'delayedRiseUpAfter': 'riseUp 0.35s forwards',
      },

    },
    darkMode: 'class',
  },

  plugins: [ require('daisyui'),require('flowbite/plugin'),],
};

export default config;


