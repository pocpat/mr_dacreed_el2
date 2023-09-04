import React from "react";

import WaterProgress from "~/componentsRoot/WaterProgress";
import Header from "~/componentsRoot/Header";
import FooterBird from "~/componentsRoot/FooterBird";
import Link from "next/link";

const waiting: React.FC = () => {
  return (
    <div className="middleOne flex min-h-screen flex-col bg-white">
      <Header />
      {/* Top third with a different background color */}
      {/* <div className="flex-1 bg-lightsecondaryd"> */}
      {/* You can add content for the top section here */}
      {/* </div> */}

      {/* Middle third with WaterProgress centered and button to access to Waiting quiz*/}
      <div className="flex flex-1 flex-col items-center justify-center bg-white text-center">
        <h2 className="mb-5 font-bold">
          While you wait, we invite you to enjoy our Trivia Quiz
        </h2>
        <Link
          href="/input/waiting/waitingQuizz"
          // className="from-sky-800 mb-4 flex h-12 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-b to-teal-500 text-white "
          className="focus:ring-emerald-300 mb-4 flex h-12 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#578ea0] from-[#578ea0] to-[#1f425c] to-[#1f425c] text-white hover:bg-gradient-to-t focus:outline-none focus:ring-4"
          // className="rounded-full bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Quiz
        </Link>
        <WaterProgress />
      </div>

      {/* Bottom third with FooterBird */}
      <div className="flex-1  bg-white">
        <FooterBird height={50} />
      </div>
    </div>
  );
};

export default waiting;

{
  /* <div className=" middleOne bg-white min-h-screen flex flex-col">
<Header />
<WaterProgress/> 
<div className="flex flex-row items-center justify-center content-center">
<FooterBird height={50} />
</div>
</div> */
}
