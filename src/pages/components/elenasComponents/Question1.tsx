import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
// import ListComponent from "./ListComponent";
import { useUser } from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client'
import { prisma } from "~/server/db";




// =============> new user create <=========`

// const newUser = await prisma.user.create({

//   data: {
//     name:   'Boris',             // user?.firstName,
//     email:  'boris@prisma.io',   //user?.emailAddresses[0].emailAddress,
//   },
// });



// const users = await prisma.user.findMany()

//==================================================



const Question1: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
const [componentNames, setComponentNames] = useState<string[]>(['answer 3','answer 4','answer 5']);
const { user } = useUser();


  function addNewAnswer() {
  if (componentNames.length > 0 && componentNames[0]) {
    setComponents([...components, componentNames[0]]);
    componentNames.splice( 0,1);
  } else {
    window.alert("No more answers to add");
  }
}
  // const getaddAnswerData = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   const u = { [name]: value };
  // };
 // <div className="p-0 m-0 className= "shadow-inner shadow-xl"" >
   
  return (
    <div style={{ backgroundColor: "#DFDFDF" }}>
{/* question  */}
      <div className="p-0 m-0 " >
        <InputQuestion
          placeholder="question"
          type="text"
          // onChange={getaddAnswerData}
          name="question"
          
        />
{/* answers */}
<div >
        <div className="grid grid-cols-2 gap-4 newAnswersPlaceholder ">
          <div >
            <InputAnswer
              placeholder="answer 1"
              type="text"
              // onChange={getaddAnswerData}
              name="answer1"
              text="answer 1"
              
            />
          </div>
          <div>
            <InputAnswer
              placeholder="answer 2"
              type="text"
              // onChange={getaddAnswerData}
              name="answer2"
              text="answer 2"
            />
          </div>
          {/* <div className="newAnswersPlaceholder"> */}
            {components.map((item: string, i: number) => (
              // <ListComponent
              //   key={i}
              //   text={item}
              // />
              <InputAnswer
              placeholder={item}
              type="text"
              key={i}
              // onChange={getaddAnswerData}
              name="answer1"
              text={item}
            />
            ))}


          {/* </div> */}
       
        </div>
        </div >
        <ButtonAdd onClick={addNewAnswer} text="Add a new answer" />
{/* labels  delete , re-generate*/}
        <div>
          <label className="label">
            <span className="label-text pl-2 font-semibold">Delete</span>
          </label>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt font-semibold">Re-generate</span>
          </label>
          </div>



      </div>
    </div>
  );
};



export default Question1;

// Question1
type CourseQuestion = {
  id: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
};

const CourseQuestionInput: React.FC =  () => {
  const [selectedInput, setSelectedInput] = useState<CourseQuestion | null>(null);
  const { data: courseQuestions, refetch: refetchTopics } =
  api.courseQuestion.getAll.useQuery(undefined, {
    onSuccess: (data:CourseQuestion[]) => {
      if (data && data.length > 0 && data[0]) {
        setSelectedInput(data[0] );
      } else {
        setSelectedInput(null);
      }
    },
  });
 const createCourseQuestion = api.courseQuestion.create.useMutation({
    onSuccess: () => {
      console.log("Create courseQuestion is going to db");
      void refetchTopics();
    },
  });
  return (
    <div className="mb-4 mt-4 flex w-full flex-col items-start justify-items-start rounded border-slate-100 bg-white p-4">
      <div className="m-2 flex w-full flex-col p-2 ">
        {/* INPUT FOR question */}
        <input
          type="text"
          placeholder="test api question
          "
          className="input-bordered input input-sm m-2 h-12 w-auto"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createCourseQuestion.mutate({
                question: e.currentTarget.value,
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
                // userId: user.id
              });
              e.currentTarget.value = "";
            }
          }}
        />

      </div>
      <div>
        <div className="ml-6">
          <div className="bg-slate-400 p-2">
            {courseQuestions?.map((courseQuestion: { question: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; id: React.Key | null | undefined; }) => {
              if (courseQuestion.question) {
                return <div key={courseQuestion.id}>{courseQuestion.question}</div>;
              }
            })}
          </div>
          <div className="border-solid border-black bg-slate-300 p-2">
            {courseQuestions?.map((courseQuestion) => {
              if (courseQuestion.answer1) {
                return (
                  <div key={courseQuestion.id}>{courseQuestion.answer1}</div>
                );
              }
            })}
          </div>
          <div className="border-solid border-black bg-slate-200 p-2">
            {courseQuestions?.map((courseQuestion) => {
              if (courseQuestion.answer2) {
                return (
                  <div key={courseQuestion.id}>{courseQuestion.answer2}</div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

