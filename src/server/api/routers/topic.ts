
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {   // protectedProcedure
    return ctx.prisma.topic.findMany({
      where: {
        userId: "clkswcf8j0000dg1km8pz49zq",
        // ctx.session.user.id,
      },
    });
  }),

  create: publicProcedure   // protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      console.log(ctx.session); 
      return ctx.prisma.topic.create({
        data: {
          title: input.title,
          userId: "clkswcf8j0000dg1km8pz49zq",
                // ctx.session.user.id,
        },
      });
    }),
});

























//  with authorization
// import { z } from "zod";
// import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";


// export const topicRouter = createTRPCRouter({
//   getAll: protectedProcedure.query(({ ctx }) => {
//     return ctx.prisma.topic.findMany({
//       where: {
//         userId: ctx.session.user.id,
//       },
//     });
//   }),

// create: protectedProcedure
// .input(z.object({ title: z.string() }))
// .mutation(({ ctx, input }) => {
//   return ctx.prisma.topic.create({
//     data: {
//       title: input.title,
//       userId: ctx.session.user.id,
//     },
//   });
// }),
// });     publicProcedure



// without authorization
// import { z } from "zod";
// import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// export const topicRouter = createTRPCRouter({
//     hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//         return {
//         greeting: `Hello ${input.text}`,
//         };
//     }),
//   getAll: publicProcedure.query(({ ctx }) => {
//     console.log("ctx.prisma.topic.findMany()", ctx.prisma.topic.findMany());
//     return ctx.prisma.topic.findMany();
//   }),

//   create: publicProcedure.mutation(({ ctx, input }) => {
//     return ctx.prisma.topic.create({
//       data: {
//         title: input.title,
//         userId: ctx.session.user.id,
//       },
//     });
//   }),
// });




