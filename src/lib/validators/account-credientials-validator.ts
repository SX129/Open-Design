import { z } from "zod";
  
  // Schema validation for new user email/password sign-up
  export const AuthCredientialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters long." }),
  });

  // Defined type safety for validation check
  export type TAuthCredientialsValidator = z.infer<typeof AuthCredientialsValidator>;