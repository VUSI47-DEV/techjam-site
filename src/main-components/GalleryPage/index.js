import React from 'react'
// import EventImagesSlider from '../../components/EventImagesSlider/EventImagesSlider'
import Gallery from '../../components/Gallery'
import Header from '../../components/Header'
import './style.css'

const GalleryPage = () => {
  return (
    <div>
        <Header/>
        <div className='gallery-page'>
          <Gallery/>        
        </div>
      
    </div>
  )
}

export default GalleryPage