import React from "react";
import Link from "next/link";

const input = () => {
  return (
    <div>
      input
      <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="waiting/waiting"
      >
        <h3 className="text-2xl font-bold">WAITING</h3>
      </Link>
    </div>
  );
};

export default input;
