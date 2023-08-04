import React, { useState, useEffect } from "react";

const HeaderBody = () => {
  const [charsLeft, setCharsLeft] = useState([150,150,260]);

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea, index) => {
    if (textarea) {
      const maxLength = parseInt(textarea.getAttribute("maxlength") || "0");
     

      textarea.addEventListener("input", event => {
        const target = event.currentTarget as HTMLTextAreaElement;
        const currentLength = target.value.length;
        setCharsLeft(charsLeft => {
          const newCharsLeft = [...charsLeft];
          newCharsLeft[index] = maxLength - currentLength;
          return newCharsLeft;
        });
      });
    }
  });
  }
  , []);
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
          maxLength={150}
            placeholder="Title here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Characters left:  {charsLeft[0]} </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>

 {/* Sub-heading */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold" >Sub-heading</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>

          <textarea
                maxLength={150}
            placeholder="Sub-heading here"
            className="textarea-bordered textarea textarea-xs w-full  rounded-sm shadow-md"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Characters left:  {charsLeft[1]} </span>
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
                maxLength={260}
            className="textarea-bordered textarea h-24 w-full rounded-sm shadow-md"
            placeholder="Description"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Characters left:  {charsLeft[2]} </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default HeaderBody;
