import React from 'react'
// Components
import TilmeldNyhedsbrev from '../../shared/TilmeldNyhedsbrev'
import TilmeldNyhedsbrev2 from '../../shared/TilmeldNyhedsbrev2'

function ForsidePage() {
    return (
        <div>
            <h1>Forside</h1>
            <h2>Nyhedsbrevtilmelding med state</h2>
            <TilmeldNyhedsbrev />
            <br/>
            <h2>Nyhedsbrevtilmelding med formdata</h2>
            <TilmeldNyhedsbrev2 />
        </div>
    )
}

export default ForsidePage
