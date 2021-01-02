import React from 'react';
import background from '../img/background.png';
import background2 from '../img/background2.png';
import background3 from '../img/background3.png';

export const Carousel =()=> {
  return(
    <div id="slides" className="carousel slide" data-ride="carousel">
       <ul className="carousel-indicators">
         <li data-target="#slides" data-slide-to="0" className="active"></li>
         <li data-target="#slides" data-slide-to="1"></li>
         <li data-target="#slides" data-slide-to="2"></li>
       </ul>
       <div className="carousel-inner">
         <div className="carousel-item">
           <img 
             src={background}
             alt=''
           />
           <img 
             src={background2}
             alt=''
           />
           <img 
             src={background3}
             alt=''
           />
         </div>
       </div>
    </div>
  )
}