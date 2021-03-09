import './App.css';
import React from 'react'
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";



function App() {

  return (
    <div className="App">
      <section className="App-content">
        <div className="Enlaces">
          <Link to="/gif/:Marvel">Marvel</Link>
          <Link to="/gif/:Harry potter">Harry potter</Link>
          <Link to="/gif/:Asterix">Asterix</Link>
        </div>

        <Route 
        path="/gif/:keyword" 
        component={ListOfGifs} />
        </section>
      </div>
  )

}


export default App;
