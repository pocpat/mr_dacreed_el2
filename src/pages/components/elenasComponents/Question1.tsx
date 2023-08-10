import React from "react";
import { type NextPage } from "next";
import Input2 from "./input2";
import { api } from "~/utils/api";

const Question1: React.FC = () => {
  return (
    <div>
      <Input2
        placeholder="What is the first question?"
        type="text"
        // onChange={getInput2Data}
        name="question1"
      />
      <Input2
        placeholder="answer 1"
        type="text"
        // onChange={getInput2Data}
        name="answer1"
      />
      <Input2
        placeholder="answer 2"
        type="text"
        // onChange={getInput2Data}
        name="answer2"
      />
      <Input2
        placeholder="answer 3"
        type="text"
        // onChange={getInput2Data}
        name="answer3"
      />
      <Input2
        placeholder="answer 4"
        type="text"
        // onChange={getInput2Data}
        name="answer4"
      />
      {/* <button className="btn ml-2 mt-2" onClick={sendInput2}>
        ADD DATA
      </button> */}
    </div>
  );
};

export default Question1;
