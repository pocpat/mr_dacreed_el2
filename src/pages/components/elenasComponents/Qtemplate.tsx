import React from 'react';

interface QtemplateProps {
  qStrings: {
    title: string;
    subheading: string;
    description: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const Qtemplate: React.FC<QtemplateProps> = ({ qStrings, onInputChange }) => {
  const handleInputChange = (field: string, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    onInputChange(field, value);
  };

  return (
    <div className="border-box bg-gray-400" style={{ width: "100%", height: '100vh' }}>
      <h1>Title</h1>
      <textarea
        placeholder="Title"
        className="textarea-bordered textarea textarea-xs w-full "
        value={qStrings.title}
        onChange={(e) => handleInputChange("title", e)} // Call the function to update the parent's state
      ></textarea>
      <h1>Sub-heading</h1>
      <textarea
        placeholder="Sub-heading"
        className="textarea-bordered textarea textarea-xs w-full"
        value={qStrings.subheading}
        onChange={(e) => handleInputChange("subheading", e)} // Call the function to update the parent's state
      ></textarea>
      <h1>Description</h1>
      <textarea
        placeholder="Description"
        className="textarea-bordered textarea textarea-md w-full"
        value={qStrings.description}
        onChange={(e) => handleInputChange("description", e)} // Call the function to update the parent's state
      ></textarea>
    </div>
  );
};

export default Qtemplate;
