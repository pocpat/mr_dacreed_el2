import React from "react";
import { ZodErrorMap, string } from "zod";
import input from "~/pages/input/input";

interface Input2Props {
    placeholder: string;
    name?: string;
    id?: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input2: React.FC<Input2Props> = ({type, placeholder, onChange, name }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder }
        className="input-bordered input w-full max-w-xs m-2"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input2;
