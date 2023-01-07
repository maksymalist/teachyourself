import { z } from "zod";
import { prisma } from "../../db/client";

import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  add_learner_type: protectedProcedure
    .input(
      z
        .object({ id: z.string().nullish(), type: z.string().nullish() })
        .nullish()
    )
    .mutation(({ input }) => {
      if (input == null) {
        throw new Error("Missing fields");
      }

      if (input?.id == null) {
        throw new Error("Missing id");
      }

      prisma.user.update({
        where: {
          id: input?.id,
        },
        data: {
          learnerType: input.type,
        },
      });
    }),
});
