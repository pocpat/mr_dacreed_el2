import React from "react";
import { Header } from "~/componentsRoot/Header";
import AccordionMiddle from "~/pages/components/elenasComponents/AccordionMiddle";
import AccordionMiddle2 from "~/pages/components/elenasComponents/AccordionMiddle2";

const Common = () => {
  return (
    <div>
      <Header />
      <div className="pl-10 pr-10">
        <AccordionMiddle2 />
      </div>
    </div>
  );
};

export default Common;
