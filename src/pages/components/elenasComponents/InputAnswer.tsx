import React from "react";

interface InputAnswerProps {
  placeholder: string;
  name?: string;
  id?: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputAnswer: React.FC<InputAnswerProps> = ({
  type,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <div>
      <div className="flex flex-row items-center ">
        <input
          type={type}
          placeholder={placeholder}
          className="newAnswer input-bordered input m-2 w-full max-w-xl rounded-sm shadow-inner "
          // className="shadow-inner shadow-md m-2 mt-1 p-2 w-full rounded-sm"
          name={name}
          onChange={onChange}
        />
        <input
          type="checkbox"
          className="form-control checkbox h-12 w-12 rounded-sm"
        />
      </div>
    </div>
  );
};

export default InputAnswer;
