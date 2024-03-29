"use client"
import { essayData } from "@/app/lib/data/essay-data";
import { BackToEssayListButton } from "@/app/ui/back-button";

import { useEffect, useState } from 'react';

interface EssayType {
    title: string;
    date: string;
    link: string;
    post: string;
}


export default function EssayPage({ params }: { params: { link: string } }) {
    const { link } = params; // Extract the link parameter from the URL

    // State to hold the essay data
    const [essay, setEssay] = useState<EssayType | undefined | null>(null);

    useEffect(() => {
        // Find the essay that matches the link parameter
        const foundEssay = essayData.find(essay => essay.link === link);
        setEssay(foundEssay);
    }, [link]);

    if (!essay) {
        return <p>Loading...</p>; // Or some loading state
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <p className="text-2xl font-semibold">{essay.title} Page</p>
                <p>{essay.date}</p>
            </div>
            <div className="lg:max-w-xl lg:w-full/2 lg:mb-0 tracking-wide leading-loose antialiased whitespace-pre-wrap">
                <p>{essay.post}</p>
            </div>
            <BackToEssayListButton />
        </main>
    );
}
