import { BackButton } from "@/app/ui/back-button";
import EssayButton from "../ui/essay-button";
import { essayData } from "../lib/data/essay-data";

export default function Essays() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 ">


            <p className="text-2xl font-semibold">Essays Page</p>


            {essayData.map((essay, index) => (
                <EssayButton key={index} title={essay.title} date={essay.date} link={essay.link} />
            ))}




            <BackButton />

        </main>
    );
}
