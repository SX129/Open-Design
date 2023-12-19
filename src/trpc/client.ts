import {createTRPCReact} from "@trpc/react-query";
import type { AppRouter } from "./";

// trpc client wrapping backend of type AppRouter
// this maintains type safety across the client and server
export const trpc = createTRPCReact<AppRouter>({});