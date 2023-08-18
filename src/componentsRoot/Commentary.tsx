import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
// import e from "express";
// import { type } from "os";
import UploadImgs from "~/componentsRoot/UploadImgs";
import Modal4 from "~/componentsRoot/Modal4";

type questionSection = {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
};

const Commentary: React.FC = () => {
  return (
    <div >
      <QAFormCommentary />
    </div>
  );
};

export default Commentary;

const QAFormCommentary: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answerValues, setAnswerValues] = useState<string[]>(["", ""]);
  const [isModal4Open, setIsModal4Open] = useState(false);

  const { mutate: createQuestion } = api.courseQuestion.create.useMutation({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newQuestionToCreate = {
      question: question,
      answer1: answerValues[0] ?? "",
      answer2: answerValues[1] ?? "",
      answer3: answerValues[2] ?? "",
      answer4: answerValues[3] ?? "",
      answer5: answerValues[4] ?? "",
      answer6: answerValues[5] ?? "",
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
//  upload media
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  // const [isModal4Open, setIsModal4Open] = useState(false);
  const handleMediaUpload = (media: string) => {
    setSelectedMedia(media);
    setIsModal4Open(false); // close modal
  };
//  delete media
  const handleDeleteMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <form onSubmit={handleSubmit} className="m-0">
      <span className="ml-3  font-bold text-accenttext">Question 1</span>
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
                      className="text-black-500 mt-2 pr-20"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <ButtonAdd onClick={addNewAnswer} text="Add a new answer" />  */}

        <input
          className="bg-sky-500/75 hover:bg-sky-400/50 mt-4 w-1/3 rounded-md px-4 py-2 text-white"
          type="submit"
          value="Create Q&A"
        />
      </div>



      <section className="flex flex-col items-center justify-center">
      {isModal4Open && (
        <Modal4 onClose={() => setIsModal4Open(false)} isVisible={true}>
          <UploadImgs onMediaUpload={handleMediaUpload}/>
        </Modal4>
      )}
      {selectedMedia && (
        <div className="mt-4">
          <p>Selected Media:</p>
          <img
            src={selectedMedia}
            alt="Selected Media"
            className="max-w-full"
           
          />
          <button
            type="button"
            onClick={handleDeleteMedia}
            className="text-black-500 mt-2 pr-20"
          >
            Delete
          </button>
        </div>
      )}

</section>
      <div className="w-82 dropdown dropdown-top flex content-center justify-center rounded-sm">
        <label tabIndex={0} className="btn m-1 rounded-sm">
          ADD
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] bg-base-100 p-2 shadow  "
        >
          <li>
            <a onClick={addNewAnswer}> new answer </a>
          </li>
          <li>
            <a onClick={() => setIsModal4Open(true)}>media</a>{" "}
            {/* Open modal on media click */}{" "}
          </li>
          <li>
            <a>commentary</a>
          </li>
          <li>
            <a>guidance</a>
          </li>
        </ul>
      </div>



    </form>
  );
};

