import React, { useState } from "react";
import { api } from "~/utils/api";

const CreateCourseForm = () => {
  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: createCourse } = api.course.create.useMutation();

  const handleSubmit = () => {
    try {
      createCourse({
        title,
        subHeading,
        description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
  
      <input
        className="z-30 m-2 bg-blue-200"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="z-30 m-2 bg-blue-200"
        value={subHeading}
        onChange={ (e) => setSubHeading(e.target.value)}
        placeholder="subHeading"
      />

      <input
        className="z-30 m-2 bg-blue-200"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />

      <button className="z-30 m-2 bg-blue-500" onClick={ handleSubmit } >Submit</button>
      {/* <input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='question'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer1'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer2'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer3'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer4'
/>

<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer5'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer6'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='answer5'
/>


<input
className='bg-blue-200 z-30 m-2'
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder='guidance'
/> */}
    </div>
  );
};

export default CreateCourseForm;
