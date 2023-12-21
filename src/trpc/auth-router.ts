import { AuthCredientialsValidator } from "../lib/validators/account-credientials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

// Handles auth logic for api endpoint
export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredientialsValidator).mutation( async ({input}) => {
        const {email, password} = input
        const payload = await getPayloadClient()

        // Checks if user exists
        const {docs: users} = await payload.find({
            collection: "users",
            where: {
                email: {
                    equals: email,
                },
            },
        })

        if(users.length !== 0) throw new TRPCError({code: "CONFLICT"})

        await payload.create({
            collection: "users",
            data: {
                email,
                password,
                role: 'user',
            },
        })

        return {success: true, sentToEmail: email}
    }),

    // Email verification from CMS
    verifyEmail: publicProcedure.input(z.object({ token: z.string() })).query( async ({ input }) => {
        const {token} = input;

        const payload = await getPayloadClient();

        // Changes _verified field to true in db if true
        const isVerified = await payload.verifyEmail({
            collection: "users",
            token,
        })

        if(!isVerified) throw new TRPCError({ code: "UNAUTHORIZED" });

        return { success: true };
    }),
})