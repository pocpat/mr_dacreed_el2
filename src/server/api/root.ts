
import { libraryRouter } from "~/server/api/routers/library";
import { createTRPCRouter } from "~/server/api/trpc";
import { topicRouter } from "./routers/topic";
import { testStringRouter } from "./routers/testString";
// import { exampleRouter } from "./routers/example";
import { courseHeaderRouter } from "./routers/courseHeader";
import { courseQuestionRouter } from "./routers/courseQuestion";


export const appRouter = createTRPCRouter({
  courseHeader: courseHeaderRouter,
  courseQuestion: courseQuestionRouter,
  testString: testStringRouter,
  library: libraryRouter,
  topic: topicRouter,

});


export type AppRouter = typeof appRouter;



