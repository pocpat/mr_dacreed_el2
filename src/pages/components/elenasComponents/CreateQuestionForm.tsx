import React, { useState } from "react";
import { api } from "~/utils/api";
interface CreateQuestionFormProps {
    courseId: string;
  }

const CreateQuestionForm: React.FC<CreateQuestionFormProps> = ({courseId}) => {
const [question, setQuestion] = useState("");
const [answer1, setAnswer1] = useState("");
const [answer2, setAnswer2] = useState("");
const [answer3, setAnswer3] = useState("");
const [answer4, setAnswer4] = useState("");
const [answer5, setAnswer5] = useState("");
const [answer6, setAnswer6] = useState("");
const [commentary, setCommentary] = useState("");
const [guidance, setGuidance] = useState("");

const { mutate: createCourseQuestion } = api.courseQuestion.create.useMutation();
const handleSubmit = () => {
    try {
      createCourseQuestion({
          question,
          answer1,
          answer2,
          answer3,
          answer4,
          answer5,
          answer6,
          commentary,
          guidance,
          courseId,
      });
    } catch (error) {
      console.log(error);
    }
  };

    return(
<div>
  <button className="z-30 m-2 bg-blue-500" onClick={ handleSubmit } >Submit</button>
    <input
className='bg-blue-200 z-30 m-2'
value={question}
onChange={(e) => setQuestion(e.target.value)}
placeholder='question'
/>

<input
className='bg-blue-200 z-30 m-2'
value={answer1}
onChange={(e) => setAnswer1(e.target.value)}
placeholder='answer1'
/>

<input
className='bg-blue-200 z-30 m-2'
value={answer2}
onChange={(e) => setAnswer2(e.target.value)}
placeholder='answer2'
/>

<input
className='bg-blue-200 z-30 m-2'
value={answer3}
onChange={(e) => setAnswer3(e.target.value)}
placeholder='answer3'
/>

<input
className='bg-blue-200 z-30 m-2'
value={answer4}
onChange={(e) => setAnswer4(e.target.value)}
placeholder='answer4'
/>

<input
className='bg-blue-200 z-30 m-2'
value={answer5}
onChange={(e) => setAnswer5(e.target.value)}
placeholder='answer5'
/>


<input
className='bg-blue-200 z-30 m-2'
value={answer6}
onChange={(e) => setAnswer6(e.target.value)}
placeholder='answer6'
/>


<input
className='bg-blue-200 z-30 m-2'
value={commentary}
onChange={(e) => setCommentary(e.target.value)}
placeholder='commentary'
/>


<input
className='bg-blue-200 z-30 m-2'
value={guidance}
onChange={(e) => setGuidance(e.target.value)}
placeholder='guidance'
/> 
    </div>
  );
};

export default CreateQuestionForm;
