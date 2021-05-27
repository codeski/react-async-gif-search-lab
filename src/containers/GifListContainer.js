
//It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (search = 'dolphins') => {
        debugger
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            let urls = data.data.map(gif => gif.images.original.url)
            this.setState({
                gifs: [...urls]
            })
        })

    }
    render(){
        return (
        <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifs}/></div>
        )
    }
}

export default GifListContainer