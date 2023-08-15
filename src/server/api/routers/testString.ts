// import { z } from "zod";
// import {
//   createTRPCRouter,protectedProcedure, publicProcedure,
// } from "~/server/api/trpc";

// export const testStringRouter = createTRPCRouter({
//     getAll: publicProcedure.query(({ ctx }) => {
//         if (ctx.auth?.userId) {
//             return ctx.prisma.testString.findMany({
//               where: {
//                 userId: ctx.auth.userId,
//               },
//             });
//           } else {
//             console.log("User not authenticated. => ctx.auth.userId is null <=");
//           }
//         }),
//         create: protectedProcedure  
//       .input(z.object({ testInput: z.string() }))
//       .mutation(({ ctx, input }) => {
//         // console.log(ctx.auth); 
//         return ctx.prisma.testString.create({
//           data: {
//             testInput: input.testInput,
//             userId: ctx.auth.userId,                    
//             //"clkswcf8j0000dg1km8pz49zq",                 
//           },
//         });
//       }),
//     });

