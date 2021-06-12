import React from 'react'; //Volto mais tarde 

//Imagens
import RetroA from '../../img/Mh/Retro.png'
import VhA from '../../img/Mh/Vh.png'
import MickeyA from '../../img/Mh/Mickey.png'
    //Logos
    import GithubLogo from '../../img/GitHub-Logo.png'

export default function Mh(){
    const Vh = [
        'Legalzao',
        '06/03/2021'
    ]
    const Retro = [
        'O retro é legal d++',
        '21/04/2021'
    ]
    const Mickey = [
        'Drogado d+',
        '03/05/2021'
    ]

    return(
        <div className='mh'>
            <div id='Vh'>
                <img src={VhA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Vh[0]}<br/>
                    Seguindo des de: {Vh[1]}<br/>
                    <a href='https://github.com/VhCompany1'>GitHub<img src={GithubLogo} alt='github logo' className='icon'/></a>
                </p>
            </div>  
            <div id='Retro'>
                <img src={RetroA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Retro[0]}<br/>
                    Seguindo des de: {Retro[1]}<br/>

                </p>
            </div>  
            <div id='Mickey'>
                <img src={MickeyA} alt='Retro Avatar' className='icon1'/>
                <p>
                    {Mickey[0]}<br/>
                    Seguindo des de: {Mickey[1]}<br/>
                    <a href='https://github.com/mr-soulfox'>GitHub<img src={GithubLogo} alt='github logo' className='icon'/></a>
                </p>
            </div> 
        </div>
    )
}