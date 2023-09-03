import React from "react";
import { Line, Circle } from "rc-progress";
const CircularProgressBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center" style={{margin:20, height: 130, width:130}}>
        <Circle 
        percent={60} 
        strokeColor="#0F5475" 
        trailColor= "#F0F6F5"
        trailWidth={4}
        strokeWidth={4} 
        strokeLinecap="round"
        />
         <span 
         className="absolute text-2xl
          text-blue-700" 
          x-text="`${percent}%`
          
          ">60</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;

{
  /* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script> */
}

{
  /* <div >
    <div
       x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }"
       >
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
            <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                />
              <circle
                className="text-blue-600"
                stroke-width="10"
                // :stroke-dasharray="circumference"
                // :stroke-dashoffset="circumference - percent / 100 * circumference"
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
               />
            </svg>
            <span className="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
          </div>
      </div>    
  </div>
</div> */
}
