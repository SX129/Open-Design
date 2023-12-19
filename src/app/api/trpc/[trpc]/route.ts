import { appRouter } from "@/trpc";
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";

// Handles trpc request from /api/trpc/*
const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => ({}),
    })
};

export {handler as GET, handler as POST};