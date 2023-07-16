import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        customBounce:{
'0%':{transform: 'translateY(70px)'},
'50%':{transform: 'translateY(-70px)'},
'100%':{transform: 'translateY(70px)'},
        },   
    },
    animation: {
      'custom-bounce': 'customBounce 2s infinite',
    },
  },
},
  plugins: [],
} satisfies Config;


// =========> flying bird   <=========
// keyframes: {
//   birdMovement: {
//     '0%': { transform: 'translateX(-100%)' },
//     '100%': { transform: 'translateX(0%)' },
//   },
// },
// animation: {
//   'bird-movement': 'birdMovement 5s linear',
// },


// =========> text movementfrom L to R   <=========
// keyframes: {
//   textMovement: {
//     '0%': { transform: 'translateX(-100%)' },
//     '100%': { transform: 'translateX(0%)' },
//   },
// },
// animation: {
//   'text-movement': 'textMovement 5s linear',
// },