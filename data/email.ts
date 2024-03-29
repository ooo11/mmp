import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const emails = await db.email.findUnique({
            where: {
                email,
            }
        })
        return emails;
    } catch {
        return null;
    }
}