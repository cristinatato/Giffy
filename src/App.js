import './App.css';
import React from 'react'
import Home from './pages/Home';
import { Route } from "wouter";
import ListOfGifs from './components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
       <Route 
            path="/" 
            component={Home} />
        <Route 
            path="/gif/:keyword" 
            component={ListOfGifs} />
       </section >
      </div>
  )

}


export default App;
