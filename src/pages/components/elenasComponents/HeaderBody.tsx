import React, { useState } from "react";

const HeaderBody = () => {
  const [charsLeft, setCharsLeft] = useState([150, 150, 260]);
  // const [showTextEditor, setShowTextEditor] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(["", "", ""]);

  const processTextAreaInput = (
    index: number,
    maxLength: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue((textAreaValue) => {
      textAreaValue[index] = event.target.value;
      return textAreaValue;
    });

    const currentLength = event.target.value.length;
    setCharsLeft((charsLeft) => {
      const newCharsLeft = [...charsLeft];
      newCharsLeft[index] = maxLength - currentLength;
      return newCharsLeft;
    });
  };

  // const handleIconClick = () => {
  //   setShowTextEditor(true);
  // };

  return (
    <>
      <div
        className="border-box flex flex-col items-center justify-start bg-gray-200 p-4 "
        style={{ width: "100%", height: "100vh", backgroundColor: "#B9CCC8" }}
        
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
            className="shadow-md textarea-bordered textarea textarea-xs w-full rounded-sm"
            style={{ width: "100%" }}
            // z-index='-1'
            // readOnly= {false}
          ></textarea>

          {/* labels */}
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[0]}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>

 {/* Sub-heading */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Sub-heading</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>

          <textarea
            value={textAreaValue[1]}
            onChange={(e) => processTextAreaInput(1, 150, e)}
            maxLength={150}
            placeholder="Sub-heading here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}

          ></textarea>
          {/* labels */}
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[1]}
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
            value={textAreaValue[2]}
            onChange={(e) => processTextAreaInput(2, 150, e)}
            maxLength={150}
            placeholder="Description here"
            className="textarea-bordered textarea  h-48 w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
          ></textarea>

          {/* labels */}
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[2]}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>

        
      </div>
    </>
  );
};

export default HeaderBody;
