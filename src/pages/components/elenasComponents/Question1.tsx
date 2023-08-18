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
    <div style={{ backgroundColor: "#B9CCC8" }} >
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


  const { mutate: createQuestion } = api.courseQuestion.create.useMutation({});
  // const { mutate: createCommentary } = api.courseQuestion.create.useMutation({});



  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {

    const newQuestionToCreate = {
      question: question,
      answer1: answerValues[0]?? "",
      answer2: answerValues[1]?? "",
      answer3: answerValues[2]?? "",
      answer4: answerValues[3]?? "",
      answer5: answerValues[4]?? "",
      answer6: answerValues[5]?? "",
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

  return (
    <form onSubmit={handleSubmit} className="m-0">
      <span className="ml-3  font-bold text-accenttext">Question 1</span>
      <div   >
        {/* question */}
        <div >
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
      <div key={i} className="flex flex-col w-full">
        <div className="relative">
          <div  >
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
              className="mt-2 pr-20 text-black-500"
            >
              Delete
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
        
        </div>
        <input
          className="mt-4 w-1/3 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
          type="submit"
          value="Create Q&A"
        />
      </div>
      <div className="dropdown dropdown-top w-82 flex content-center justify-center rounded-sm">
  <label tabIndex={0} className="btn m-1 rounded-sm">ADD</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  ">
    <li><a onClick={addNewAnswer}>  Answers Add more answer boxes </a></li>
    <li> 
    <a onClick={() => setIsModal4Open(true)}>Media  Upload or embed with a link</a> {/* Open modal on media click */}       </li>
    <li><a>Commentary  Add commentary for course</a></li>
    <li><a>Guidance  Add guidance for course</a></li>
  </ul>
</div>
{isModal4Open && (
        <Modal4 onClose={() => setIsModal4Open(false)} isVisible={true} >
          <UploadImgs />
        </Modal4>
      )}
    </form>

  );

};
