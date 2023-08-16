import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import HeaderBody from "./HeaderBody";
import Question1 from "./Question1";

import { set } from "zod";
import HeaderBody2 from "./HeaderBody2";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AccordionMiddle2 = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-header-image bg-cover bg-left-bottom bg-no-repeat font-bold text-[#1A3A50]"
          onClick={() => handleOpen(1)}
        >
          Course Description
        </AccordionHeader>
        <AccordionBody className="rounded-5xl  content-center justify-center border-4 border-slate-200 bg-slate-50">
          {/* <HeaderBody /> */}
          <HeaderBody2 />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-header-image3 bg-cover bg-left-bottom bg-no-repeat font-bold text-[#1A3A50]"
          onClick={() => handleOpen(2)}
        >
          Question
        </AccordionHeader>
        <br />
        <AccordionBody className="rounded-5xl  content-center justify-center bg-[#BDFDFDF]  ">
          <Question1 />
        </AccordionBody>
      </Accordion>
    </>
  );
};
export default AccordionMiddle2;
