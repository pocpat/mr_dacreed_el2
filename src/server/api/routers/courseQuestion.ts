// src/server/api/routers/courseQuestion.ts
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const courseQuestionRouter = createTRPCRouter({
  getCourses: publicProcedure.query(({ ctx }) => {
    if (ctx.auth?.userId) {
      return ctx.prisma.courseQuestion.findMany({
        where: { userId: ctx.auth.userId },
      });
    } else {
      console.log("User not authenticated. => ctx.auth.userId is null <=");
    }
  }),
  create: protectedProcedure
    .input(
      z.object({
        question: z.string(),
        answer1: z.string(),
        answer2: z.string(),
        answer3: z.string().optional(),
        answer4: z.string().optional(),
        answer5: z.string().optional(),
        answer6: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.courseQuestion.create({
        data: {
          question: input.question,
          answer1: input.answer1,
          answer2: input.answer2,
          answer3: input.answer3  ?? " ",
          answer4: input.answer4  ?? " ",
          answer5: input.answer5  ?? " ",
          answer6: input.answer6  ?? " ",
          userId: ctx.auth.userId,
        },
      });
    }),
});
