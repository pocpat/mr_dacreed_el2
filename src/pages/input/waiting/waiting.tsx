import React from "react";
import WaterProgress from "~/componentsRoot/WaterProgress";

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
       
<WaterProgress/>
          
     
      </div>
    </>
  );
};

export default waiting;
