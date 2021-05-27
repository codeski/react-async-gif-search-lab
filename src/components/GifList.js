import React from 'react'

function GifList(props) {

    const images = props.gifs.map(gif => <img key={gif} src={gif}></img>)
    return (
        <div>{images}</div>
    )
}

export default GifList