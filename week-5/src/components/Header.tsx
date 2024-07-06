import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    return (
        <header className="mt-8 mb-8 bg-[#646A50] py-8 relative">
            <div className="container mx-auto relative">
                <nav className="flex justify-end space-x-4 text-white font-light text-lg">
                    <Link href="/">About me</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contacts">Contact</Link>
                    <Link href="/comic">Comic</Link>
                </nav>
                <Image src={"myphoto.png"} alt="My photo" className="absolute top-0 left-20 hidden sm:block sm:h-28 md:h-36" />
            </div>
        </header>
    );
}
