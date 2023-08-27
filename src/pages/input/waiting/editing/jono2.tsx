import React from "react";
import TopNav from "~/pages/components/jpComponents/TopNav";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
// import { api, type RouterOutputs } from "~/utils/api";
import JPButtonRender from "~/pages/components/jpComponents/JPButtonRender";

const Jono2 = () => {
  const { user } = useUser();

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              <span>Current user:</span>
              {user?.firstName ? (
                <span>
                  {" "}
                  {user?.firstName} {user?.id}
                </span>
              ) : (
                ""
              )}
            </div>

            <div>{/* <TestStringInput /> */}</div>
            <div>
              <JPButtonRender />
            </div>
            <div>
              <CourseForm />
            </div>
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jono2;

// type TestString = {
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
//   testInput: string;
//   courseTitle: string;
//   courseDescription: string;
//   userId: string;
// };

// const TestStringInput: React.FC = () => {
//   const [selectedInput, setSelectedInput] = useState<TestString | null>(null);
//   //  const { data: testStrings, refetch: refetchTopics } =
//   //   api.testString.getAll.useQuery(
//     undefined, // no input
//     {
//       onSuccess: (data) => {
//         if (data && data.length > 0 && data[0]) {
//           setSelectedInput(data[0]);
//         } else {
//           setSelectedInput(null);
//         }
//       },
//     }
//   );

// const createTestString = api.testString.createOne.useMutation({
//   onSuccess: () => {
//     console.log();
//     void refetchTopics();
//   },
// });

//   return (
//     <div className="mb-4 mt-4 flex flex-col items-start justify-center rounded-lg border-slate-100 bg-white p-4">
//       <div className="col-span-3"></div>
//       <div className="divider">
//         <input
//           type="text"
//           placeholder="New Test String"
//           className="input-bordered input input-sm w-full"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               createTestString.mutate({
//                 testInput: e.currentTarget.value,
//                 description: "",
//               });
//               e.currentTarget.value = "";
//             }
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Test description"
//           className="input-bordered input input-sm w-full"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               createTestString.mutate({
//                 description: e.currentTarget.value,
//                 testInput: "",
//               });
//               e.currentTarget.value = "";
//             }
//           }}
//         />
//       </div>
//       <h1>Posted data:</h1>
//       <div>
//         <ul className="menu m-2 rounded-lg border-2 p-4">
//           {testStrings?.map((testString) => (
//             <li key={testString.id}>
//               <a
//                 href="#"
//                 onClick={(evt) => {
//                   evt.preventDefault();
//                   // setSelectedInput();
//                 }}
//               >
//                 {testString.testInput}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <button className="ml-4 rounded-lg bg-[#064e3b] p-2 text-white hover:bg-[#059669]">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

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
  // const { mutate: createCourse } = api.newCourse.create.useMutation({
  //   onSuccess: () => {
  //     console.log(
  //       `This should be posting to the db with course title: ${courseTitle}`
  //     );
  //     // void refetchTopics();
  //   },
  // });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // createCourse({ title: courseTitle, description: courseDescription });
  };

  return (
    <form className="m-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <label>
        Title:
        <br />
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <br />
        <input
          type="text"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </label>
      <input
        className="bg-cyan-600 w-1/4 rounded border"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
