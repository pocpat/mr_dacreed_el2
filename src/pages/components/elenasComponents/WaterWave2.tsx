import React from "react";

const WaterWave2 = () => {
  return (

    <div className="flex items-center justify-center h-screen bg-green-800">
      <div className="circle absolute flex h-[90px] w-[90px] rounded-full bg-gradient-to-t from-accentd via-[#367592] to-[#5d93a3]
         overflow-hidden
      ">
       
      </div>
      <div
        className="wave1 absolute bottom-50 left-50 transform -translate-x-1/2 
        h-[115px] w-[115px] 
        animate-wave1 
        animate-delay-2000
        bg-white rounded-[40%]
    // overflow-hidden
      "
      >
       
      </div>

      <div
        className="wave2 absolute bottom-50 left-50 transform -translate-x-1/2 
        h-[125px] w-[125px] 
        animate-wave2 
        animate-delay-2000
   opacity-50
        bg-white rounded-[40%]
      //  overflow-hidden
     "
    >
       
      </div>
    </div>
  );
};

export default WaterWave2;
