import React from "react";

const FooterMain = () => {
  return (
    <div className="z-1 flex flex-row text-gray-800 mr-2">
      <h1>Continuous learning</h1> 
      <h1 className="text-gray-300 font-bold ml-2 
      // drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
      text-shadow:
      -1px -1px 0 #000,  
       1px -1px 0 #000,
       -1px 1px 0 #000,
        1px 1px 0 #000;
      ">
      
        solutions for people</h1>
    </div>
  );
};

export default FooterMain;
