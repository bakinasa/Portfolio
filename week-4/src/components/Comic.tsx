import React, { useState, useEffect } from 'react';

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
            .then(response => response.text())
            .then(comicId => {
                const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
                return fetch(comicUrl);
            })
            .then(response => response.json())
            .then(comicData => {
                setComicData(comicData);
            })
            .catch(error => {
                console.error('Error fetching comic:', error);
                setError(error.message || 'An error occurred.'); // Handle generic error message
            });
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!comicData) {
        return <p>Loading...</p>;
    }

    const formattedDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`).toLocaleDateString();

    return (
        <div className="main-block">
            <div className="xkcd-comic-container">
                <h1>🐱 XKCD Comic</h1>
                <img src={comicData.img} alt={comicData.alt}/>
                <h2>{comicData.safe_title}</h2>
                <p>Published on: {formattedDate}</p>
            </div>
        </div>
    );
};

export default Comic;