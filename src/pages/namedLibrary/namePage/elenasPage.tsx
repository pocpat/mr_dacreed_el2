import React from "react";
import TextEditor from "./../../components/elenasComponents/TextEditor";
import TextWave from "./../../components/elenasComponents/TextWave";
import Bird from "./../../components/elenasComponents/Bird";
import Link from "next/link";

const elenasPage = () => {
  return (
    <div>
      <h1>Elenas Components</h1>
      <br />
      <Link href="/">Link to Home Page</Link>

      <br />
      <TextEditor />
      <p className="text-pink-500">
        need to figure out how to start and to end with the wavy shape
      </p>
      <TextWave />
      <br></br>
      <Bird />
    </div>
  );
};

export default elenasPage;
