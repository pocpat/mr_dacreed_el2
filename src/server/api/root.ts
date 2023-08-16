
import { libraryRouter } from "~/server/api/routers/library";
import { createTRPCRouter } from "~/server/api/trpc";
import { topicRouter } from "./routers/topic";
// import { testStringRouter } from "./routers/testString";
import { exampleRouter } from "./routers/example";
import { courseHeaderRouter } from "./routers/courseHeader";
import { newCourseRouter } from "./routers/newCourse";
import { courseQuestionRouter } from "./routers/courseQuestion";
// import { questionSectionRouter } from "./routers/questionSection";

export const appRouter = createTRPCRouter({
  courseHeader: courseHeaderRouter,
  // testString: testStringRouter,
  example: exampleRouter,
  library: libraryRouter,
  topic: topicRouter,
  newCourse: newCourseRouter,
  courseQuestion: courseQuestionRouter,
  // questionSection: questionSectionRouter,
});

export type AppRouter = typeof appRouter;



