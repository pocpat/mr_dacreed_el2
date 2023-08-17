// // src/server/api/routers/courseQuestion.ts
// import { z } from "zod";
// import {
//   createTRPCRouter,
//   publicProcedure,
// } from "~/server/api/trpc";

// type questionSection = {
//     question: string;
//     answer1: string;
//     answer2: string;
//     answer3: string;
//     answer4: string;
//     answer5: string;
//     answer6: string;
//   };
// // QuestionSection  = qs  for shorter names
// const qsIdSchema = z.object({
//     id: z.string(),
//   });

// const qsSchema = z.object({
//   question: z.string(),
//   answer1: z.string(),
//   answer2: z.string(),
//   answer3: z.string(),
//   answer4: z.string(),
//   answer5: z.string(),
//   answer6: z.string(),
// });

// const qsUpdateSchema = z.object({
//     id: z.number(),
//     question: z.string(),
//     answer1: z.string(),
//     answer2: z.string(),
//     answer3: z.string(),
//     answer4: z.string(),
//     answer5: z.string(),
//     answer6: z.string(),
//     });


// const qsRemoveSchema = z.object({
//   id: z.number(),
// });

// const qsCreateSchema = z.object({
//   question: z.string(),
//   answer1: z.string(),
//   answer2: z.string(),
//   answer3: z.string(),
//   answer4: z.string(),
//   answer5: z.string(),
//   answer6: z.string(),
// });

// const userIdSchema = z.object({
//     name: z.string(),
//     email: z.string().email(),
//   });
  
// export const questionSectionRouter = createTRPCRouter({
//   getAll: publicProcedure.query(({ ctx }) => {
//     if (ctx.auth?.userId) {
//         return ctx.prisma.questionSection.findMany({
//           where: { userId: ctx.auth.userId },
//         });
//       } else {
//         console.log("User not authenticated. => ctx.auth.userId is null <=");
//       }
//   }),
//     //  get One QuestionSection by id:  publicProcedure
//   getOneQS: publicProcedure
//   .input(qsIdSchema)
//   .query(({ input, ctx }) => {
//     // if (ctx.auth?.userId) {
//         return ctx.prisma.questionSection.findUnique({
//           where: qsIdSchema .parse (input),
//     //     });
//     //   } else {
//     //     console.log("User not authenticated. => ctx.auth.userId is null <=");
//     //   } 
//   // create  new QuestionSection    publicProcedure
//   createNewQS: publicProcedure
//     .input(qsSchema)
//     .mutation(({ input, ctx }): questionSection  => {
//       return  ctx.prisma.questionSection.create({
//         data:  qsSchema.parse (input),
//       });
//     }),
//     // update  QuestionSection by id:  publicProcedure
//     updateQS: publicProcedure
//     .input(qsUpdateSchema)
//     .mutation(({ input, ctx }) => {
//         return ctx.prisma.questionSection.update({
//             where:{
//                 id: input.id.toString(),
//             },
//             // qsIdSchema.parse(input),
//             data: qsUpdateSchema.parse(input),
//         });
//         }),
//     // delete  QuestionSection by id:  publicProcedure
//     removeQS: publicProcedure
//      .input(qsIdSchema)
//         .mutation(({ input, ctx }) => {
//             return ctx.prisma.questionSection.delete({
//                 where: qsIdSchema.parse(input),
//             });
//         }),
//     });

// // export const userRouter = createTRPCRouter