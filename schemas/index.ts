import * as z from 'zod';

export const EmailNewsletter = z.object({
    email: z.string(),
});
