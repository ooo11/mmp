import { BackButton } from "@/app/ui/back-button";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">


            <p className="text-2xl font-semibold">About Page</p>

            <div className="lg:max-w-5xl lg:w-full lg:mb-0 tracking-wide leading-loose antialiased">
                <p>
                    Spent five years repairing ships and coding during my free time. I&apos;ve recently left my job as a service engineer to pursue
                    a career as a full-time web developer. I earned my degree in Electrical and Telecommunications Engineering from Okayama
                    University in Japan, where my final year project focused on researching thermoelectrics to convert heat into electricity. My
                    coding journey began in my third year of university, where I developed a chatroom using Jade that featured an
                    animated text screen. Post-graduation, I secured an internship at a local food delivery app company, where I expanded my skills in NodeJS, AngularJS, and Git. During the lockdown in 2020, I dedicated my time to learning the basics, such as JavaScript and
                    React. Since then, I&apos;ve been coding to explore my potential to build my own websites.
                </p>
            </div>

            <BackButton />


        </main>
    );
}