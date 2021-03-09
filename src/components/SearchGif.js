import React, { useState } from 'react';




function SearchGif() {
    const [inputValue, setInput] = useState([]);
    const value = ''

    const handleInput = () => {
        console.log(inputValue);
    }

    return (
        <>
        <label htmlFor="gif">Busca tu gif</label>
        <input type="text" onChange={(e)=> setInput(e.target.value)}></input>
        <button className="button" onClick={handleInput}>Buscar</button>
        </>
    )
}

export default SearchGif;