import './App.css';
import { useState, useEffect } from 'react';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=Okpaxk39zhRA4tS8eX0hYeDtmna09GwW&q=leslie knope&limit=25&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {

    fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      setGifs(gifs)
    })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif, index) => {
          return <img src={singleGif} alt="imagen"/>
        })
        }
      
      </section>
    </div>
  );
}

export default App;
