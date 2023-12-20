import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

// Initalizing public API endpoint
export const appRouter = router({
    auth: authRouter
});

// Creating appRouter type for trpc client
export type AppRouter = typeof appRouter;