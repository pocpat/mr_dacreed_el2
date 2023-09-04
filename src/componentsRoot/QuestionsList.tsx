import React, { useState } from "react";
import { type CourseQuestion } from "@prisma/client";
import { api } from "~/utils/api";
import Question1 from "~/pages/components/elenasComponents/Question1";
interface QuestionsListProps {
  courseId: string;
}

const QuestionsList: React.FC<QuestionsListProps> = ({ courseId }) => {
  const [fetchedQuestions, setFetchedQuestions] = useState<CourseQuestion[]>(
    []
  );

  api.courseQuestion.getByCourseId.useQuery(
    {
      courseId, // this is the courseId we looked up in the URL
    },
    {
      onSuccess: (data) => {
        if (data.length > 0) {
          setFetchedQuestions(data);
        } else {
          setFetchedQuestions([]);
        }
      },
    }
  );

  return (
    <div>
      {fetchedQuestions.map((q) => (
        <div key={q.id}>
          <Question1 {...q} />
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;
