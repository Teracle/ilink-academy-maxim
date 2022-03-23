import React, {useState} from "react";
import './Modal.css';

import moderation from './images/moderation-reviews-icon.png';

import add_image_icon from './images/add-image-icon.png';

import close_modal from './images/close-modal-icon.png';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Modal(props) {
  const { show, closeModal } = props;

  const [name,setName]=useState("");
  const [rate,setRate]=useState("");
  const [file,setFile]=useState("Не добавлено");
  

  const notifySuccess = ()=>{
 
    // Calling toast method by passing string
    toast.success(`Успешно!
    
    Спасибо за отзыв о нашей
    компании :)`
    
    ,
    {position: toast.POSITION.BOTTOM_RIGHT})
}

const notifyError=()=>{
  toast.error(`Что-то не так...
  
  Не получилось отправить отзывю
  Попробуйте еще раз!`,
    {position: toast.POSITION.BOTTOM_RIGHT});
}



  const handleFile=e=>{
    setFile(e.target.files[0].name);
  }

  const handleName=e=>{
    setName(e.target.value);
  }

  const handleRate=e=>{

    setRate(e.target.value);
  }

  const printResult=()=>{

    if(name && rate){

   console.log(`Имя: ${name}
  
Отзыв: ${rate}

Фото: ${file}`
)

setName('');
setRate('');
notifySuccess();
    }
  
  else {
    console.log('Пожалуйста заполните поля имя и отзыв.');
    notifyError();
    }
  
  }

  

  return (
    <>
    <div class='modal-window'>
    <div className={show ? "modal" : "hide"}>
        <button class="modal-close" onClick={closeModal}><img class="close_modal" src={close_modal}></img></button>
        <p class='write-review '>Отзыв</p>
        <p class="yourName">Как вас зовут?</p>
        <input pattern="[а-яА-Яa-zA-Z]{3,}" title="Пожалуйста, напишите свое имя" onChange={handleName} value={name}  name="name"   type="text" placeholder="Имя Фамилия"></input>
        
        <input type="file" onChange={handleFile} ></input>
        <button class='add-image-button' > <span class="add-image-icon"><img src={add_image_icon}></img></span> <span class='add-image-text font-face-gm'>Загрузить фото</span></button>
        
        <p class="rate">Все ли вам понравилось?</p>
        <input onChange={handleRate} name="review" title="Пожалуйста, напишите ваш отзыв" class="textarea" value={rate} required  type="textarea" placeholder="Напишите пару слов о вашем опыте..." maxLength={200}></input>
        <button type="submit"  onClick={printResult} class='send-review-button' ><span class="add-image-icon"></span> <span class='add-review-text font-face-gm'>Отправить отзыв</span></button>
        <div> <img class="moderation" src={moderation}></img> <span class="moderation-review-text">Все отзывы проходят модерацию в течение 2 часов</span> </div>

        
        </div>
        </div>
    </>
  );
}

export default Modal;