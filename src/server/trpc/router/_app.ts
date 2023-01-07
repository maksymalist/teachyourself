import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { helloRouter } from "./hello";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  hello: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
