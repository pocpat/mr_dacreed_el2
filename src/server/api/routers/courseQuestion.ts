import { z } from "zod";
import {
  createTRPCRouter,protectedProcedure, publicProcedure,
} from "~/server/api/trpc";

export const courseQuestionRouter = createTRPCRouter({
    // GET ALL 
    getAll: publicProcedure.query(({ ctx }) => {
        if (ctx.auth?.userId) {
            return ctx.prisma.courseQuestion.findMany({
              where: {
                userId: ctx.auth.userId,
              },
            });
          } else {
            console.log("User not authenticated. => ctx.auth.userId is null <=");
            return [];
          }
        }),
    
    // CREATE
    create: protectedProcedure  
      .input(z.object({ question: z.string(), answer1: z.string(), answer2: z.string(), answer3: z.string(), answer4: z.string() }))
      .mutation(({ ctx, input }) => {
        // console.log(ctx.auth); 
        return ctx.prisma.courseQuestion.create({
          data: {
            question: input.question,
            userId: ctx.auth.userId,
            answer1: input.answer1,
            answer2: input.answer2,
            answer3: input.answer3,
            answer4: input.answer4
            //"clkswcf8j0000dg1km8pz49zq",                 
          },
        });
      })});
