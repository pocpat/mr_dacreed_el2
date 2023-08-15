import React from "react";

interface InputAnswerProps {
  placeholder: string;
  name?: string;
  id?: string;
  type: string;
  value: string | number |  undefined;
  text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
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
      <div className="flex flex-row items-center  ">
        <input
          type={type}
          placeholder={placeholder}
          className="newAnswer input-bordered input m-2 w-full max-w-xl rounded-sm shadow-inner shadow-md "
          name={name}
          onChange={onChange}
        />
        <input
          type="checkbox"
          className="form-control checkbox h-12 w-12 rounded-sm shadow-inner shadow-md "
        />
      </div>
    </div>
  );
};

export default InputAnswer;
