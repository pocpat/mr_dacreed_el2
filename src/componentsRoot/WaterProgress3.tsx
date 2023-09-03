import React from "react";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";
import CircularProgressBar from "./CircularProgressBar";
import WaterContainer from "./WaterContainer";

const WaterProgress = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <div>
          {/* <CircularProgressBar /> */}
        </div>
        <div style={{ marginLeft: "-85px" }}>
         {/* <WaterContainer/> */}
         <WaterWave2 prevValue={0} animationDurationClass={""}/>      
        </div>
      </div>
    </div>
  );
};

export default WaterProgress;

