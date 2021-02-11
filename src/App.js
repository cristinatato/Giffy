import './App.css';
import { useState, useEffect } from 'react';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({keyword: 'Ryan Reynolds'}).then(gifs => setGifs(gifs))
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
