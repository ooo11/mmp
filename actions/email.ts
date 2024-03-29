"use server"
import * as z from 'zod';
import { EmailNewsletter } from '@/schemas/index';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/email';

export const sendEmail = async (
    values: z.infer<typeof EmailNewsletter>,
) => {
    const validatedFields = EmailNewsletter.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (existingUser?.email) {
        return { error: "Email already registered!" }
    }


    try {
        await db.email.create({

            data: {
                email: email,
                time: new Date(),
            }


        });
        return {
            success: "Email submitted!"
        };
    } catch (error) {
        if (error) {
            return { error: "Something is working badly!" }

        }

        throw error;
    }
}