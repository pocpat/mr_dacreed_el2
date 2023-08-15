import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
import e from "express";
//import { response } from "express";
// import ButtonAdd from "./ButtonAdd";
// import ListComponent from "./ListComponent";

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
      componentNames.splice(0, 1);
    } else {
      window.alert("No more answers to add");
    }
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
        <div >
          <div className="newAnswersPlaceholder grid grid-cols-2 gap-4 ">
            {answerValues.map((value, i) => (
              <InputAnswer
                placeholder={`answer ${i + 1}`}
                type="text"
                key={i}
                onChange={(e) => {
                  const newAnswerValues = [...answerValues];
                  newAnswerValues[i] = e.target.value;
                  setAnswerValues(newAnswerValues);
                }}
                value={value}
                text={`answer ${i + 1}`}
              />
            ))}
          </div>
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
    </form>
  );
};

//  ========== working with db =========== //

{
  /* <form onSubmit={handleSubmit}> */
}
{
  /* <label>
  <span>Question:</span>

  <input
    type="text"
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
  />
</label> */
}
{
  /* question  */
}
{
  /* <div >
  <InputQuestion
    placeholder="question"
    type="text"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}/>
    </div>

<label>
  <span>Answer1:</span>

  <input
    type="text"
    value={answer1}
    onChange={(e) => setAnswer1(e.target.value)}
  />
</label>

<label>
  <span>Asnwer2:</span>

  <input
    type="text"
    value={answer2}
    onChange={(e) => setAnswer2(e.target.value)}
  />
</label>

<label>
  <span>Answer3:</span>

  <input
    type="text"
    value={answer3}
    onChange={(e) => setAnswer3(e.target.value)}
  />
</label>

<label>
  <span>Answer4:</span>

  <input
    type="text"
    value={answer4}
    onChange={(e) => setAnswer4(e.target.value)}
  />
</label>

<label>
  <span>Answer5:</span>

  <input
    type="text"
    value={answer5}
    onChange={(e) => setAnswer5(e.target.value)}
  />
</label>

<label>
  <span>Answer6:</span>

  <input
    type="text"
    value={answer6}
    onChange={(e) => setAnswer6(e.target.value)}
  />
</label>

<input
  className="mt-4 w-1/3 rounded-md bg-sky-500/75 px-4 py-2 text-white hover:bg-sky-400/50"
  type="submit"
  value="Create Q&A"
/>
</form> */
}
