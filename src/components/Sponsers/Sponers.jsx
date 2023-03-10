import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import sponserImages from '../../SponserImages/sponserImages';

import './style.css'

const Sponers = () => {
  return (
    <div className='sponser-container'>
        <h1 className='sponser-heading'>Our <span>Sponsors</span></h1>
        <Swiper
         slidesPerView={3}
         spaceBetween={30}
         slidesPerGroup={1}
         loop={true}
         centeredSlides={true}
        //  loopFillGroupWithBlank={true}
        //  pagination={{
        //    clickable: true,
        //    dynamicBullets: true
        //  }}
         navigation={true}
         modules={[Pagination, Navigation]}
          className="mySwiper"

          breakpoints={{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        }}
        >
          {
            sponserImages.map((item)=>{
              return(
                <>
                    <SwiperSlide className='my-sponser-slide'>
                        <div className="sponser-images">
                          <img className='slide-img' src= {item.image}/>
                        </div>
                    </SwiperSlide>
                </>
                
              )
            })
          }
        </Swiper>
    </div>
  )
}

export default Sponers