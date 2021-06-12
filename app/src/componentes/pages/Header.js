import React from 'react';

//imagens
import Wifi from '../img/SemWifi.png'

export default function Header(){
    return(
        <div className='header'>
            <a href=''>Home</a> <a href=''>Citados</a> <a href=''>Games</a>
            <img src={Wifi} alt='wifi' className='icon'/>
        </div>  
    )
}