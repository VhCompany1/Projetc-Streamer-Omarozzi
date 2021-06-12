import React from 'react'; //Volto mais tarde 

//Imagens
import RetroA from '../../../img/Mh/Retro.png'
import VhA from '../../../img/Mh/Vh.png'
import MickeyA from '../../../img/Mh/Mickey.png'
import EllenA from '../../../img/Mh/Ellen.jpg'

    //Logos
    import GithubLogo from '../../../img/GitHub-Logo.png'

export default function Mh(){
    const Ellen = [
        'A Ellen é a namorada do streamer Omarozzi ja esteve presente em uma das lives, contem uma sinpatia incrivel e consquitou o coração de todos.',
        '28/02/2020'
    ]
    const Vh = [
        'VhCompany(eu) é um dos viewers mais ativos assim como o Mickey presente em todas as lives porem com um pouco de atrazo pois ainda esta se adptando com o novo horario das lives',
        '06/03/2021'
    ]
    const Retro = [
        'O Retro foi um dos primeiro followers do streamer porem deu unfollow e perdeu o followage, ele não esta mais muito ativo mais ja foi o suficiente para fazer marcações',
        '21/04/2021'
    ]
    const Mickey = [
        'Mickey é um dos usario mais ativos atualmente foi convidade pelo VhCompany(eu) e esta fielmente até agora, assim como VhCompany(eu) mickey é programador e revela seu conhecimentos em diversas lives.',
        '03/05/2021'
    ]

    return(
        <div className='mh'>
            <div id='Ellen'>
                <img src={EllenA} alt='Ellen' className='icon1'/>
                <p>
                    {Ellen[0]}<br/>
                    Seguindo des de: {Ellen[1]}<br/>
                </p>
            </div> 
            <div id='Vh'>
                <img src={VhA} alt='Vh Avatar' className='icon1'/>
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
                <img src={MickeyA} alt='Mickey Avatar' className='icon1'/>
                <p>
                    {Mickey[0]}<br/>
                    Seguindo des de: {Mickey[1]}<br/>
                    <a href='https://github.com/mr-soulfox'>GitHub<img src={GithubLogo} alt='github logo' className='icon'/></a>
                </p>
            </div> 
        </div>
    )
}