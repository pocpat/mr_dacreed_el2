import React from "react";
// import Link from "next/link";
// import Loading1 from "~/pages/components/elenasComponents/Loading1";
import { Header } from "~/componentsRoot/Header";
import FooterBird from "~/componentsRoot/FooterBird";
import LoadingCircle from "~/pages/components/elenasComponents/LoadingCircle";



const waiting:React.FC = () => {
  return (
    <>
        {/* <Header /> */}
        {/*  < bg */}
        <div className=" middleOne
        // bg-[url('/bg_loading.png')]  
        // bg-cover  
        // bg-no-repeat
        bg-red-700
        h-700
        ">   
  <div className="flex justify-center items-center min-h-screen">
      <LoadingCircle percentage={100} />
    </div>
           </div>  
           </>
  );
};

export default waiting;