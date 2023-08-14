import React from "react";
import Link from "next/link";
import { Header } from "~/componentsRoot/Header";
import TopNav from "../components/jpComponents/TopNav";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";

const Input = () => {
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };

  const CourseCreationModal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-2/5 rounded-xl bg-white p-8">
            <div className="p-41 flex flex-row items-center justify-items-center">
              <div className="w-3/5">
                <CourseForm />
                <div className="flex w-3/4 flex-row items-center justify-between">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    className="mt-4 w-1/3 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
                  >
                    BACK
                  </button>
                  <button className="mt-4 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50">
                    CONT TO COURSE
                  </button>
                </div>
              </div>
              <div className="flex h-auto w-2/5 items-center justify-center">
                <img
                  src="/birdFP.png"
                  alt="Bird-logo"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#b7ccd6] p-6">
      <main className="flex flex-col items-center justify-center">
        {/* <h1 className="font-extrabold tracking-tight text-white drop-shadow-md sm:text-[5rem]"> */}

        <div>
          <div className="my-6 flex flex-col items-center">
            <span
              className="bg-gradient-to-r from-cyan-900 to-cyan-500 bg-clip-text font-extrabold text-transparent"
              style={{ fontSize: "70px" }}
            >
              Welcome to your course creation {user?.firstName}.
            </span>
            <br></br>
            <br></br>
            <span
              className="bg-gradient-to-r from-cyan-900 to-cyan-600 bg-clip-text font-extrabold text-transparent"
              style={{ fontSize: "30px" }}
            >
              How would you like to proceed today?
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <a
            aria-current="page"
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
            onClick={handleModal}
          >
            <h3 className="text-2xl font-bold">Create:</h3>
          </a>
          {modalOpen && <CourseCreationModal />}
          <Link
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
          >
            <h3 className="text-2xl font-bold">AI:</h3>
          </Link>
          <Link
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="#"
          >
            <h3 className="text-2xl font-bold">Upload:</h3>
          </Link>
          <Link
            className="mr-2 flex w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#0f5475] p-4 text-white drop-shadow-md hover:bg-cyan-600/50"
            href="/input/waiting/editing/editing"
          >
            <h3 className="text-2xl font-bold">EDITING</h3>
          </Link>
        </div>
        <div>
          <input type="file" className="file-input-bordered file-input mt-4" />
        </div>
        <div className="my-4">
          <span
            className="larger-font font-extrabold text-[#21292D]"
            style={{ fontSize: "30px" }}
          >
            Draft courses:
          </span>
        </div>
        <div className="h-96 w-1/2 rounded-lg bg-gradient-to-r from-cyan-900 to-cyan-500 p-4 text-white">
          <DraftCourses />
        </div>
      </main>
    </div>
  );
};

export default Input;

const AuthShowcase: React.FC = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div className="text-2xl font-bold text-white">
        <h1>Hi {user.fullName}, welcome back.</h1>
      </div>
    );
  }
  return (
    <div>
      <p className="text-2xl font-bold text-white">
        There are no current users signed in.
      </p>
    </div>
  );
};
export { AuthShowcase };

type Course = {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

const CourseForm: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const { mutate: createCourse } = api.newCourse.create.useMutation({
    onSuccess: () => {
      // console.log(
      //   `This should be posting to the db with course title: ${courseTitle}`
      // );
      // void refetchTopics();
    },
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createCourse({ title: courseTitle, description: courseDescription });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="font-color-[#b91c1c] font-extrabold">
        <span className="ml-1">Title:</span>
        <br />
        <input
          className="input-bordered input input-sm w-2/3 shadow-xl"
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </label>
      <label className="font-color-[#b91c1c] font-extrabold">
        <span className="ml-1">Description:</span>
        <br />
        <input
          className="input-bordered input input-sm w-2/3 shadow-xl"
          type="text"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </label>
      <input
        className="mt-4 w-1/3 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
        type="submit"
        value="SAVE DRAFT"
      />
    </form>
  );
};

const DraftCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { data: newCourses, refetch: refetchTopics } =
    api.newCourse.getCourses.useQuery(undefined, {
      onSuccess: (data) => {
        if (data && data.length > 0) {
          setCourses(data);
        } else {
          setCourses([]);
        }
      },
    });

  return (
    <div>
      {courses?.map((course: Course) => (
        <div
          key={course.id}
          className="m-2 w-full rounded border-solid bg-white text-black"
        >
          <h2 className="font-extrabold">{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};
