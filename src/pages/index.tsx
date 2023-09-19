import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Dylan Open</title>
        <meta name="description" content="The Dylan Open" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col">
        <nav className="flex mx-auto w-10/12 justify-between px-12 py-8">
          <div>The Dylan Open</div>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <div className="flex items-center justify-center overflow-hidden">
          <img className="min-h-full w-11/12 shrink-0" src="/course.jpeg" />
        </div>
      </main>
    </>
  );
}
