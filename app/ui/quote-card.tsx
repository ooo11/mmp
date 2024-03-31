interface QuotesType {
    quote: string;
    writer: string;
    reference: string
}
export default function QutoteCard({ quote, writer, reference }: QuotesType) {
    return (
        <div className="lg:max-w-2xl lg:w-full lg:mb-0 ">
            <p className="text-base font-light leading-relaxed mt-0 mb-0 selection:bg-yellow-500 selection:text-black hover:underline underline-offset-4 decoration-8 decoration-yellow-500 ">
                {quote}
            </p>
            <footer className="mt-2 block text-purple-500">
                - {writer} <cite>{reference}</cite>
            </footer>
        </div>
    );
}