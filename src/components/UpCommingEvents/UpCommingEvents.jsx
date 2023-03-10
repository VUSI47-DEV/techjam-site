import React from 'react'
import InfiniteLooper from '../InfiniteLooper/InfiniteLooper'
import './style.css'
const UpCommingEvents = () => {
  return (
    <div className='events-container'>
        <h1>Up Comming <span>Events</span></h1>
        <InfiniteLooper speed="100" direction="right" className='looper'>
            <ul>
               {/* <li className='event'> 25 February 2023 - INTO GAMING (GAME DEV DAY- JHB)</li> */}
               <li className='event'> One day Game development workshop to understand how games are built and designed </li>
               <li className='event'> 05 March 2023 - Bahrain F1 Esport Event </li>
               <li className='event'> 21 March 2023 - Our NXTLevel Program Series will kick off, this event will be hosted at a tech company </li>
               <li className='event'> 30 April 2023 - Esport Event </li>
               <li className='event'> 25 - 30 June 2023 - Into Gaming Limpopo </li>
               <li className='event'> August 2023 -  Into Gaming  (Girls In Gaming) -  (TBC) </li>
               <li className='event'> 03 September 2023 - Esport Event</li>
               <li className='event'> OCT - TECH TALKS AFRICA ( TBC ) </li>
               <li className='event'> 05 November 2023 - Esport Event </li>
               <li className='event'> 26 November 2023 - Esport Event  </li>
            </ul>
               
         </InfiniteLooper>

         <button className='btn-sign-up'><a href="/register">Register Now</a></button>
    </div>
  )
}

export default UpCommingEvents