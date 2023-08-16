import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
import e from "express";
import { type } from "os";
//import { response } from "express";
// import ButtonAdd from "./ButtonAdd";
// import ListComponent from "./ListComponent";

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
      <h1>Placeholder</h1>
      <QAForm />
    </div>
  );
};

export default Question1;


const QAForm: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answerValues, setAnswerValues] = useState<string[]>(["", ""]);

  const { mutate: createQuestion } = api.courseQuestion.create.useMutation({});

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
    <form onSubmit={handleSubmit} >
      <div   >
        {/* question */}
        <div >
          <InputQuestion
            placeholder="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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
              className="mt-2 text-black-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
</div>
 
          {/* <div className="newAnswersPlaceholder grid grid-cols-2 gap-4">
            {answerValues.map((value, i) => (
              <div key={i} className="flex">
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
                 <button
                  type="button"
                  onClick={() => removeAnswer(i)}
                  className="ml-2 text-black-500 "
                >
                  Delete
                </button>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <ButtonAdd onClick={addNewAnswer} text="Add a new answer" />
        {/* labels delete , re-generate*/}
        <div>
          <label className="label">
            <span className="label-text pl-2 font-semibold">Delete</span>
          </label>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt font-semibold">Re-generate</span>
          </label>
        </div>
        <input
          className="mt-4 w-1/3 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
          type="submit"
          value="Create Q&A"
        />
      </div>
      <div className="dropdown dropdown-top">
  <label tabIndex={0} className="btn m-1">ADD</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>New Answer</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    </form>
  );
};
