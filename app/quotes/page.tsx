import QutoteCard from "@/app/ui/quote-card";
import { BackButton } from "@/app/ui/back-button";



export default function Quote() {

    const quoteData = {
        quote: "To succeed you have to produce the absolute best stuff you're capable of producing - a task that requires depth.",
        writer: "Cal Newport",
        reference: "Deep Work",
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">


            <p className="text-2xl font-semibold">Quote Page</p>

            <QutoteCard quote={quoteData.quote} writer={quoteData.writer} reference={quoteData.reference} />



            <BackButton />

        </main>
    );
}
