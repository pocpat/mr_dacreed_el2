import React from "react";
import { ZodErrorMap, string } from "zod";
import input from "~/pages/input/input";

interface InputQuestion {
    placeholder: string;
    name?: string;
    id?: string;
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    charsLeft?: number;
}
const InputQuestion: React.FC<InputQuestion> = ({type, placeholder, onChange, name, charsLeft }) => {
  return (
    <div>
       <div className="flex flex-row">
      <input
        type={type}
        placeholder={placeholder }
        className="input-bordered input w-full  m-2 rounded-sm shadow-inner-top "
        // className="shadow-inner shadow-sm m-2 mt-1 p-2 w-full rounded-sm"

        name={name}
        onChange={onChange}
      /> 
      </div>
      <div className="flex justify-between">
      <span className="ml-3 mt-0">Characters left: {charsLeft}</span>
      <span className="ml-3 mt-0 pr-2">Delete</span>
      </div>
    </div>
  );
};

export default InputQuestion;
