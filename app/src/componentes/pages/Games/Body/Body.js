import React from 'react';

//Imagens
import AmongUsA from '../../../img/AmongUs-logo.jpg'
import JotunA from '../../../img/Jotun-Logo.jpg'
import BomberManA from '../../../img/BomberMan-Logo.jpg'

export default function Body(){
    const AmongUs = [
        'Among Us é um jogo eletrônico online, dos gêneros jogo em grupo e sobrevivência, desenvolvido e publicado pelo estúdio de jogos estadunidense InnerSloth. Foi lançado em 15 de junho de 2018 para Android e iOS e em 17 de agosto de 2018 para Microsoft Windows.',
    ]

    const Jotun = [
        'Jotun é um jogo eletrônico de ação e aventura desenvolvido e publicado pela Thunder Lotus Games. Foi lançado para Microsoft Windows, OS X e Linux no dia 29 de setembro de 2015; para Wii U no dia 8 de setembro de 2016; para PlayStation 4 e Xbox One no dia seguinte e para Nintendo Switch em 27 de abril de 2018.'
    ]

    const BomberMan = [
        'Super Bomberman é um jogo da série Bomberman lançado para Super Famicom. É o primeiro jogo desta série a ser lançado para o console. '
    ]

    return(
        <div className='body' id='GamesBody'>
            <div id='AmongUs' className='game'>
                <img src={AmongUsA} alt='AmongUs Avatar' className='gameicon'/>
                {AmongUs[0]}
            </div><br/>
            <div id='Jotun' className='game'>
                <img src={JotunA} alt='AmongUs Avatar' className='gameicon'/>
                {Jotun[0]}
            </div><br/>
            <div id='BomberMan' className='game'>
                <img src={BomberManA} alt='AmongUs Avatar' className='gameicon'/>
                {BomberMan[0]}
            </div>
        </div>
    )
}