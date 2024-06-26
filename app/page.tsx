import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mark Mizuro',
  description: '..left my job as a service engineer to pursue a career as a full-time web developer and to build my own business from scratch.',
  metadataBase: new URL('https:markmizuro.com'),
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="z-10 lg:max-w-5xl w-full lg:justify-between font-mono text-sm lg:flex ">
        <a href="/essays" className="fixed justify-center lg:left-0 lg:top-0 flex w-full border-b 
        border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          Read my essay here&nbsp;
          <code className="font-mono font-bold">/essays</code>
        </a>

      </div>

      <div className="mx-12 mt-24 relative flex lg:place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#c401ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="animate-text bg-gradient-to-r from-red-600 via-violet-600 to-black bg-clip-text text-transparent text-8xl font-semibold">mark mizuro</p>
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-6">
        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Who I am and what I have become.
          </p>
        </Link>

        <Link
          href="/contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Subscribe{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Join my newsletter
          </p>
        </Link>

        <Link
          href="/uras"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl  font-semibold`}>
            Uras{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm  opacity-50`}>
            Listen to the Uras Podcast latest episode
          </p>
        </Link>
        <a
          href="https://www.jumpsay.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Works{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Current work can be found here.
          </p>
        </a>

      </div>
    </main>
  );
}
