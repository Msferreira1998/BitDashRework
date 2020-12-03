import React from 'react'

import nyancat from '../Images/nyancat.gif'
import imError from '../Images/imError.gif'
import alien from '../Images/alien.gif'
import desertehunters from '../Images/deserthunters.gif'
import dog from '../Images/dog.gif'
import elefante from '../Images/elefante.gif'
import fruitfluid from '../Images/fruitfluid.gif'
import princess from '../Images/princess.gif'


export default props => {

    let planoDeFundo = []
    planoDeFundo[0] = princess
    planoDeFundo[1] = imError
    planoDeFundo[2] = nyancat
    planoDeFundo[3] = alien
    planoDeFundo[4] = desertehunters
    planoDeFundo[5] = dog
    planoDeFundo[6] = elefante
    planoDeFundo[7] = fruitfluid

    function getImage(){
        let min = Math.ceil(0);
        let max = Math.floor(7);
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }

    const divStyle = {
        width: '100vw',
        height: '100vh',
        background: `url(${planoDeFundo[getImage()]}) center center / cover no-repeat fixed`,
    }

    return(
        <div className="Background" style={divStyle}>{props.children}</div>
    )
}
