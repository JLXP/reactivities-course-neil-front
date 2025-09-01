import { z } from "zod";

const requiredString = (fieldname: string) =>   z.string({error: `${fieldname} is required`}).trim().min(1, { message: `${fieldname} is required` });

export const activitySchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
  category: requiredString("Category"),
  date: z.coerce.date<Date>(
    {
      error: 'Date is required',
    }),
  city: requiredString("City"),
  venue: requiredString("Venue"),
});

export type ActivitySchema = z.input<typeof activitySchema>;
