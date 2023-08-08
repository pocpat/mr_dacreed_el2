
import { libraryRouter } from "~/server/api/routers/library";
import { createTRPCRouter } from "~/server/api/trpc";
import { topicRouter } from "./routers/topic";
import {PostapiRouter} from "./routers/POSTAPI";
import { testStringRouter } from "./routers/testString";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  testString: testStringRouter,
  library: libraryRouter,
  topic: topicRouter,
  POSTAPI: PostapiRouter
});



// export type definition of API
export type AppRouter = typeof appRouter;




