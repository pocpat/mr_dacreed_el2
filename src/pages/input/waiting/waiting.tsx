import React from "react";
// import CircularProgressBar from "~/componentsRoot/CircularProgressBar";
import WaterProgress3 from "~/componentsRoot/WaterProgress3";

const waiting: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      {/*  < bg */}
      <div
        className=" middleOne
        bg-[url('/bg_loading.png')]
        bg-cover
         bg-no-repeat
         h-screen
        "
        
      >
       
 <WaterProgress3/> 
    {/* <CircularProgressBar />      */}
     
      </div>
    </>
  );
};

export default waiting;
