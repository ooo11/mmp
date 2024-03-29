import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function BackButton() {
    return (
        <Link
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        >
            <h2 className={` text-2xl font-semibold`}>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <ArrowLeftIcon className="w-5 h-5" />
                </span>

                {" "}back

            </h2>
        </Link>

    );
}

export function BackToEssayListButton() {
    return (
        <Link
            href="/essays"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        >
            <h2 className={` text-2xl font-semibold`}>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <ArrowLeftIcon className="w-5 h-5" />
                </span>

                {" "}back to essay

            </h2>
        </Link>

    );
}