import React from 'react';

//Clips
import Clip1 from '../../../video/CRACKUDO.mp4'
import Clip2 from '../../../video/TomouUmSusto.mp4'

export default function Body(){
    return(
        <div className='body' id='ClipsBody'>
            <br/>
            <iframe src={Clip1} allowfullscreen="true" scrolling="no" height="378" width="620" className='clip' onPause></iframe>
            <br/>
            <iframe src={Clip2} allowfullscreen="true" scrolling="no" height="378" width="620" stop className='clip'></iframe>
        </div>
    )
}