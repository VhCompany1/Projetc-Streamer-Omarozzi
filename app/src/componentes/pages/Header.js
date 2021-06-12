import React from 'react';

//imagens
import Wifi from '../img/SemWifi.png'

//Sounds
//import WifiSound from '../audio/VivoTurbo.mp3'

export default function Header(){
    return(
        <div className='header'>
            <a href='./index.html'>Home</a> <a href='./Citados.html'>Citados</a> <a href='./Games.html'>Games</a>
            <img src={Wifi} alt='wifi' className='icon' />
        </div>  
    )
}