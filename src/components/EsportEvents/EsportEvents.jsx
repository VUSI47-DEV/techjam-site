import React,{ useState, useEffect } from 'react'
import './style.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const EsportEvents = () => {
  
  const[showInfo,setShowInfo] = useState(false)
  const[btnText,setBtnText] = useState("More Info...")  
  const handleInfo = () =>{
      setShowInfo(!showInfo);
     setBtnText("show less")
  }

  useEffect(()=>{
    Aos.init({duration:2000})
  })
  
  return (
    <div className='esport-container'>
        <div className="bg-esport">
            <div className="esport-content">
                <h1 data-aos="fade-down">Esport <span>Events</span></h1>
                <p data-aos="fade-up">
                    Techjam is known for innovating what gaming events look like. We're not
                    shy of breaking the mold and leaving everyone buzzing when we've left the building
                </p>
            </div>
           
            {
              showInfo ?
              <div className='more-info'>
                <p>
                  Africa’s leading esports platform taking the continent to dominance in the competitive video-gaming
                  industry. We are committed to building bridges that connect players with tournament organizers while
                  elevating the finest African esports stars.
                </p>
                <p>
                  <span>Techjam League</span> - Current tournaments are focused on top players, leaving a great opportunity for
                  brands to make eSports a more mainstream popular sport, with family and friends cheering the young
                  players. 
                </p>
                <p>
                  Participate in the league series featuring various competitions for different games. And the best - you
                  can win yourselves a lot of money!
                </p>
              </div>
              :
              <></>

            }
           <div className="esport-btns" data-aos="zoom-in">
              <button className='btn-notify'><a href="/register">Register</a></button>
              <button className='btn-info' onClick={handleInfo}>
                {showInfo ? "Show Less" : "More Info..."}
              </button>
            </div>
        </div>
    </div>
  )
} 
 
export default EsportEvents 