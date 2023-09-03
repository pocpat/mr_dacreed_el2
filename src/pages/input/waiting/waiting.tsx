import React from "react";
// import CircularProgressBar from "~/componentsRoot/CircularProgressBar";
import WaterProgress3 from "~/componentsRoot/WaterProgress3";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";
import CircularProgressBar from "~/componentsRoot/CircularProgressBar";

const waiting: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/*  < bg */}
      <div
        className=" middleOne
       bg-green-800
       
         h-screen
        "
        
      >
       
 {/* <WaterProgress3/>  */}
 <div className="flex flex-row items-center justify-center content-center">
    {/* <CircularProgressBar />      */}
    <div className="translate-y-1">
     <WaterWave2 prevValue={0} animationDurationClass={""}  />
     </div>
     </div>
      </div>
    </>
  );
};

export default waiting;
