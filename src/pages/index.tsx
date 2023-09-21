import Head from "next/head";
import Navbar from "~/components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>The Dylan Open</title>
                <meta name="description" content="The Dylan Open" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen w-full flex-col text-neutral-900">
                <Navbar />
                <div className="flex items-center justify-center overflow-hidden">
                    <img className="min-h-full w-11/12 shrink-0" src="/course.jpeg" />
                </div>
            </main>
        </>
    );
}
