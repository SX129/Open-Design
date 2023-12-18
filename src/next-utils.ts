import next from "next";

const PORT = Number(process.env.PORT) || 3000;

// Utility function for nextJS
export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

// Function to self-host nextJS
export const nextHandler = nextApp.getRequestHandler();