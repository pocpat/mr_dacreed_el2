import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import HeaderBody from "./HeaderBody";
// import Question1 from "./Question1";

// import { set } from "zod";
import HeaderBody2 from "./HeaderBody2";
import QuestionsList from "~/componentsRoot/QuestionsList";

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
interface AccordionMiddle2Props {
  courseId: string;
}

const AccordionMiddle2: React.FC<AccordionMiddle2Props> = ({ courseId }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  console.log("AccodrionMiddle2 courseId: ", courseId);
  const charsLeft = 150;
  return (
    <div>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-accentd font-bold text-primaryd"
          onClick={() => handleOpen(1)}
        >
          Course Description
        </AccordionHeader>
        <AccordionBody className="rounded-5xl bg-lightsecondaryd content-center justify-center border-4">
          {/* <HeaderBody /> */}
          <HeaderBody2 courseId={courseId} charsLeft={charsLeft} />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="rounded-5xl content-center justify-center border-4 bg-accentd font-bold text-primaryd"
          onClick={() => handleOpen(2)}
        >
          Question
        </AccordionHeader>

        <br />
        <AccordionBody className="rounded-5xl  content-center justify-center border-4  bg-lightsecondaryd" >
          <QuestionsList courseId={courseId}/>
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default AccordionMiddle2;
