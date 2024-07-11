import React from "react";
import Head from 'next/head';

interface ComicData {
    img: string;
    alt: string;
    safe_title: string;
    year: string;
    month: string;
    day: string;
}

const fetchComicData = async (): Promise<{ comicData?: ComicData; error?: string }> => {
    const email = 's.bakina@innopolis.university';
    const params = new URLSearchParams({email});
    const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

    try {
        const comicIdResponse = await fetch(comicIdUrl);
        if (!comicIdResponse.ok) {
            throw new Error('Failed to fetch comic ID');
        }
        const comicId = await comicIdResponse.text();

        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse = await fetch(comicUrl);
        if (!comicResponse.ok) {
            throw new Error('Failed to fetch comic data');
        }
        const comicData: ComicData = await comicResponse.json();

        return {comicData};
    } catch (error) {
        console.error('Error fetching comic:', error);
        return {error: 'An error occurred.'};
    }
};

const ComicPage = async () => {
    const {comicData, error} = await fetchComicData();

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    if (!comicData) {
        return <p>Loading...</p>;
    }

    const formattedDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`).toLocaleDateString();

    return (
        <>
            <Head>
                <title>{comicData.safe_title}</title>
                <meta name="description" content={comicData.alt}/>
            </Head>
            <div className="relative">
                <div
                    className="absolute z-0 top-1/3 right-0 w-full h-[480px] lg:h-[360px] rounded-full bg-gradient-radial from-yellow-100 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-yellow-400 dark:opacity-10"
                ></div>

                {/* Comic content */}
                <div className="flex justify-center items-center">
                    <div className="max-w-2xl mx-auto mt-10 mb-20 relative z-10">
                        <h1 className="text-3xl text-center">🐱 XKCD Comic</h1>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={comicData.img} alt={comicData.alt} className="mt-4 mb-4 mx-auto"/>
                        <h2 className="text-xl text-center">{comicData.safe_title}</h2>
                        <p className="text-gray-700 text-center">Published on: {formattedDate}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComicPage;
