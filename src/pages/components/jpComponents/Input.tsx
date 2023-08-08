import React from "react";
import { api } from "~/utils/api";

const Input = () => {
  console.log("Hitting this point.");
  return (
    <div className="m-4 w-1/2 rounded-lg bg-slate-400 p-4">
      <div>
        <h3 className="m-1 p-1 ">TEST INPUT</h3>
      </div>
      <input
        type="text"
        placeholder="Enter text"
        className="mt-1 block w-80 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm"
      />
    </div>
  );
};

export default Input;
