import './App.css';
import React from 'react'
import ListOfGifs from './components/ListOfGifs';



function App() {

  return (
    <div className="App">
      <section className="App-content">
       <ListOfGifs keyword='Marvel'/>
        </section>
      </div>
  )

}


export default App;
