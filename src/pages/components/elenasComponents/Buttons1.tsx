import React from "react";

const Buttons1 = () => {
  return (
    <>
      <h2 className="bg-primaryd-content font-bold text-neutral-500">
        Buttons1
      </h2>
      <div className="min-w-screen flex min-h-screen flex-row items-center justify-center space-x-2">
        <section className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col space-y-4">
            <button className="rounded-lg rounded-bl-none rounded-tr-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-none hover:shadow-xl">
              Button
            </button>
            <button className="rounded-lg rounded-br-none rounded-tl-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-none hover:shadow-xl">
              Button
            </button>
            <button className="rounded-lg rounded-br-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-br-lg hover:rounded-tl-none hover:shadow-xl">
              Button
            </button>
            <button className="rounded-lg rounded-tl-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-tr-none hover:shadow-xl">
              Button
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="rounded-lg border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-3xl hover:shadow-xl">
              Button
            </button>
            <button className="rounded-full rounded-br-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-full hover:shadow-xl">
              Button
            </button>
            <button className="rounded-full rounded-l-none border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-full hover:shadow-xl">
              Button
            </button>
            <button className="rounded-3xl rounded-b-lg border border-black p-3 text-2xl uppercase shadow-lg outline-none duration-200 hover:rounded-xl hover:shadow-xl">
              Button
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Buttons1;
