import React from 'react'
import Link from "next/link";

const editing = () => {
  return (
    <div>editing
          <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="#"
      >
        <h3 className="text-2xl font-bold">Jono 1</h3>
      </Link>
      <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="#"
      >
        <h3 className="text-2xl font-bold">Jono 2</h3>
      </Link>
      <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="/input/waiting/editing/elena1"
      >
        <h3 className="text-2xl font-bold">Elena 1</h3>
      </Link>
      <Link
        className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
        href="#"
      >
        <h3 className="text-2xl font-bold">Elena 2</h3>
      </Link>
     
    </div>
  )
}

export default editing