import './App.css';
import React from 'react'
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";



function App() {

  return (
    <div className="App">
      <section className="App-content">
        <div className="Enlaces">
          <a href="/gif/:Marvel">Marvel</a>
          <a href="/gif/:Harry potter">Harry potter</a>
          <a href="/gif/:Asterix">Asterix</a>
        </div>

        <Route 
        path="/gif/:keyword" 
        component={ListOfGifs} />
        </section>
      </div>
  )

}


export default App;
