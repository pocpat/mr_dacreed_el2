import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
// import ButtonAdd from "./ButtonAdd";
// import e from "express";
// import { type } from "os";
import UploadImgs from "~/componentsRoot/UploadImgs";
import Modal4 from "~/componentsRoot/Modal4";
import Commentary from "~/componentsRoot/Commentary";
import { IconButton } from "@material-tailwind/react";
import Guidance from "~/componentsRoot/Guidance";

type questionSection = {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
};

const Question1: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#B9CCC8" }}>
      <QAForm />
    </div>
  );
};

export default Question1;

const QAForm: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answerValues, setAnswerValues] = useState<string[]>(["", ""]);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [commentary, setCommentary] = useState("");
const [guidance, setGuidance] = useState("");
const [ uploadedImgs, setUploadedImgs ] = useState<string | null>(null);

  const { mutate: createQuestion } = api.courseQuestion.create.useMutation({});
  // const { mutate: createCommentary } = api.courseQuestion.create.useMutation({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newQuestionToCreate = {
      question: question,
      answer1: answerValues[0] ?? "",
      answer2: answerValues[1] ?? "",
      answer3: answerValues[2] ?? "",
      answer4: answerValues[3] ?? "",
      answer5: answerValues[4] ?? "",
      answer6: answerValues[5] ?? "",
      commentary: commentary,
      guidance: guidance,
      // uploadedImgs: uploadedImgs?? "",
      courrseIds: "",
    };

    e.preventDefault();

    try {
      // TODO: validate the response from `createQuestion()` call and show error message if needed
      createQuestion(newQuestionToCreate);
    } catch (error) {}
  };

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

  function removeAnswer(index: number) {
    const newComponents = [...components];
    newComponents.splice(index, 1);

    const newAnswerValues = [...answerValues];
    newAnswerValues.splice(index, 1);

    setComponents(newComponents);
    setAnswerValues(newAnswerValues);

    const newComponentNames = [...componentNames];
    newComponentNames.push(`answer ${componentNames.length + 1}`);
    setComponentNames(newComponentNames);
  }
  const handleMediaUpload = (media: string) => {
    setUploadedImgs(media);
    setIsModal4Open(false);

  };
  return (
    <form onSubmit={handleSubmit} className="m-0 bg-lightsecondaryd:">
      <span className="ml-3  font-bold text-accentd">Question 1</span>
      <div>
        {/* question */}
        <div>
          <InputQuestion
            placeholder="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            charsLeft={150 - question.length}
          />
        </div>

        {/* answers */}
        <div>
          <div className="newAnswersPlaceholder grid grid-cols-2 gap-4">
            {answerValues.map((value, i) => (
              <div key={i} className="flex w-full flex-col">
                <div className="relative">
                  <div>
                    <InputAnswer
                      placeholder={`answer ${i + 1}`}
                      type="text"
                      onChange={(e) => {
                        const newAnswerValues = [...answerValues];
                        newAnswerValues[i] = e.target.value;
                        setAnswerValues(newAnswerValues);
                      }}
                      value={value}
                      text={`answer ${i + 1}`}
                      charsLeft={150 - value.length}
                    />
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <button
                      type="button"
                      onClick={() => removeAnswer(i)}
                      className="text-black-500 mt-2 flex items-center pr-20"
                    >
                      Delete
                      <img
                        src="/icons/delete.png"
                        alt="delete"
                        className="inline-block h-5 w-5"
                      />
                    </button>
                  </div>
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
          className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 w-1/3 rounded-md px-4 py-2 text-white"
          type="submit"
          value="Create Q&A"
        ></button>
      </div>
{/* add uploaded image here  */}
      <div className="flex flex-row justify-between">
      {uploadedImgs && <img src={uploadedImgs} alt="Uploaded" />}
</div>




      <div className="w-82 dropdown dropdown-top flex content-center justify-center rounded-sm ">
        <label tabIndex={0} className=" m-1 flex flex-row items-center ">
         <p className="mr-2">Add </p>   
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4 5.4V3H6.6V5.4H9V6.6H6.6V9H5.4V6.6H3V5.4H5.4ZM6 12C2.68629 12 0 9.31368 0 6C0 2.68629 2.68629 0 6 0C9.31368 0 12 2.68629 12 6C12 9.31368 9.31368 12 6 12ZM6 10.8C8.65098 10.8 10.8 8.65098 10.8 6C10.8 3.34903 8.65098 1.2 6 1.2C3.34903 1.2 1.2 3.34903 1.2 6C1.2 8.65098 3.34903 10.8 6 10.8Z" fill="#1E425C"/>
</svg>

        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] bg-base-100 p-2 shadow  "
        >


          <li>
       <section className="flex flex-row" onClick={addNewAnswer}>
        <img src="/icons/answers.png" alt="answer" className="inline-block h-8 w-8 mr-2" />
        <div>
            <a  className="font-bold"> Answers  </a>
            <p>Add more answer boxes</p>
            </div>
            </section>
          </li>



          <li>
          <section className="flex flex-row"  onClick={() => setIsModal4Open(true)}>
          <img src="/icons/media.png" alt="answer" className="inline-block h-8 w-8 mr-2" />
          <div>
            <a 
            className="font-bold">
              Media 
            </a>
            <p>Upload or embed with a link</p>
            </div>
            </section>
          </li>



          <li>
            {/* onClick => to add Commentary component */}
          <section className="flex flex-row"  onClick={() => setIsModal4Open(true)}>  
          <img src="/icons/commentary.png" alt="answer" className="inline-block h-8 w-8 mr-2" />
          <div>
            <a 
            className="font-bold">
              Commentary 
            </a>
            <p>Add commentary for course</p>
            </div>
            </section>
          </li>



          <li>
            {/* onClick => to add Guidance component */}
          <section className="flex flex-row"  onClick={() => setIsModal4Open(true)}>  
          <img src="/icons/guidance.png" alt="answer" className="inline-block h-8 w-8 mr-2" />
          <div>
            <a 
            className="font-bold">
              Guidance 
            </a>
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
  

    </form>
  );
};
