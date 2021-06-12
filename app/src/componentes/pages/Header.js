import React from 'react';

//imagens
import Wifi from '../img/SemWifi.png'

//Sounds
//import WifiSound from '../audio/VivoTurbo.mp3'

export default function Header(){
    return(
        <div className='header'>
            <a href='./?page=Home'>Home</a> <a href='./?page=Clips'>Clips</a> <a href='./?page=Games'>Games</a>
            <img src={Wifi} alt='wifi' className='icon' />
        </div>  
    )
}