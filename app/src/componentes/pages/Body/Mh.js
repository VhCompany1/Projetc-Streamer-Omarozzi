import React from 'react'; //Volto mais tarde 

//Imagens
import RetroA from '../../img/Mh/Retro.png'
import VhA from '../../img/Mh/Vh.png'

export default function Mh(){
    const Vh = [
        'Legalzao',
        '00/00/0000'
    ]
    const Retro = [
        'O retro é legal d++',
        '00/00/0000'
    ]

    return(
        <div className='mh'>
            <div id='Vh'>
                <img src={VhA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Vh[0]}<br/>
                    Seguindo des de: {Vh[1]}
                </p>
            </div>  
            <div id='Retro'>
                <img src={RetroA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Retro[0]}<br/>
                    Seguindo des de: {Retro[1]}
                </p>
            </div>  
            <div id='Julia'>
                <img src={RetroA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Retro[0]}<br/>
                    Seguindo des de: {Retro[1]}
                </p>
            </div>  
            <div id='Mickey'>
                <img src={RetroA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Retro[0]}<br/>
                    Seguindo des de: {Retro[1]}
                </p>
            </div>  
            <div id='AyrThon'>
                <img src={RetroA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Retro[0]}<br/>
                    Seguindo des de: {Retro[1]}
                </p>
            </div>  
        </div>
    )
}