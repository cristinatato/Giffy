import React from 'react'
import './Gif.css'

function Gif({ title, id, url}) {
    return (
        <div className="Gif">
            <h4>{title}</h4>
            <img src={url} alt={title} />
            <p>{id}</p>
        </div>
    )
}

export default Gif