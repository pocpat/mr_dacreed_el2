import React from "react";
import Image from "next/image";
interface FooterBirdProps {
  height: number;
}

const FooterBird = ({ height }: FooterBirdProps) => {
  return (
    <div
      className=" mr-2  pt-5  w-full   text-gray-800 shadow-inner-top"
      style={{ height: `${height}px` }}
    >

<div   className=" absolute bottom-0 left-0 right-0 text-center flex flex-row justify-center">

      <h1>Continuous learning</h1>
      <h1
        className="
        -1px 0 #000,
         1px -1px 0 #000,  
        -1px 1px 0 #000,
         1px 1px 0 #000;
         ml-2 font-bold
         text-gray-300 
         drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
      "
      >
        solutions for people
      </h1>
      <Image
        src="/birdM_1.png"
        className="ml-2 "
        width={30}
        height={30}
        alt={"bird"}
      />


</div>
    </div>
  );
};

export default FooterBird;
