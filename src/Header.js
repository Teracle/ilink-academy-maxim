
import './Header.css';
import mypic from './images/myPic.jpg';
import logo from './images/main-logo.png'
import useMediaQuery from "./hooks/useMediaQuery"
import button from './images/button1.png';
import './fonts/Gilroy-ExtraBold.otf';

function Header() {
  const noInfo=()=>{
    alert('Здесь пока ничего нет...');
  }
  const isDesktop = useMediaQuery('(min-width: 860px)');

  return (
    <body>

      <div class="container">
    <div class="header">

      <ul>
        
        <li>
          <img class="mypic" src={mypic}></img>

         {isDesktop?  <span class="name .font-face-gm">Максим Носов</span>:<span class="name">Максим</span>   }
        
        </li>
        
        <a href='http://localhost:3000'>
      <li class="ilink">
      
      <img class="main-logo" src={logo}></img>
      </li>
      </a>


    <li>
     
      {isDesktop ? 
      
      <a href="#"><button onClick={noInfo} class="panel"><p class="panel-text">Панель управления</p></button> </a>
    :  
    <a href="#">
    <img  class="mobile-button" src={button}></img>
    </a>
    }
 
    </li>
      </ul>

    </div> 

    

    
    </div>


    </body>
  )
}

export default Header;
