import Link from "next/link";
import React from "react";
import TextEditor from "../elenasComponents/TextEditor";
import JPTextEditor from "./JPTextEditor";
import SideMenu from "./SideMenu";

const MainView = () => {
  return (
    <div className="flex flex-row justify-evenly bg-white p-2">
      <SideMenu />
      <div className="w-70vw bg-black-400 container m-4 rounded-xl">
        <JPTextEditor />
        <br />
        <JPTextEditor />
        <br />
        <JPTextEditor />
        <br />
        <JPTextEditor />
        <br />
        <JPTextEditor />
        <br />
      </div>
      <div className="container m-4 flex w-40 flex-col justify-start rounded-xl bg-black">
        <span className="text-1 text-center font-bold tracking-tight text-white">
          Editor:
        </span>

        <Link
          href="/"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
        >
          Heading
        </Link>
        <Link
          href="/"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
        >
          Description
        </Link>
        <Link
          href="/"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
        >
          Section +
        </Link>
        <Link
          href="/"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
        >
          Questions
        </Link>
        <Link
          href="/"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
          aria-current="page"
        >
          <img rel="icon" src="/birdFP.png" />
        </Link>
      </div>
    </div>
  );
};
export default MainView;
