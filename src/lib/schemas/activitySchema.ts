import { z } from "zod";

const requiredString = (fieldname: string) =>
  z
    .string({ error: `${fieldname} is required` })
    .trim()
    .min(1, { message: `${fieldname} is required` });

export const activitySchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
  category: requiredString("Category"),
  date: z.coerce.date({
    error: "Date is required",
  }),
  location: z.object({
    venue: requiredString("Venue"),
    city: requiredString("City"),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
  }),
});

export type ActivitySchema = z.input<typeof activitySchema>;
