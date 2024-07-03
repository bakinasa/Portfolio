// src/api.ts
export interface ComicData {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}

export interface ComicIdResponse {
    id: number;
}

export async function fetchComicId(email: string): Promise<number> {
    const params = new URLSearchParams({ email });
    const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;
    const response = await fetch(comicIdUrl);
    const data: ComicIdResponse = await response.json();
    return data.id;
}

export async function fetchComic(comicId: number): Promise<ComicData> {
    const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
    const response = await fetch(comicUrl);
    const data: ComicData = await response.json();
    return data;
}
