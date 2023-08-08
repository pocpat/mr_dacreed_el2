import { libraryRouter } from "~/server/api/routers/library";
import { createTRPCRouter } from "~/server/api/trpc";
import { topicRouter } from "./routers/topic";
import {PostapiRouter} from "./routers/POSTAPI";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  library: libraryRouter,
  topic: topicRouter,
  POSTAPI: PostapiRouter
});



// export type definition of API
export type AppRouter = typeof appRouter;


// import { libraryRouter } from "~/server/api/routers/library";
// import { createTRPCRouter } from "~/server/api/trpc";
// import { exampleRouter } from "./routers/example";
// import { topicRouter } from "./routers/topic";
// import { noteRouter } from "./routers/note";

// /**
//  * This is the primary router for your server.
//  *
//  * All routers added in /api/routers should be manually added here.
//  */
// export const appRouter: AppRouter = createTRPCRouter({
//   library: libraryRouter,
//   example: exampleRouter,
//   topic: topicRouter,
//   note: noteRouter,
// })
//   .merge("topic.", topicRouter)
//   .createContext(({ req }) => {
//     return {
//       session: req.session,
//     };
//   });

// // export type definition of API
// export type AppRouter = typeof appRouter;


