import React from "react";
import { ZodErrorMap, string } from "zod";

interface InputCommentary {
  placeholder: string;
  name?: string;
    id?: string;
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    charsLeft?: number;
}

const Commentary: React.FC<InputCommentary> = ({type, placeholder, onChange, name, charsLeft }) => {
  return (
    <div>
      <div className="mt-4 flex flex-col">
        <label className="ml-3 mt-0">
          <span className="  font-bold text-accenttext">Commentary</span>
        </label>
        <input
          type={type}
          placeholder="add a commentary"
          className="m-2  mt-1 w-full rounded-sm p-2 shadow-inner-top"
           name={name}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-between">
        <span className="ml-3 mt-0">
          Characters left:
           {charsLeft} 
        </span>
        <span className="ml-3 mt-0 pr-2">Delete</span>
      </div>
    </div>
  );
};

export default Commentary;
