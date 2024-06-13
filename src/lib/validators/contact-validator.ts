import * as z from "zod";

const contactFormValidation = z.object({
  firstName: z.string().max(10).min(1),
  lastName: z.string().max(10).min(1),
  email: z.string().min(1),
  description: z.string().max(1000).min(1),
  subject: z.string().min(1),
});

type TContactFormValidator = z.infer<typeof contactFormValidation>;

export default contactFormValidation;
export type { TContactFormValidator };
