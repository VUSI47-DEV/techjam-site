import React from 'react'
import heroImage from '../../img/pexels-nathan-b-caldeira-6125330.jpg'
import imageThree from '../../img/img-three.jpg';

import "./style.css";
import { Link } from 'react-router-dom';

const TechHero = () => {
  return (
    <div>
        <div className="container-fluid my-hero">
             
               <h1 className='hero-text animated fadeInLeftBig'>POP-UP GAMING AND TECH EVENTS!</h1>
               <div className='vid-container'>
                  <img className='h-i' src={imageThree} alt="" srcset="" />
                  <button className='hero-cta animated fadeInRightBig'><Link to='/register'> <p className='sign-up-cta'>Register Now</p></Link></button>
               </div>
        </div>
    </div>
  )
}

export default TechHero