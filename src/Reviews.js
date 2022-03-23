import React,{useState} from 'react'
import './Reviews.css'
import review_icon from './images/add-review-icon.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import useMediaQuery from "./hooks/useMediaQuery";

import Modal from './Modal.js'

import mobile_add_review from './images/mobile-add-review.png';

export default function Reviews(){
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true);
        
    }
    const closeModal = () => setShow(false);
    const isDesktop = useMediaQuery('(min-width: 860px)');

    return(
        <div>
            <div class="reviews ">
            <h1 class="font-face-gm review">Отзывы</h1>

 
  
  { isDesktop ? !show && <button onClick={openModal} class="add-review-button" id="blur"><p class="panel-text"> <img class="review-icon" src={review_icon}></img> Добавить отзыв</p></button> :
  
  !show && <button onClick={openModal} class="add-review-mobile-button" id="blur"><img class="mobile-add-review-button" src={mobile_add_review}></img></button> 
  } 
  {/* {!show && <button onClick={openModal}>Show modal</button>} */}
  <Modal closeModal={closeModal} show={show} />
</div>


        </div>
    )
}