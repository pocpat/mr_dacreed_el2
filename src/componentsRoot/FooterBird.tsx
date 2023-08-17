import React from "react";


const FooterBird = () => {
  return (
    <div className="z-10 mr-2  pt-5 flex flex-row text-gray-800  shadow-inner-top w-full content-center justify-center">
      <h1>Continuous learning</h1>
      <h1
        className="// text-shadow: -1px 
      -1px 0
      #000,
      1px -1px 0 #000,  
       -1px 1px 0 #000,
       1px 1px 0 #000;
        ml-2 font-bold text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
      "
      >
        solutions for people
      </h1>
      <img src="/birdM_1.png" className="ml-2 h-8 w-8" />

    </div>
  );
};

export default FooterBird;

