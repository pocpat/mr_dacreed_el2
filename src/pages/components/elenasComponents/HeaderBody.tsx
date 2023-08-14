import React, { useState } from "react";
import { api } from "~/utils/api";

const HeaderBody = () => {
  return (
    <>
      <div
        className="border-box flex flex-col bg-gray-400 p-4 "
        style={{ width: "100%", height: "100vh" }}
      >
        <CourseHeaderInput />
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
      onSuccess: (data:CourseHeader[]) => {
        if (data && data.length > 0 && data[0]) {
          setSelectedTitle(data[0] );
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
    <div className="mb-4 mt-4 flex w-full flex-col items-start justify-items-start rounded border-slate-100 bg-white p-4">
      <div className="m-2 flex w-full flex-col p-2">
        {/* INPUT FOR TITLE */}
        <input
          type="text"
          placeholder="Title goes here"
          className="input-bordered input input-sm m-2 h-12 w-auto"
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
        {/* INPUT FOR SUB HEADING */}
        <input
          type="text"
          placeholder="Sub-heading goes here:"
          className="input-bordered input input-sm m-2 h-12 w-auto"
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
        {/* INPUT FOR DESCRIPTION */}
        <input
          type="text"
          placeholder="Description goes here:"
          className="input-bordered input input-sm m-2 h-12 w-auto"
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
      <div>
        <div className="ml-6">
          <div className="bg-slate-400 p-2">
            {courseHeaders?.map((courseHeader: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; id: React.Key | null | undefined; }) => {
              if (courseHeader.title) {
                return <div key={courseHeader.id}>{courseHeader.title}</div>;
              }
            })}
          </div>
          <div className="border-solid border-black bg-slate-300 p-2">
            {courseHeaders?.map((courseHeader) => {
              if (courseHeader.subHeading) {
                return (
                  <div key={courseHeader.id}>{courseHeader.subHeading}</div>
                );
              }
            })}
          </div>
          <div className="border-solid border-black bg-slate-200 p-2">
            {courseHeaders?.map((courseHeader) => {
              if (courseHeader.description) {
                return (
                  <div key={courseHeader.id}>{courseHeader.description}</div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
