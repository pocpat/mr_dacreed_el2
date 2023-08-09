import React, { useState } from "react";
import { api } from "~/utils/api";

const HeaderBody = () => {
  return (
    <>
      <CourseHeaderInput />
      {/* <TestInput /> */}
      <div
        className="border-box flex flex-col items-center justify-start bg-gray-400 p-4 "
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>

          <textarea
            placeholder="Title here"
            className="shadow-inner-md textarea-bordered textarea textarea-xs w-full rounded-sm"
            style={{ width: "100%" }}
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Sub-heading</span>
          </label>

          <textarea
            placeholder="Sub-heading here"
            className="textarea-bordered textarea textarea-xs w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>

          <textarea
            placeholder="Description here"
            className="textarea-bordered textarea  h-48 w-full rounded-sm shadow-md"
            style={{ width: "100%" }}
          ></textarea>
        </div>
        <div></div>
        <textarea
          id="title"
          className="mt-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Title will be populated here:"
        ></textarea>
        <textarea
          id="sub-heading"
          className="mt-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Sub-heading will be populated here:"
        ></textarea>
        <textarea
          id="description"
          className="mt-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Description will be populated here:"
        ></textarea>
      </div>
    </>
  );
};

export default HeaderBody;

type CourseHeader = {
  id: string;
  title: string;
  subHeading: string;
  description: string;
};

const CourseHeaderInput: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<CourseHeader | null>(null);
  const { data: courseHeaders, refetch: refetchTopics } =
    api.courseHeader.getAll.useQuery(undefined, {
      onSuccess: (data) => {
        if (data && data.length > 0 && data[0]) {
          setSelectedTitle(data[0]);
        } else {
          setSelectedTitle(null);
        }
      },
    });

  const createCourseHeader = api.courseHeader.create.useMutation({
    onSuccess: () => {
      console.log("We think its going to db");
      void refetchTopics();
    },
  });

  return (
    <div className="mb-4 mt-4 flex flex-col items-start justify-center rounded-lg border-slate-100 bg-white p-4">
      <div className="col-span-3">
        <input
          type="text"
          placeholder="Title goes here:"
          className="input-bordered input input-sm w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createCourseHeader.mutate({
                title: e.currentTarget.value,
                subHeading: "",
                description: "",
              });
              e.currentTarget.value = "";
            }
          }}
        />
        <input
          type="text"
          placeholder="Sub-heading goes here:"
          className="input-bordered input input-sm w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createCourseHeader.mutate({
                title: "",
                subHeading: e.currentTarget.value,
                description: "",
              });
              e.currentTarget.value = "";
            }
          }}
        />
        <input
          type="text"
          placeholder="Description goes here:"
          className="input-bordered input input-sm w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createCourseHeader.mutate({
                title: "",
                subHeading: "",
                description: e.currentTarget.value,
              });
              e.currentTarget.value = "";
            }
          }}
        />
      </div>

      <h1>Posted data:</h1>
      <div>
        <ul className="menu m-2 rounded-lg border-2 p-4">
          {courseHeaders?.map((courseHeader) => (
            <li key={courseHeader.id}>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  // setSelectedInput();
                }}
              >
                {courseHeader.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="ml-4 rounded-lg bg-[#064e3b] p-2 text-white hover:bg-[#059669]">
          Save Changes
        </button>
      </div>
    </div>
  );
};
