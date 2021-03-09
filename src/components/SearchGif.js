import React, { useState } from 'react';
import { useLocation } from "wouter";

function SearchGif() {
    const [keyWord, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();


    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/gif/${keyWord}`)
        console.log(keyWord);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="gif">Busca tu gif</label>
                <input type="text" onChange={(e) => setKeyword(e.target.value)}></input>
            </form>
        </>
    )
}

export default SearchGif;