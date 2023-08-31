import React from "react";

const WaterWave2 = () => {
  return (
    <div>
        <div className="circle absolute flex h-[90px] w-[90px] rounded-full bg-yellow-300">
            circle</div>
      <div className="wave1 top-50 left-50 absolute flex h-[100px] w-[100px] 
    //   animate-wave1  
      animation-riseUpWave1 
      content-center justify-center rounded-3xl bg-green-800">
        wave1
      </div>

      <div className="wave2 top-50 left-50 absolute flex h-[100px] w-[100px] 
    //   animate-wave2 
      animation-riseUpWave1 
      content-center justify-center rounded-3xl bg-blue-800">
        wave2
      </div>
    </div>
  );
};

export default WaterWave2;
