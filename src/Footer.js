import React from 'react';
import './Footer.css'

import social from './images/social-links.png';

export default function Footer(){
    return(
        <>
        <div className='footer'>

            <ul>
        <li class="rights font-face-gm">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</li>
        
        <li class="rights image-link">  <img class="social" src={social}></img> </li>
        
        </ul>
        </div>

</>
    )
}