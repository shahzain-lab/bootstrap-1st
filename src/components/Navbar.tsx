import React from 'react';
import logo from '../img/logo.png';

export const NavBar =()=> {
  return(
   <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
     <div className="container-fluid">
       <img src={logo} alt="" />
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <a className="nav-link active" href="#">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Services</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Team</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Contact</a>
           </li>
         </ul>
       </div>
     </div>
   </nav>
  )
}

