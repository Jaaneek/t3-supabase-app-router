import { z } from "zod";

import {
  createTRPCRouter,
  // privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  // PUBLIC PROCEDURE EXAMPLE
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.users.findMany();
  // }),
  // PRIVATE PROCEDURE EXAMPLE
  // updateUser: privateProcedure
  //   .input(z.object({ id: z.string(), name: z.string() }))
  //   .mutation(({ input, ctx }) => {
  //     if (input.id === ctx.user.id) {
  //       ctx.prisma.users.update({
  //         where: { id: input.id },
  //         data: { name: input.name },
  //       });
  //     }
  //   }),
});
