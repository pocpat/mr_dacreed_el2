import React, { useState } from "react";
import { api } from "~/utils/api";
// import InputQuestion from "./InputQuestion";
// import InputAnswer from "./InputAnswer";
// import ButtonAdd from "./ButtonAdd";
// import ListComponent from "./ListComponent";

const Question1: React.FC = () => {
  // function addNewAnswer() {

  //   if (componentNames.length > 0 && componentNames[0]) {

  //     setComponents([...components, componentNames[0]]);

  //     componentNames.splice(0, 1);

  //   } else {

  //     window.alert("No more answers to add");

  //   }

  // }

  return (
    <div style={{ backgroundColor: "#B9CCC8" }}>
      <h1>Placeholder</h1>
      <QAForm />
    </div>
  );
};

export default Question1;

type CourseQuestipon = {
  id: string;

  question: string;

  answer1: string;

  answer2: string;

  answer3: string;

  answer4: string;

  answer5: string;

  answer6: string;

  userId: string;
};

const QAForm: React.FC = () => {
  const [question, setQuestion] = useState("");

  const [answer1, setAnswer1] = useState("");

  const [answer2, setAnswer2] = useState("");

  const [answer3, setAnswer3] = useState("");

  const [answer4, setAnswer4] = useState("");

  const [answer5, setAnswer5] = useState("");

  const [answer6, setAnswer6] = useState("");
  const { mutate: createQuestion } = api.courseQuestion.create.useMutation({});

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    createQuestion({
      question: question,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      answer6: answer6,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Question:</span>

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>

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
    </form>
  );
};
