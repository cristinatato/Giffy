import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs';

function ListOfGifs({ params }) {
    const [gifs, setGifs] = useState([]);
    const { keyword } = params

    useEffect(function () {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

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