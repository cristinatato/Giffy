import './App.css';
import { useState } from 'react';

const GIFS =  ['https://media1.giphy.com/media/2AilMg2L8rTAA/200w.webp?cid=ecf05e47nt6w43cw010mnyshen2rx6pfe6gv02dxno0umi3u&rid=200w.webp','https://media3.giphy.com/media/kLLDVeWnNwRXO/giphy.webp?cid=ecf05e47nt6w43cw010mnyshen2rx6pfe6gv02dxno0umi3u&rid=giphy.webp']
const DIFFERENT_GIFS = ['https://media1.giphy.com/media/1xK1QRqHENTTW/200w.webp?cid=ecf05e47nt6w43cw010mnyshen2rx6pfe6gv02dxno0umi3u&rid=200w.webp']

function App() {
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button onClick={()=>setGifs(DIFFERENT_GIFS) }>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
