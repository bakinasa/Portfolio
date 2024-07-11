import Link from 'next/link';
import Head from "next/head";

export default function Header() {

    return (
        <>
            <Head>
                <title>Sofia Bakina`s portfolio</title>
                <link rel="icon" href="favicon.png" sizes="any"/>
                <meta name="author" content="Sofia Bakins"/>
                <meta name="description" content="This is my personal portfolio site"/>
            </Head>
            <header className="mt-8 mb-8 bg-[#646A50] py-8 relative">
                <div className="container mx-auto relative">
                    <nav className="flex justify-end space-x-4 text-white font-light text-lg">
                        <Link href="/">About me</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/contacts">Contact</Link>
                        <Link href="/comic">Comic</Link>
                    </nav>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={"myphoto.png"} alt="My photo"
                         className="absolute top-0 left-20 hidden sm:block sm:h-28 md:h-36"/>
                </div>
            </header>
        </>
    );
}
