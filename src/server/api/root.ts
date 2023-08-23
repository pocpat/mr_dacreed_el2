
import { createTRPCRouter } from "~/server/api/trpc";
// import { testStringRouter } from "./routers/testString";
import { exampleRouter } from "./routers/example";
import { courseHeaderRouter } from "./routers/courseHeader";
import { newCourseRouter } from "./routers/newCourse";
import { courseQuestionRouter } from "./routers/courseQuestion";




export const appRouter = createTRPCRouter({
  courseHeader: courseHeaderRouter,
  // testString: testStringRouter,
  example: exampleRouter,
  newCourse: newCourseRouter,
  courseQuestion: courseQuestionRouter,
});

export type AppRouter = typeof appRouter;



