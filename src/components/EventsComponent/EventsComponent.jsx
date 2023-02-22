import React from 'react'
import InfiniteLooper from '../InfiniteLooper/InfiniteLooper'

import './style.css'

const EventsComponent = () => {
  return (
    <div className='main'>
        <div className='events'>
           <h4>Events</h4>
        </div>
        <div id='rssBlock'>
            <p class="cnnContents">
                <span class="marqueeStyle">&nbsp;24 Jan Gaming | 1 Feb Dodfdf | 8 Mar Holocoust</span>
                <span class="marqueeStyle2">&nbsp;20 Jun Still | 11 Feb BDAY  | 10 Aug Gigabits</span>
                {/* <!-- duplicate above, change style to allow continous scroll --> */}
            </p>
        </div>

            {/* <h6 className='animated fadeInRightBig'>24 Jan Gaming | 1 Feb Dodfdf | 8 Mar Holocoust | 12 Aug JHB function | 30 Dec Christmas Gaming</h6> */}
    </div>
  )
}

export default EventsComponent