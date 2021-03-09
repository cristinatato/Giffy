import React, { useState } from 'react';
import SearchGif from '../components/SearchGif';
import { Link } from "wouter";

function Home() {
   
    return (
        <>
            <h1>Giffy</h1>
            <div className="Enlaces">
                <Link to="/gif/:Marvel">Marvel</Link>
                <Link to="/gif/:Harry potter">Harry potter</Link>
                <Link to="/gif/:Asterix">Asterix</Link>
            </div>
            <SearchGif/>
        </>
    )
}




export default Home