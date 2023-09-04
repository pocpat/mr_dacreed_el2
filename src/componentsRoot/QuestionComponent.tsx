// import React, { useState } from "react";
// import { api } from "~/utils/api";
// import InputQuestion from "./InputQuestion";
// import InputAnswer from "./InputAnswer";
// // import { set } from "zod";
// import UploadImgs from "~/componentsRoot/UploadImgs";
// import Modal4 from "~/componentsRoot/Modal4";
// import Commentary from "~/componentsRoot/Commentary";
// // import { IconButton } from "@material-tailwind/react";
// import Guidance from "~/componentsRoot/Guidance";
// import { set } from "zod";
// import { CourseQuestion } from "@prisma/client";

// interface QuestionComponentProps {
//   questionData: CourseQuestion;
//   updateQuestionMutation: (data: string) => void;
//   question: string,
//           answer1: string,
//           answer2: string,
//           answer3: string,
//           answer4:string,
//           answer5: string,
//           answer6: string,
//           commentary: string,
//           guidance: string
//     // other props
// }

// const QuestionComponent: React.FC<QuestionComponentProps> = ({
//     questionData,
//     updateQuestionMutation,
//     // other props
// }) => {
//     return (
//         <div key={questionData.id} className="flex flex-col w-full">
//          {/* Render your question and answers here */}
//       {/* Use 'questionData' instead of 'data[j]' */}
//     </div>
//   );
// };

// export default QuestionComponent;