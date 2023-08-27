import React from "react";
import Image from "next/image";

const Bird = () => {
  return (
    <div>
      <Image src="/welcome_logo_3.png" alt="logo" className=" animate-bird-in " width={30} height={30} />
    </div>
  );
};
export default Bird;
