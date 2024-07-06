import Image from 'next/image';

export default function Contacts() {
    return (
        <section className="my-28">
            <div className="flex z-10 flex-col items-center">
                <h1 className="text-4xl text-center font-bold mb-12">Contacts</h1>
                <p className="text-center max-w-[60%] mb-12 text-lg">Welcome to the contact page! I am always glad to
                    hear from you. Please contact me through any communication channel convenient for you. I will do my
                    best to answer your questions, however, I will likely only be able to respond during business
                    hours.</p>
            </div>

            <div className="flex flex-wrap z-10 justify-between gap-4 p-8">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                   className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-[#B1C09E] rounded-lg">
                    <Image src={"github.png"} alt="github" width={25} height={25} className="mr-2"/> GitHub
                </a>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"
                   className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-[#B1C09E] rounded-lg">
                    <Image src={"telegram.png"} alt="telegram" width={25} height={25} className="mr-2"/> Telegram
                </a>
                <a href="mailto:your.email@example.com"
                   className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-[#B1C09E] rounded-lg">
                    <Image src={"email.png"} alt="email" width={25} height={25} className="mr-2"/> Email
                </a>
            </div>
        </section>
    );
};
