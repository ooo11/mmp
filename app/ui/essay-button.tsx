import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface EssayType {
    title: string;
    date: string;
    link: string;
}
export default function EssayButton({ title, date, link }: EssayType) {
    return (
        <div className="grid text-center lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
            <Link
                href={`/essays/${link}`}
                className="group rounded-lg border border-transparent px-5 lg:py-4 p-0 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

            >
                <h2 className={`mb-0 text-2xl font-semibold`}>
                    {title}{" "}
                    <span className="inline-block place-items-end transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        <ArrowRightIcon className="w-5 h-5" />
                    </span>
                </h2>
                <p>{date}</p>

            </Link>
        </div>
    );
}