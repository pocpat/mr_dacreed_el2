import React from "react";
import Image from "next/image";
interface FooterBirdProps {
  height: number;
}

const FooterBird = ({ height }: FooterBirdProps) => {
  return (
    <div
      className="w-full mr-2  pt-5   text-gray-800 shadow-inner-top"
      style={{ height: `${height}px` }}
    >

<div   className="    flex flex-row justify-center text-center w-screen">

      <h1 className="text-accentd font-bold">Continuous learning</h1>
      <h1
        className="
         ml-2 font-bold
         text-gray-300 
         drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
      "
      >
        solutions for people
      </h1>
      <Image
        src="/birdM_1.png"
        className="ml-1 pb-2 "
        width={20}
        height={20}
        alt={"bird"}
      />


</div>
    </div>
  );
};

export default FooterBird;
