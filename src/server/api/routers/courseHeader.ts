import { z } from "zod";
import {
  createTRPCRouter,protectedProcedure, publicProcedure,
} from "~/server/api/trpc";

export const courseHeaderRouter = createTRPCRouter({
    // GET ALL 
    getAll: publicProcedure.query(({ ctx }) => {
        if (ctx.auth?.userId) {
            return ctx.prisma.courseHeader.findMany({
              where: {
                userId: ctx.auth.userId,
              },
            });
          } else {
            console.log("User not authenticated. => ctx.auth.userId is null <=");
          }
        }),
    
    // CREATE
    create: protectedProcedure  
      .input(z.object({ title: z.string(), subHeading: z.string(), description: z.string() }))
      .mutation(({ ctx, input }) => {
        // console.log(ctx.auth); 
        return ctx.prisma.courseHeader.create({
          data: {
            title: input.title,
            userId: ctx.auth.userId,
            subHeading: input.subHeading,
            description: input.description
            //"clkswcf8j0000dg1km8pz49zq",                 
          },
        });
      }),
    });