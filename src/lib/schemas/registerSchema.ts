import z from "zod";
import { requiredString } from "../utils/utils";

export const registerSchema = z.object({
  email: z.email(),
  displayName: requiredString("displayName"),
  password: requiredString("password"),
});

export type RegisterShema = z.infer<typeof registerSchema>;