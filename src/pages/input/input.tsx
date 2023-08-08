import React from "react";
import Link from "next/link";

const input = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]">
          <span
            className="larger-font text-[#194759]"
            style={{ fontSize: "100px" }}
          >
            INPUT PAGE
          </span>
        </h1>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
          href="waiting/waiting"
        >
          <h3 className="text-2xl font-bold">WAITING</h3>
        </Link>
      </main>
    </div>
  );
};

export default input;
