import React, { useState } from "react";
import { api } from "~/utils/api";
interface CourseHeaderInput2Props {
 
  charsLeft: number;
}


const CreateCourseForm : React.FC<CourseHeaderInput2Props> = ({

  charsLeft
}) => {
  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: createCourse } = api.course.create.useMutation();

  const handleSubmit = () => {
    try {
      createCourse({
        title,
        subHeading,
        description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="border-box flex flex-col bg-primaryd p-4 "
      style={{ width: "100%", height: "auto" }}
    >
      {/* Title */}
      <label className="flex flex-col">
        <span className="ml-3 font-bold">Course Title ❔</span>
        <input
          className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=" 🖋️ Type course title here"
          charsLeft={title ? 150 - title.length: 150}
        />
      </label>

      {/* Sub-heading */}
      <label className="flex flex-col">
        <span className="ml-3 font-bold">Sub-heading❔</span>
        <input
          className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
          value={subHeading}
          onChange={(e) => setSubHeading(e.target.value)}
          placeholder=" 🖋️ Type subHeading here "
          charsLeft={subHeading ? 150 - subHeading.length: 150}
          
        />
      <span className="ml-3 mt-0">Characters left: {charsLeft}</span> 
      </label>

      {/* Description */}

      <label className="flex flex-col">
        <span className="ml-3 font-bold">Description❔</span>
        <input
          className="input input-bordered input-sm m-2 h-12 w-auto rounded-sm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=" 🖋️ Type description here "
          charsLeft={description ? 150 - description.length: 150}
          
        />
      </label>
      <button className="z-30 m-2 bg-blue-500" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateCourseForm;
