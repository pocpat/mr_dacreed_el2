import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const PostAPIRouter = createTRPCRouter({
    postTest: publicProcedure
    .input(z.object({name: z.string(), email: z.string(), age: z.number()}))
    .mutation(({input})=>{
        let user = {
            name:input.name,
            email: input.email,
            age: input.age,
        };
   }),
   getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});