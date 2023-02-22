import React from 'react'
import InfiniteLooper from '../InfiniteLooper/InfiniteLooper'

import './style.css'

const HomeVideo = () => {
  return (
    <div className='video-container'>
        <h1 className='video-heading'><span>Techjam</span> Is Designed To :</h1>
         <InfiniteLooper speed="12" direction="right">
               <h2 className='vid-heading' > ~ INFORM ~ </h2>
               <h2 className='vid-heading' style={{color:'#fff'}}> ~ ENTERTAIN ~ </h2>
               <h2 className='vid-heading' > ~ AND ~ </h2>
               <h2 className='vid-heading' style={{color:'#fff'}}> ~ EDUCATE ~ </h2>
 
         </InfiniteLooper>
        
         <iframe
                  className="modal__video-style video animated bounceInDown "
                //   onLoad={spinner}
                  loading="lazy"
                  width="1180"
                  height="500"
                  src="https://www.youtube.com/embed/_uQ8mLyT3oA"
                  // https://www.youtube.com/watch?v=OsRLoRrpSfA
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
    </div>
  )
}

export default HomeVideo