import React from 'react'
import Qtemplate from './Qtemplate'

const HeaderBody = () => {
  interface QtemplateProps {
    qStrings: {
      title: string;
      subheading: string;
      description: string;
    };
    onInputChange: (field: string, value: string) => void;
  }
  // const Qtemplate: React.FC<QtemplateProps> = ( {qStrings, onInputChange} ) => {

  return (
    <>
           <div 
      className="flex flex-col justify-start items-center border-box bg-gray-400 p-4" 
      style={{ width: "100%", height: '100vh' }}
      >
        <h1>Title</h1>
        <input
          type="text"
          // value={qStrings?.title}
          // onChange={(e) => onInputChange("title", e.target.value)}
          // // className="m-2 p-2 rounded-md"
          // className="textarea-bordered textarea textarea-xs w-full m-4"
          
          placeholder="Title"
        />

        <h1>Sub-heading</h1> 
        <input
          type="text"
          // value={qStrings?.subheading}
          // onChange={(e) => onInputChange("subheading", e.target.value)}
          // className="textarea-bordered textarea textarea-xs w-full m-4"
          placeholder="Sub-heading"
        />

        <h1>Description</h1>
        <textarea
          // value={qStrings?.description}
          // onChange={(e) => onInputChange("description", e.target.value)}
          // className="textarea-bordered textarea textarea-md w-full m-4"
          placeholder="Description"
        />
      </div>

    </>
  )
}

export default HeaderBody