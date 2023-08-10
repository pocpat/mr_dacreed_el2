import React, { useState } from "react";
import { api } from "~/utils/api";
import InputQuestion from "./InputQuestion";
import InputAnswer from "./InputAnswer";
import ButtonAdd from "./ButtonAdd";
import ListComponent from "./ListComponent";

const Question1: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
const [componentNames, setComponentNames] = useState<string[]>(['answer 3','answer 4','answer 5']);
 

// function addComponent() {
//   if (componentNames.length > 0) {
//     // setComponents([...components, componentNames[0]]);
//     // componentNames.splice(0, 1);
//     const firstComponentName = componentNames.shift();
//     setComponents([...components, firstComponentName]);
//   } else {
//     window.alert("No more components to add");
//   }
// }

function addNewAnswer() {
  if (componentNames.length > 0) {
    setComponents([...components, componentNames[0]]);
    componentNames.splice(0, 1);
    // const firstComponentName = componentNames.shift();
    // setComponents([...components, firstComponentName]);
  } else {
    window.alert("No more components to add");
  }
}



  const getaddAnswerData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const u = { [name]: value };
    const mutation = api.POSTAPI.createTestString.useMutation();
    mutation.mutate({ testInput: value });
  };

  return (
    <div style={{ backgroundColor: "#B9CCC8" }}>
{/* question  */}
      <div className="p-2" >
        <InputQuestion
          placeholder="question"
          type="text"
          // onChange={getaddAnswerData}
          name="question"
        />
{/* answers */}
<div >
        <div className="grid grid-cols-2 gap-4 newAnswersPlaceholder">
          <div>
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
        </div>
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

