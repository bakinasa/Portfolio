const email = 's.bakina@innopolis.university';
const params = new URLSearchParams({ email });
const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

fetch(comicIdUrl)
    .then(response => response.text())
    .then(comicId => {
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

        fetch(comicUrl)
            .then(response => response.json())
            .then(comicData => {
                // Display the comic image, title, and date

                const comicDiv = document.getElementById('comic');
                const img = document.createElement('img');
                img.src = comicData.img;
                img.alt = comicData.alt;
                comicDiv.appendChild(img);

                const titleDiv = document.createElement('h2');
                const titleTextNode = document.createTextNode(comicData.safe_title);
                titleDiv.appendChild(titleTextNode);
                comicDiv.appendChild(titleDiv);

                const dateDiv = document.createElement('p');
                const date = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`);
                const dateTextNode = document.createTextNode(`Published on: ${date.toLocaleDateString()}`);
                dateDiv.appendChild(dateTextNode);
                comicDiv.appendChild(dateDiv);
            })
            .catch(error => console.error('Error fetching comic:', error));
    })
    .catch(error => console.error('Error fetching comic ID:', error));