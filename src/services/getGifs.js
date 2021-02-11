const apiKey = 'Okpaxk39zhRA4tS8eX0hYeDtmna09GwW&q'


function getGifs({keyword = 'Andy dwayer'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
          const {data} = response
          const gifs = data.map(image => image.images.downsized_medium.url)
          return gifs
        })
}

export default getGifs;


