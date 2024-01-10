import { User } from "@/payload-types";
import { ExpressContext } from "@/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { PayloadRequest } from "payload/types";

// Initalizing trpc client with router
const t = initTRPC.context<ExpressContext>().create();
export const router = t.router;

const middlware = t.middleware
const isAuth = middlware(async ({ctx, next}) => {
    const req = ctx.req as PayloadRequest

    const {user} = req as {user: User | null}

    if (!user || !user.id){
        throw new TRPCError({ code: "UNAUTHORIZED"})
    }

    return next({
        ctx: {
            user,
        },
    })
})

// Defining public API endpoint
export const publicProcedure = t.procedure

// Defining private API endpoint
export const privateProcedure = t.procedure.use(isAuth)