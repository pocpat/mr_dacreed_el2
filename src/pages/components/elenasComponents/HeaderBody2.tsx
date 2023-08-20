import React, { useState } from "react";
import { api } from "~/utils/api";

const HeaderBody2 = () => {
  return (
    <>
      <div
        className="border-box flex flex-col bg-primaryd p-4 "
        style={{ width: "100%", height: "auto" }}
      >
        <CourseHeaderInput2 />
      </div>
    </>
  );
};

export default HeaderBody2;

type CourseHeader2 = {
  id: string;
  title: string;
  subHeading: string;
  description: string;
};

const CourseHeaderInput2: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subHeading, setSubheading] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: createCourseHeader2 } = api.courseHeader.create.useMutation(
    {}
  );

  const resetForm = () => {
    setTitle("");
    setSubheading("");
    setDescription("");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      subHeading.trim() === "" ||
      description.trim() === ""
    ) {
      alert(
        `Sorry, all fields need to be filled so that we can save this to the database for you.`
      );
    } else {
      createCourseHeader2({
        title: title,
        subHeading: subHeading,
        description: description,
      });
      resetForm();
    }
  };

  return (
    <div className="flex h-auto w-full flex-col">
      <div className="m-4 flex h-auto flex-col p-4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="ml-3 font-bold">Title:</span>
            <input
              placeholder="Title goes here"
              className="input-bordered input input-sm m-2 h-12 w-auto"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="ml-3 font-bold">Sub-heading:</span>
            <input
              placeholder="Sub-heading goes here"
              className="input-bordered input input-sm m-2 h-12 w-auto"
              type="text"
              value={subHeading}
              onChange={(e) => setSubheading(e.target.value)}
              // charsLeft={150 - subHeading.length}
            />
                   {/* <span className="ml-3 mt-0">Characters left: {charsLeft}</span> */}
          </label>
          <label className="flex flex-col">
            <span className="ml-3 font-bold">Description:</span>
            <input
              placeholder="Description goes here"
              className="input-bordered input input-sm m-2 h-12 w-auto"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button
            className="ml-2 mt-4 h-12 w-28 rounded-md bg-[#b9cdd7] px-4 py-2 text-lg font-bold text-white hover:bg-[#105475]"
            type="submit"
            value="Create header"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
