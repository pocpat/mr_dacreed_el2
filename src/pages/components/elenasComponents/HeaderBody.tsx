import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor";
import Quill, { DeltaStatic } from "quill";
import hljs from "highlight.js";

const HeaderBody = () => {
  const [charsLeft, setCharsLeft] = useState([150, 150, 260]);
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea, index) => {
      if (textarea) {
        const maxLength = parseInt(textarea.getAttribute("maxlength") || "0");

        textarea.addEventListener("input", (event) => {
          const target = event.currentTarget as HTMLTextAreaElement;
          const currentLength = target.value.length;
          setCharsLeft((charsLeft) => {
            const newCharsLeft = [...charsLeft];
            newCharsLeft[index] = maxLength - currentLength;
            return newCharsLeft;
          });
        });
      }
    });
  }, []);

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
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            maxLength={150}
            placeholder="Title here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
          ></textarea>
          {/* editing icon */}
          <button
            className="absolute right-0 top-0 m-2"
            onClick={handleIconClick}
          >
            📝
          </button>
          {showTextEditor && (
            <div className="fixed left-0 top-0 z-10 h-full w-full bg-white p-4">
              <TextEditor content={textAreaValue} />
              <button onClick={() => setShowTextEditor(false)}>Close</button>
            </div>
          )}
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[0]}{" "}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
          {/* Quill editor container */}
          <div id="editor-container"></div>
        </div>

        {/* Sub-heading */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Sub-heading</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>

          <textarea
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            maxLength={150}
            placeholder="Sub-heading here"
            className="textarea-bordered textarea textarea-xs w-full  rounded-sm shadow-md"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[1]}{" "}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>

        {/* Description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
          <textarea
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            maxLength={260}
            className="textarea-bordered textarea h-24 w-full rounded-sm shadow-md"
            placeholder="Description"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[2]}{" "}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default HeaderBody;
