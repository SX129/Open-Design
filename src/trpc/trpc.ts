import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

// Initalizing trpc client with router
const t = initTRPC.context<ExpressContext>().create();
export const router = t.router;

// Defining public API endpoint
export const publicProcedure = t.procedure