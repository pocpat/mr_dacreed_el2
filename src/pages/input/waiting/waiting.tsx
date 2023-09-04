import React from "react";
import WaterProgress from "~/componentsRoot/WaterProgress";
import Header from "~/componentsRoot/Header";
import FooterBird from "~/componentsRoot/FooterBird";


const waiting: React.FC = () => {
  return (

        <div className="middleOne bg-white min-h-screen flex flex-col">
          <Header />
    
          {/* Top third with a different background color */}
          <div className="flex-1 bg-lightsecondaryd">
            {/* You can add content for the top section here */}
          </div>
    

          {/* Middle third with WaterProgress centered */}
          <div className="flex-1 flex  flex-col justify-center text-center bg-white ">
            <h2 className="mb-5 mt-0 font-bold">While you wait, we invite you to enjoy our Trivia Quiz</h2>
            <WaterProgress />
          </div>
    

          {/* Bottom third with FooterBird */}
          <div className="flex-1  bg-white">
            <FooterBird height={50} />
          </div>

          
        </div>
      );
    };
    
    export default waiting;
    










{/* <div className=" middleOne bg-white min-h-screen flex flex-col">
<Header />
<WaterProgress/> 
<div className="flex flex-row items-center justify-center content-center">
<FooterBird height={50} />
</div>
</div> */}