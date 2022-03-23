import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewImage from './images/review1-image.png'

import {AiOutlineArrowRight} from 'react-icons/ai';

import image_nopic from './images/review-image-nopic.png';

import imageReview3 from './images/image-review3.png';

import imageReview4 from './images/image-review4.png';

import nextArrow from './images/nextArrow.png';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };


  return (
      <div class="slider">
    <Slider {...settings}>
      <div className="profile-review">
          
          <img class="img-main" src={reviewImage}></img>
          <p class="review-name font-face-gm">Буба Бубенцов</p>
          <p class="font-face-gm date-of-review">08.01.2022</p>
          <p class='text-review font-face-gm'>Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</p>

        
      </div>
      <div className="profile-review">
      <img class="img-main" src={image_nopic}></img>
      <p class="review-name font-face-gm move">Илья Анташкевич</p>
          <p class="font-face-gm date-of-review">08.01.2022</p>
          <p class='text-review font-face-gm'>Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.</p>

      </div>
      <div className="profile-review">

      <img class="img-main" src={imageReview3}></img>
      <p class="review-name font-face-gm move">Юрина Маргарита</p>
          <p class="font-face-gm date-of-review">26.12.2021</p>
          <p class='text-review font-face-gm'>Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.</p>


      </div>

      <div className="profile-review">
      <img class="img-main" src={imageReview4}></img>
      <p class="review-name font-face-gm move">Дмитрий Иванов</p>
          <p class="font-face-gm date-of-review">16.12.2021</p>
          <p class='text-review font-face-gm'>Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.</p>

      </div>
      
    </Slider>

    </div>
  );
}