import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs';

function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    })


    {/* {
        gifs.map((singleGif) => 
        <Gif 
        title={singleGif.title} 
        url={singleGif.url} 
        id={singleGif.id} 
        key={singleGif.id}
        />) 
    } */}

    return gifs.map(({ id, title, url }) =>
        <Gif
            title={title}
            id={id}
            key={id}
            url={url}
        />
    )

}

export default ListOfGifs