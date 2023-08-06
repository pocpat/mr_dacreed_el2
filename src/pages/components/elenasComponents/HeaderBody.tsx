import React from 'react'

interface HbProps {
      hbStrings: {
      hbTitle: string;
      hbSubheading: string;
      hbDescription: string;
  };
  onInputChange: (field: string, value: string) => void;
}



const HeaderBody: React.FC<HbProps> = ({hbStrings, onInputChange}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange('hbTitle', e.target.value);
  };
  return (
    <>
      <div 
      // className="flex flex-col justify-start items-center border-box bg-gray-400 p-4" 
      // style={{ width: "100%", height: '100vh' }}
      >
        <h1>Title</h1>
        <input
          type="text"
          value={hbStrings?.hbTitle}
          onChange={handleTitleChange}
          // className="m-2 p-2 rounded-md"
          className="textarea-bordered textarea textarea-xs w-full m-4"
          
          placeholder="Title"
        />
        </div>
    </>
  )
}

export default HeaderBody































// import React, { useState, useEffect } from "react";

// interface HeaderBodyProps {
//     hbStrings: {
//     hbtitle: string;
//     hbsubheading: string;
//     hbdescription: string;
//   };
//   onInputChange: (field: string, value: string) => void;
// }

// const HeaderBody
// : React.FC<HeaderBodyProps> 
// = ( 
  // {hbStrings, onInputChange}
  //  ) => {
  // const [charsLeft, setCharsLeft] = useState([150, 150, 260]);
  // const [titleValue, setTitleValue] = useState("");
  // const [subheadingValue, setSubheadingValue] = useState("");
  // const [descriptionValue, setDescriptionValue] = useState("");



  // useEffect(() => {
  //   const textareas = document.querySelectorAll("textarea");
  //   textareas.forEach((textarea, index) => {
  //     if (textarea) {
  //       const maxLength = parseInt(textarea.getAttribute("maxlength") || "0");

  //       textarea.addEventListener("input", (event) => {
  //         const target = event.currentTarget as HTMLTextAreaElement;
  //         const currentLength = target.value.length;
  //         setCharsLeft((charsLeft) => {
  //           const newCharsLeft = [...charsLeft];
  //           newCharsLeft[index] = maxLength - currentLength;
  //           return newCharsLeft;
  //         });
  //       });
  //     }
  //   });
  // }, []);


  // return (
  //   <>
  //     <div
        // className="border-box flex flex-col items-center justify-start bg-gray-400 p-4 "
        // style={{ width: "100%", height: "100vh" }}
      // >
        {/* Title */}
        {/* <div className="form-control w-full"> */}
          {/* <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
          type="text"
          value={hbStrings?.hbtitle}
          onChange={(e) => onInputChange("title", e.target.value)} */}
          {/* // className="m-2 p-2 rounded-md"
          // className="textarea-bordered textarea textarea-xs w-full m-4"
          // maxLength={150}
          // placeholder="Title here"
          // className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
          // style={{ width: "100%" }}
          
          // placeholder="Title"
        /> */}
          {/* <textarea
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
            maxLength={150}
            placeholder="Title here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
            readOnly={false}
          ></textarea> */}

          {/* <label className="label">
            <span className="label-text-alt">
              Characters left: */}
               {/* {charsLeft[0]} */}
            {/* </span>
            <span className="label-text-alt">Re-generate</span>
          </label> */}
        {/* </div> */}





        {/* Sub-heading */}
        {/* <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Sub-heading</span>
            {/* <span className="label-text-alt">Alt label</span> */}
          {/* </label>

          <textarea
            value={subheadingValue}
            onChange={(e) => setSubheadingValue(e.target.value)}
            maxLength={150}
            placeholder="Sub-heading here"
            className="textarea-bordered textarea textarea-xs w-full  rounded-sm shadow-md"
            readOnly={false}
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              Characters left: {charsLeft[1]}
            </span>
            <span className="label-text-alt">Re-generate</span>
          </label>
        </div> */}





        {/* Description */}
        {/* <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
            {/* <span className="label-text-alt">Alt label</span> */}
        {/* //   </label>
        //   <textarea */}
        {/* //     value={descriptionValue}
        //     onChange={(e) => setDescriptionValue(e.target.value)}
        //     maxLength={260}
        //     className="textarea-bordered textarea h-24 w-full rounded-sm shadow-md"
        //     placeholder="Description"
        //     readOnly={false}
        //   ></textarea>
        //   <label className="label">
        //     <span className="label-text-alt">
        //       Characters left: {charsLeft[2]}
        //     </span>
        //     <span className="label-text-alt">Re-generate</span>
        //   </label>
        // </div> */}




//       </div>
//     </>
//   );
// };

// export default HeaderBody;
