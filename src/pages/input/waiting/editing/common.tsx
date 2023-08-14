import React from "react";
import { Header } from "~/componentsRoot/Header";
import AccordionMiddle from "~/pages/components/elenasComponents/AccordionMiddle";
const Common = () => {
  return (
    <div>
      <Header />
      <div className="pl-10 pr-10">
        <AccordionMiddle />
      </div>
    </div>
  );
};

export default Common;
