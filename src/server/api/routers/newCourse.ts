import { z } from "zod";
import {
  createTRPCRouter,protectedProcedure, publicProcedure,
} from "~/server/api/trpc";

export const newCourseRouter = createTRPCRouter({
    getCourses: publicProcedure.query(({ ctx }) => {
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

    create: protectedProcedure  
      .input(z.object({ title: z.string(), description: z.string() }))
      .mutation(({ ctx, input }) => {
      
        console.log("title: "+ input.title + ", description: "+ input.description + ", userId: "+  ctx.auth.userId);


        return ctx.prisma.course.create({
          data: {
            title: input.title,
            description: input.description,
            userId: ctx.auth.userId,    
                       
          },
          
        });
      }),
    });