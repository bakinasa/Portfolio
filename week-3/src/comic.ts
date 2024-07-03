// src/comic.ts
import { fetchComicId, fetchComic, ComicData } from './api';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const email = 's.bakina@innopolis.university';
        const comicId = await fetchComicId(email);
        const comicData = await fetchComic(comicId);

        const comicDiv = document.getElementById('comic');
        const img = document.createElement('img');
        img.src = comicData.img;
        img.alt = comicData.alt;
        comicDiv.appendChild(img);

        const titleDiv = document.createElement('h2');
        titleDiv.textContent = comicData.safe_title;
        comicDiv.appendChild(titleDiv);

        const dateDiv = document.createElement('p');
        const date = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`);
        dateDiv.textContent = `Published on: ${date.toLocaleDateString()}`;
        comicDiv.appendChild(dateDiv);
    } catch (error) {
        console.error('Error fetching and displaying comic:', error);
    }
});
