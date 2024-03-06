import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Please enter your username" })
    .max(50),
  password: z
    .string()
    .min(6, { message: "Please enter your password" })
    .max(50),
  email: z.string().email().max(50),
});
export const LoginSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Please enter your password" })
    .max(50),
  email: z.string().email().max(50),
});
