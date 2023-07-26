import React from "react";

interface ButtonGroupProps {
  onSelect: (content: string) => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ onSelect }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <p>Sections</p>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Header"; // Change this to the desired content for this button
            onSelect(content);
          }}
        >
          Header
        </button>

        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Q 1";
            onSelect(content);
          }}
        >
          Q 1
        </button>

        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = " Q 2";
            onSelect(content);
          }}
        >
          Q 2
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Q 3";
            onSelect(content);
          }}
        >
            Q 3
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Q 4";
            onSelect(content);
          }}
        >
            Q 4
        </button>
        <button
          className="btn m-2 w-40 drop-shadow-md"
          onClick={() => {
            const content = "Footer";
            onSelect(content);
          }}
        >
            Footer
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;