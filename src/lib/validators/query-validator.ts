import { z } from "zod";

// User may only filter by fields that are allowed
export const QueryValidator = z.object({
    category: z.string().optional(),
    sort: z.enum(["asc", "desc"]).optional(),
    limit: z.number().optional(),
})

export type TQueryValidator = z.infer<typeof QueryValidator>