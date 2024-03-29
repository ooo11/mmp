"use client"
import { sendEmail } from "@/actions/email";
import { BackButton } from "@/app/ui/back-button";
import { EmailNewsletter } from "@/schemas";
import { startTransition, useState } from 'react';
import { FormError } from '../ui/form-error';
import { FormSuccess } from '../ui/form-success';

export default function Contact() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent form from submitting the traditional way
        const values = { email }; // Assuming email is the only field for simplicity

        // Validate values with zod schema before proceeding
        const result = EmailNewsletter.safeParse(values);
        if (!result.success) {
            setError('Validation failed');
            return;
        }

        setError("");
        setSuccess("");

        startTransition(() => {
            sendEmail(result.data)
                .then((data) => {
                    if (data?.error) {
                        setError(data.error);
                    }

                    if (data?.success) {
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div
                className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">

                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">We build it for you
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    Cost only MYR 499, we build you a landing page. No bullshit.
                </p>

                <form onSubmit={onSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4">

                    <label className="sr-only">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />

                    <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Build for me</button>
                </form>
                <div className="mx-auto mt-10 max-w-xl flex-auto gap-x-4">
                    <FormError message={error} />
                    <FormSuccess message={success} />
                </div>


                <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stopColor="#8E44AD"></stop>
                            <stop offset="1" stopColor="#A0153E" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>

            <BackButton />

        </main>
    );
}

