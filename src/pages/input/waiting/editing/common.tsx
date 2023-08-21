'use client'

import React from "react";
import { Header } from "~/componentsRoot/Header";
import Rpannel from "~/componentsRoot/Rpannel";
import AccordionMiddle2 from "~/pages/components/elenasComponents/AccordionMiddle2";
import RpannelPlaceholder from "~/pages/components/elenasComponents/RpannelPlaceholder";
import { useSearchParams } from "next/navigation"


const Common = () => {
  const params = useSearchParams();
  const courseId = params.get('editCourseId');
  console.log("common.tsx courseId: ", courseId);
  return (
    <div className="relative">
      <Header />
      <div className="pl-10 pr-10 flex ">
        <div className="flex-none w-20 ">L Pannel</div>
        <div className="grow  w-45"> <AccordionMiddle2 courseId={courseId} /></div> 
        <div className="flex-none w-25 "> <RpannelPlaceholder /></div> 
        <div className="flex-none w-25 fixed top-15 right-8"> <Rpannel /></div> 
      </div>
    </div>
  );
};

export default Common;


// input/waiting/editing/common