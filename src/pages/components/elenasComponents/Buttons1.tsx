import React from 'react'

const Buttons1 = () => {
  return (
    <>
    <h2 className='bg-primaryd-content font-bold text-neutral-500'>Buttons1</h2>
    <div className="flex flex-row space-x-2 items-center justify-center min-h-screen min-w-screen">
<section className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
<div className="flex flex-col space-y-4">

    <button className="p-3 border border-black text-2xl uppercase rounded-lg rounded-tr-none rounded-bl-none outline-none shadow-lg hover:shadow-xl hover:rounded-none duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-lg rounded-tl-none rounded-br-none outline-none shadow-lg hover:shadow-xl hover:rounded-none duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-lg rounded-br-none outline-none shadow-lg hover:shadow-xl hover:rounded-tl-none hover:rounded-br-lg duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-lg rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:rounded-tr-none duration-200">Button</button>
  </div>
  <div className="flex flex-col space-y-4">
    <button className="p-3 border border-black text-2xl uppercase rounded-lg outline-none shadow-lg hover:shadow-xl hover:rounded-3xl duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-full rounded-br-none outline-none shadow-lg hover:shadow-xl hover:rounded-full duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-full rounded-l-none outline-none shadow-lg hover:shadow-xl hover:rounded-full duration-200">Button</button>
    <button className="p-3 border border-black text-2xl uppercase rounded-3xl rounded-b-lg outline-none shadow-lg hover:shadow-xl hover:rounded-xl duration-200">Button</button>
  </div>
  </section>
  </div>
   


    </>
  )
}

export default Buttons1


