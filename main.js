//  https://api.tvmaze.com/search/shows

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchItems = searchForm.elements.query.value;
    const config = { params: { q: searchItems } };
    const responce = await axios.get(`https://api.tvmaze.com/search/shows`, config)

    // console.log(responce.data[0]);
    getImageDisplay(responce.data);
    searchForm.elements.query = '';
})


// to get images
const getImageDisplay = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}