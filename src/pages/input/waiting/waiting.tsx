import React from "react";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";

const waiting: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/*  < bg */}
      <div
        className=" middleOne
        // h-700  
        bg-red-700 bg-[url('/bg_loading.png')]
        bg-cover
        bg-no-repeat
        "
      >
        <div className="flex min-h-screen items-center justify-center">
<WaterWave2/>  
        </div>
      </div>
    </>
  );
};

export default waiting;
