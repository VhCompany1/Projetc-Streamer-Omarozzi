import React from 'react';

//Pages
import Mh from './Mh';

//Style
import '../../style/App.css'

//Imagens
import InstagramLogo from '../../img/instagram-logo.png'
import TwitchLogo from '../../img/twitch-logo.png'
import Avatar from '../../img/Omarozzi-Avatar.jpg'

export default function Body(){
    const insta = 'https://www.instagram.com/gabriel_marozzi/'
    const tw = 'https://twitch.tv/Omarozzi'
    const Desc = ['Omarozzi é um streamer da twitch a X anos ele faz lives de games de só na conversa, tem atualmente 130 followers e esta no rumo aos 200, ele faz live a tarde em media as 15horas.', 'instagram:' + insta, 'twitch:' + tw]


    return(
        <div className='body'>
            <img src={Avatar} alt='Omarozzi Avatar' className='avatar'/>
            <h1>Omarozzi</h1>   
            <p>{Desc[0]}</p>
            <p>
                {Desc[1]} <a href={insta}><img src={InstagramLogo} alt='instagram logo' className='icon'/></a>
                <br/>
                {Desc[2]} <a href={tw}><img src={TwitchLogo} alt='twitch logo' className='icon'/></a>
            </p>
            <h2>Menções honrosas</h2>
            <Mh/>
        </div>
    )
}