import Link from "next/link";
import React from "react";
import { useUser } from "@clerk/nextjs";
import JpModal from "./JpModal";

const SideMenu = () => {
  const { user } = useUser();

  return (
    <div className="container m-4 flex w-40 flex-col items-center justify-start rounded-xl bg-black">
      <div className="my-3 flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-100">
        <img
          className="rounded-lg"
          src={user?.profileImageUrl ?? ""}
          alt={user?.firstName ?? ""}
        />
      </div>

      <Link
        href="#"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Focus Heading
      </Link>
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question2
      </Link>
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question3
      </Link>
      <Link
        href="/"
        className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        aria-current="page"
      >
        Question4
      </Link>
    </div>
  );
};

export default SideMenu;

// import { useState } from 'react';
// import RenderedComponent from '../components/RenderedComponent';

// const IndexPage = () => {
//   const [showComponent, setShowComponent] = useState(false);

//   const handleClick = () => {
//     setShowComponent(true);
//   };

//   return (
//     <div>
//       <h1>Next.js Button Example</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {showComponent && <RenderedComponent />}
//     </div>
//   );
// };

// export default IndexPage;
