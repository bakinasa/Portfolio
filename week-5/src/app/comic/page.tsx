'use client'
import Image from 'next/image';
import React, { useEffect, useState } from "react";

interface ComicData {
    img: string;
    alt: string;
    safe_title: string;
    year: string;
    month: string;
    day: string;
}

const Comic: React.FC = () => {
    const [comicData, setComicData] = useState<ComicData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const email = 's.bakina@innopolis.university';
        const params = new URLSearchParams({ email });
        const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

        fetch(comicIdUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(comicId => {
                const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
                return fetch(comicUrl);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(comicData => {
                setComicData(comicData as ComicData);
            })
            .catch(error => {
                console.error('Error fetching comic:', error);
                setError(error.message || 'An error occurred.'); // Handle generic error message
            });
    }, []);

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    if (!comicData) {
        return <p>Loading...</p>;
    }

    const formattedDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`).toLocaleDateString();

    return (
        <div className="relative">
            {/* Gradient background */}
            <div
                className="absolute z-0 top-1/3 right-0 w-full h-[480px] lg:h-[360px] rounded-full bg-gradient-radial from-yellow-100 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-yellow-400 dark:opacity-10"
            ></div>

            {/* Comic content */}
            <div className="flex justify-center items-center">
                <div className="max-w-2xl mx-auto mt-10 mb-20 relative z-10">
                    <h1 className="text-3xl text-center">🐱 XKCD Comic</h1>
                    <Image src={comicData.img} alt={comicData.alt} className="mt-4 mb-4 mx-auto"/>
                    <h2 className="text-xl text-center">{comicData.safe_title}</h2>
                    <p className="text-gray-700 text-center">Published on: {formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Comic;
