import { publicProcedure, router } from "./trpc";

// Initalizing public API endpoint
export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'hello'
    }),
});

// Creating appRouter type for trpc client
export type AppRouter = typeof appRouter;