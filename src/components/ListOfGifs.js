import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs';

function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    })

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