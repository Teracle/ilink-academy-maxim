import React from 'react'
import './Main.css'
import background from './images/back-image1.png';
import mypic from './images/myPic.jpg';
import {GiMale} from 'react-icons/gi';
import {FcSportsMode} from 'react-icons/fc'
import {BiFace} from 'react-icons/bi'
import maleIcon from './images/male-icon.png'


export default function Main(){
return(
    <div>
        <img class="background-image" src={background}></img>
         
         <h1 className='welcome font-face-gm'>Добро пожаловать<br/> в академию!</h1>
        <img class="mypic-main" src={mypic}></img>

        <div class="card-about-me">
            
            <div class="basic-info">
            <h2 class="myName font-face-gm"> Максим Носов  </h2>
            <p class="date-of-birth">16.04.2002 </p>
            <p class="about-me"><span class="font-face-gilroy">Город:</span> Томск</p>
            <p class="male"><span class="font-face-gilroy">Пол:</span> мужчина <img src={maleIcon}></img></p>
            <p class="age"><span class="font-face-gilroy">Возраст:</span> 19 </p>
            </div>
            <p class="info-about-me"><span class="font-face-gilroy">О себе:</span> Привет! Меня зовут Максим, учусь на программиста в Канадском коллежде удаленно(4 курс). Изучали многие языки, но всего понемного. Сейчас понимаю, что хочу заниматься именно веб разработкой. На Frontend изучали HTML/CSS/Bootstrap/Javascript, jQuery, немного React и Angular. На Backend NodeJS, Express с использованием баз данных MongoDB и PostgreSQL.<br/><br/> <FcSportsMode/> В свободное время занимаюсь спортом, хожу в зал. Вредных привычек не имею :) </p>
            
        </div>
    </div>
)

}
