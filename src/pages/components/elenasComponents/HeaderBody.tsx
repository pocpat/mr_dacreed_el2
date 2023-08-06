import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor";
import Quill, { DeltaStatic } from "quill";
import hljs from "highlight.js";

const HeaderBody = () => {
  const [charsLeft, setCharsLeft] = useState([150, 150, 260]);
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(["", "", ""]);


  const processTextAreaInput =( index: number, maxLength : number, event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setTextAreaValue((textAreaValue)=> {
      textAreaValue[index] = event.target.value;
      return textAreaValue;
    });
    const currentLength = event.target.value.length;
    setCharsLeft((charsLeft) => {
      const newCharsLeft = [...charsLeft];
      newCharsLeft[index] = maxLength - currentLength;
      return newCharsLeft;
    });

  }


  const handleIconClick = () => {
    setShowTextEditor(true);
  };

  return (
    <>
      <div
        className="border-box flex flex-col items-center justify-start bg-gray-400 p-4 "
        style={{ width: "100%", height: "100vh" }}
      >
        {/* Title */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>

          <textarea
            value={textAreaValue[0]}
            onChange={(e) => processTextAreaInput(0, 150, e)}
            maxLength={150}
            placeholder="Title here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
            // readOnly= {false}
          ></textarea>
          {/* editing icon */}
         </div>
      </div>
    </>
  );
};

export default HeaderBody;
