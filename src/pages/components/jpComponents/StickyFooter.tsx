import Link from "next/link";
import React from "react";

const StickyFooter = () => {
  return (
    <div>
      <div>
        <Link
          href="*"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        >
          Save draft
        </Link>
        <Link
          href="*"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        >
          Send for review
        </Link>
        <Link
          href="*"
          className="m-2 rounded-md bg-sky-500/75 px-5 py-5 text-sm font-medium text-white hover:bg-sky-400/50"
        >
          Publish
        </Link>
      </div>
    </div>
  );
};

export default StickyFooter;
