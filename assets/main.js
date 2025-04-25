const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLetFUtrDqLjoII8CN1SuRomEf9GtMA0gg&part=snippet&maxResults=3';

const videoContent = null || document.getElementById('video-content')
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '99028ce523msh0c1f4e62bdb5c9bp19bbecjsn14a2ca9751fc',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(API, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    console.log(data);
    return data;
}
//funcion que se invoca a si misma
(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div>
                <div class="inside">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
                </div>
                <div class="video-title">
                    <a href="https://www.youtube.com/shorts/${video.snippet.resourceId.videoId}">
                        ${video.snippet.title}
                    </a>
                </div>
            </div>
            `).slice(0,2).join('')}
        `;
        videoContent.innerHTML = view;
    }catch(error) {
        console.log(error);
    }
})();