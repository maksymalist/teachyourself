import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const helloRouter = router({
  hello: publicProcedure.query(() => {
    return "Hello, world!";
  }),
  hi: protectedProcedure.query(({ ctx }) => {
    return "Hi, " + ctx?.session?.user?.name + "!";
  }),
  hey: publicProcedure
    .input(z.object({ name: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return "Hey, " + input?.name ?? "world" + "!";
    }),
});
