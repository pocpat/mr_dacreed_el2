import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import UploadImgs from "~/componentsRoot/UploadImgs";
import Modal4 from "~/componentsRoot/Modal4";
import Commentary from "~/componentsRoot/Commentary";
import Guidance from "~/componentsRoot/Guidance";
import { type CourseQuestion } from "@prisma/client";
import Image from "next/image";

interface CourseQuestionInput2Props {
  courseId: string;
}

const Question1: React.FC<CourseQuestionInput2Props> = ({ courseId }) => {
  return (
    <>
      <div className="bg-lightsecondaryd">
        <QAForm courseId={courseId} />
      </div>
    </>
  );
};

export default Question1;


const QAForm: React.FC<CourseQuestionInput2Props> = ({ courseId }) => {
  const [question, setQuestion] = useState("");
  const [answerValues, setAnswerValues] = useState<string[]>(["", ""]);
  const [fetchedQuestions, setFetchedQuestions] = useState<CourseQuestion[]>(
    []
  );
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [commentary, setCommentary] = useState("");
  const [guidance, setGuidance] = useState("");
  const [uploadedImgs, setUploadedImgs] = useState<string | null>(null);
  const [questionId, setQuestionId] = useState<string>("");

  // TODO: to be called onSubmit of 'update' button
  const { mutate: updateQuestionMutation } =
    api.courseQuestion.update.useMutation();

  api.courseQuestion.getByCourseId.useQuery(
    {
      courseId, // this is the courseId we looked up in the URL
    },
    {
      onSuccess: (data) => {
        if (data.length > 0) {
          setFetchedQuestions(data);
        } else {
          setFetchedQuestions([]);
        }
      },
    }
  );

  function updateQuestion(idx: number) {
    if (fetchedQuestions.length > idx && fetchedQuestions[idx]) {
      const {
        id = "",
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = "",
        answer5 = "",
        answer6 = "",
      } = fetchedQuestions[idx] ?? {}; // Use {} as a fallback for undefined

      const sanitizedAnswer3 = answer3 ?? "";
      const sanitizedAnswer4 = answer4 ?? "";
      const sanitizedAnswer5 = answer5 ?? "";
      const sanitizedAnswer6 = answer6 ?? "";

      updateQuestionMutation({
        id,
        question,
        answer1,
        answer2,
        answer3: sanitizedAnswer3,
        answer4: sanitizedAnswer4,
        answer5: sanitizedAnswer5,
        answer6: sanitizedAnswer6,
        commentary,
        guidance,
      });
    }
  }


  const [components, setComponents] = useState<string[]>([]);
  const [componentNames, setComponentNames] = useState<string[]>([
    "answer 3",
    "answer 4",
    "answer 5",
    "answer 6",
  ]);

  function addNewAnswer() {
    if (componentNames.length > 0 && componentNames[0]) {
      setComponents([...components, componentNames[0]]);
      setAnswerValues([...answerValues, ""]);
      // componentNames.splice(0, 1);
      setComponentNames(componentNames.slice(1));
    } else {
      window.alert("No more answers to add");
    }
  }

  function removeAnswer(questionIndex: number, answerIndex: number) {
    const newComponents = [...components];
    newComponents.splice(answerIndex, 1);

    const newAnswerValues = [...answerValues];
    newAnswerValues.splice(answerIndex, 1);

    setComponents(newComponents);
    setAnswerValues(newAnswerValues);

    const newComponentNames = [...componentNames];
    newComponentNames.push(`answer ${componentNames.length + 1}`);
    setComponentNames(newComponentNames);
  }
  const handleMediaUpload = (media: string) => {
    setUploadedImgs(media);
    api;
    setIsModal4Open(false);
  };
  return (
   <div>
 
      {/* <span className="ml-3  font-bold text-accentd">Question 1</span> */}
      {fetchedQuestions?.map((q, j) => ( 
       
        <div key={q.id} className="flex flex-col ">
           <span className="ml-3  font-bold text-accentd">Question 1</span>
          <div>
            {/* question */}
            <div>
              <InputQuestion
                placeholder="question"
                type="text"
                value={q.question}
                onChange={(e) => {
                  const data = [...fetchedQuestions];
                  data[j].question = e.target.value;
                  setFetchedQuestions(data);
                }}
                charsLeft={150 - question.length}
              />
            </div>

            {/* answers  guidanse, commentary*/}
            <div> 
              <div className="newAnswersPlaceholder grid grid-cols-2 gap-4">
                {[
                  q.answer1,
                  q.answer2,
                  q.answer3,
                  q.answer4,
                  q.answer5,
                  q.answer6,
                ].map((value, i) => (
                  <div key={i} className="flex w-full flex-col"> 
                     <div>
                        <InputAnswer
                          placeholder={`answer ${i + 1}`}
                          type="text"
                          onChange={(e) => {
                            const data = [...fetchedQuestions];
                            switch (i) {
                              case 0:
                                {
                                  data[j].answer1 = e.target.value;
                                }
                                break;
                              case 1:
                                {
                                  data[j].answer2 = e.target.value;
                                }
                                break;
                              case 2:
                                {
                                  data[j].answer3 = e.target.value;
                                }
                                break;
                              case 3:
                                {
                                  data[j].answer4 = e.target.value;
                                }
                                break;
                              case 4:
                                {
                                  data[j].answer5 = e.target.value;
                                }
                                break;
                              case 5:
                                {
                                  data[j].answer6 = e.target.value;
                                }
                                break;
                            }
                            setFetchedQuestions(data);
                          }}
                          value={value}
                          text={`answer ${i + 1}`}
                          charsLeft={150 - value.length}
                        />
                      </div>
                      {/* DELETE ANSWER buttons */}
                      <div className="absolute bottom-0 right-0">
                        <button
                          type="button"
                          onClick={() => removeAnswer(j, i)}
                          className="text-black-500 mt-2 flex items-center pr-20"
                        >
                          Delete
                          <Image
                            src="/icons/delete.png"
                            alt="delete"
                            className="inline-block h-5 w-5"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                 </div>
                ))}
              </div>

              <Commentary
                placeholder=""
                type="text"
                value={commentary}
                onChange={(e) => setCommentary(e.target.value)}
                charsLeft={150 - commentary.length}
              />

              <Guidance
                placeholder=""
                type=""
                onChange={(e) => setGuidance(e.target.value)}
                value={guidance}
                charsLeft={150 - guidance.length}
              />
            </div>
            <button
              className="mt-4 w-1/3 rounded-md bg-blue-500/75 px-4 py-2 text-white hover:bg-green-800"
              type="submit"
              value="update"
              onClick={() => updateQuestion(j)}
            >
              Update
            </button>
          </div>



      {/* add uploaded image here */}
      <div className="flex  items-center justify-center ">
        {uploadedImgs && (
          <div className="max-w-screen-2xl px-[20%]">
            {/* <img src={uploadedImgs} alt="Uploaded" /> */}
            <Image src={uploadedImgs} alt="Uploaded"  width={20} height={20}/>

          </div>
        )}
      </div>
       {/* Add button */}
      <div className="w-82 dropdown dropdown-top flex content-center justify-center rounded-sm ">
        <label tabIndex={0} className=" m-1 flex flex-row items-center ">
          <p className="mr-2">Add </p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4 5.4V3H6.6V5.4H9V6.6H6.6V9H5.4V6.6H3V5.4H5.4ZM6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8Z"
              fill="#1E425C"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] bg-base-100 p-2 shadow  "
        >
          <li>
            <section className="flex flex-row" onClick={addNewAnswer}>
              <Image
              width={20}
              height={20}
                src="/icons/answers.png"
                alt="answer"
                className="mr-2 inline-block h-8 w-8"
              />
              <div>
                <a className="font-bold"> Answers </a>
                <p>Add more answer boxes</p>
              </div>
            </section>
          </li>

          <li>
            <section
              className="flex flex-row"
              onClick={() => setIsModal4Open(true)}
            >
              <Image
              width={20}
              height={20}                src="/icons/media.png"
                alt="answer"
                className="mr-2 inline-block h-8 w-8"
              />
              <div>
                <a className="font-bold">Media</a>
                <p>Upload or embed with a link</p>
              </div>
            </section>
          </li>

          <li>
            {/* onClick => to add Commentary component */}
            <section
              className="flex flex-row"
              // onClick={() => setIsModal4Open(true)}
            >
              <Image
              width={20}
              height={20}                src="/icons/commentary.png"
                alt="answer"
                className="mr-2 inline-block h-8 w-8"
              />
              <div>
                <a className="font-bold">Commentary</a>
                <p>Add commentary for course</p>
              </div>
            </section>
          </li>

          <li>
            {/* onClick => to add Guidance component */}
            <section
              className="flex flex-row"
              // onClick={() => setIsModal4Open(true)}
            >
              <Image
              width={20}
              height={20}                src="/icons/guidance.png"
                alt="answer"
                className="mr-2 inline-block h-8 w-8"
              />
              <div>
                <a className="font-bold">Guidance</a>
                <p>Add guidance for course</p>
              </div>
            </section>
          </li>
        </ul>
      </div>
      {isModal4Open && (
        <Modal4 onClose={() => setIsModal4Open(false)} isVisible={true}>
          <UploadImgs onMediaUpload={handleMediaUpload} />
        </Modal4>
            )} 
        </div>
      ))}
      

            </div>
          );
        };
    
