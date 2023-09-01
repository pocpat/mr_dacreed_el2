import React from "react";

const WaterWave2 = () => {
  return (








    <div className="flex items-center justify-center h-screen">
      <div className="circle absolute flex h-[90px] w-[90px] rounded-full bg-blue-300">
       
      </div>
      <div
        className="wave1 absolute bottom-50 left-50 transform -translate-x-1/2 
        h-[115px] w-[115px] 
        animate-wave1 
        animate-delay-2000
        bg-white rounded-[40%]
    
      "
      style={{
        maskImage: 'radial-gradient(circle, transparent 0%, white 100%)',
        maskPosition: 'center bottom',
        maskSize: '100% 100%',
        WebkitMaskImage: 'radial-gradient(circle, transparent 0%, white 100%)', // For webkit browsers
      }}      
      >
       
      </div>

      <div
        className="wave2 absolute bottom-50 left-50 transform -translate-x-1/2 
        h-[125px] w-[125px] 
        animate-wave2 
        animate-delay-2000
   opacity-50
        bg-white rounded-[40%]
     "
     style={{
      WebkitMaskImage: 'radial-gradient(circle, transparent 0%, white 100%)',
      maskImage: 'radial-gradient(circle, transparent 0%, white 100%)',
      maskPosition: 'center bottom',
      maskSize: '100% 100%',
    }}    >
       
      </div>
    </div>
  );
};

export default WaterWave2;

