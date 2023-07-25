import React from 'react'
import Link from "next/link";

const waiting = () => {
  return (
    <div>waiting
         <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="/input/waiting/editing/editing"
      >
        <h3 className="text-2xl font-bold">EDITING</h3>
      </Link>
    </div>
  )
}

export default waiting