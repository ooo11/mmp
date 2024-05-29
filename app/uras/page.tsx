import QutoteCard from "@/app/ui/quote-card";
import { BackButton } from "@/app/ui/back-button";
import Image from "next/image";



export default function Quote() {

    const quoteData = {
        quote: "To succeed you have to produce the absolute best stuff you're capable of producing - a task that requires depth.",
        writer: "Cal Newport",
        reference: "Deep Work",
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-8">
            <div className="flex flex-col items-center md:flex-row md:max-w-3xl md:p-0 pt-4">
                <Image src='https://imgcdn.jumpsay.com/uras-draft_06.JPG' alt={"URAS"} height={300} width={300} className="rounded-2xl" priority></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Uras</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Want a thousand, do a thousand.<br /> <br />

                        This podcast is made for Sabah & Sarawak people on how to build a business. At the same time we interview businesses on what it takes for it to succeed. <br /> <br />
                        New episode every Monday.
                    </p>
                    <a href='https://open.spotify.com/show/0yQlsZJ76talyldBQSbc4u' type="button" className="text-black bg-white  focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500  transition duration-200 hover:bg-gray-100/50 hover:scale-105 me-2 mb-2 mt-2">
                        <svg className="me-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" /></svg>
                        Listen on Spotify
                    </a>
                </div>
            </div>

            <div className="flex">
                <iframe src="https://podcasters.spotify.com/pod/show/urasstudio/embed/episodes/Live-at-Borneo-Native-Festival-2024---Uras-Podcast-Episode-2-e2k59ob" width="780px" className="hidden md:block"></iframe>
                <iframe src="https://podcasters.spotify.com/pod/show/urasstudio/embed/episodes/Live-at-Borneo-Native-Festival-2024---Uras-Podcast-Episode-2-e2k59ob" width="320px" className="md:hidden md:block"></iframe>

            </div>


            <BackButton />

        </main>
    );
}
