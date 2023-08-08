import React from "react";
import { type NextPage } from "next";
import Input2 from "./input2";
import { api  } from '~/utils/api';

const Question1: React.FC = () => {
  const [input2, setInput2] = React.useState({});



  // const hello = api.example.hello.useQuery({text: "from tRPC"});
  const getInput2Data = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const u = { [name]: value };
    setInput2((prev) => ({ ...prev, ...u }));
    const mutation = api.POSTAPI.createTestString.useMutation();
    mutation.mutate({testInput: value} );
  };
  const sendInput2 = () => {




  console.log(input2);
    };
  return (
    <div>
      <Input2
        placeholder="What is the first question?"
        type="text"
        onChange={getInput2Data}
        name="question1"
      />
      <Input2
        placeholder="answer 1"
        type="text"
        onChange={getInput2Data}
        name="answer1"
      />
      <Input2
        placeholder="answer 2"
        type="text"
        onChange={getInput2Data}
        name="answer2"
      />
      <Input2
        placeholder="answer 3"
        type="text"
        onChange={getInput2Data}
        name="answer3"
      />
      <Input2
        placeholder="answer 4"
        type="text"
        onChange={getInput2Data}
        name="answer4"
      />
      <button 
      className="btn"
      onClick={sendInput2}
      >ADD DATA</button>
    </div>
  );
};

export default Question1;
