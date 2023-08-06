import React from "react";
import { useState } from "react";

const JPButtonRender = () => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    if (!showMore) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    // <div className="mb-4 flex h-96 flex-row items-center justify-center rounded-lg bg-gradient-to-b from-[#075985] to-[#7dd3fc]">
    <div className="mb-4 flex h-96 flex-row items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-62 mb-4 flex flex-row items-center justify-center rounded-lg bg-white">
        {!showMore && <FirstButtons />}
        {showMore && <SecondButtons />}
        <button
          onClick={handleClick}
          className="h-16 rounded-lg border-4 border-white bg-[#38bdf8] p-1"
        >
          <img
            src="/fwdArrow.png"
            alt="arrow = next"
            height="20px"
            width="20px"
          />
        </button>
      </div>
    </div>
  );
};

export default JPButtonRender;

const FirstButtons = () => {
  return (
    <div className="ml-4 grid grid-flow-col grid-rows-3 gap-4 rounded-l-lg bg-white p-4">
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Multi-choice
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Open-ended
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Drag / Drop
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        True / False
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Slider
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Multimedia
      </button>
    </div>
  );
};
const SecondButtons = () => {
  return (
    <div className="flexml-4 grid grid-flow-col grid-rows-3 gap-4 rounded-l-lg bg-white p-4">
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Matching
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Puzzle
      </button>
      <button className="delay-50 m-2 flex w-80 max-w-xs flex-col items-center justify-center gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
        Import
      </button>
    </div>
  );
};
