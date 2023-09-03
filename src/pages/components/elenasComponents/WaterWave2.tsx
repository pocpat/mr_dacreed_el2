// import React from "react";
// interface WaterWave2Props {
//   prevValue: number;
//   animationDurationClass: string;
// }
// const WaterWave2: React.FC<WaterWave2Props> = ({ prevValue, animationDurationClass  }) => {
//   // Calculate animation delay based on prevValue
//   // const animationDelay = prevValue * 1000; // Adjust this calculation as needed
//   return (

    
//     <div className="bg-red-800 h-32 w-32 rounded-full bg-clip-padding mt-4">
//         <div className="flex items-center justify-center  ">
//       <div className="circle absolute flex h-[90px] w-[90px] rounded-full bg-gradient-to-t from-accentd via-[#367592] to-[#5d93a3]
//         //  overflow-hidden
//       ">
//       </div>
//       <div
//         className="wave1 absolute bottom-50 left-50 transform -translate-x-1/2 
//         h-[115px] w-[115px] 
//         // animate-wave1 
//         // animate-delay-2000    
//          bg-white rounded-[40%]

//     ${animationDurationClass}
//     overflow-hidden
//       " >
//       </div>

//       <div
//         className="wave2 absolute bottom-50 left-50 transform -translate-x-1/2 
//         h-[125px] w-[125px] 
//         // animate-wave2 
//         // animate-delay-2000
//    opacity-50
//         bg-white rounded-[40%]
//       ${animationDurationClass}
//       overflow-hidden
//      ">
//       </div>
//       </div>
//     </div>
//   );
// };

// export default WaterWave2;



import React from "react";
interface WaterWave2Props {
  prevValue: number;
  animationDurationClass: string;
}
const WaterWave2: React.FC<WaterWave2Props> = ({ prevValue, animationDurationClass }) => {
  return (
    <div className="bg-red-800 h-32 w-32 rounded-full bg-clip-padding mt-4 relative">
      <div className="circle absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-t from-accentd via-[#367592] to-[#5d93a3] overflow-hidden">
        <div
          className={`wave1 absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 
            h-[115px] w-[115px]
             bg-white 
             rounded-[40%] 
             ${animationDurationClass} 
             animate-wave1`}
        ></div>
        <div
      className="wave2 absolute bottom-50 left-50 transform -translate-x-1/2 -translate-y-1/2 
       h-[125px] w-[125px] 
      animate-wave2
       opacity-50
       bg-white 
       rounded-[40%]

      ">
       </div> 
      </div>
    </div>
  );
};

export default WaterWave2;

