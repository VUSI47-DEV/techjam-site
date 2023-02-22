import React, {useRef, useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'

import profile1 from '../../img/Testimonial-mages/profile-pic-1.png'
import profile2 from '../../img/Testimonial-mages/profile-pic-2.png'
import profile3 from '../../img/Testimonial-mages/profile-pic-3.png'
import profile4 from '../../img/Testimonial-mages/profile-pic-4.png'
// import profile2 from '../../img/images/profile2.jpg'
// import profile3 from '../../img/images/profile3.jpg'
// import profile4 from '../../img/images/profile4.jpg'
// import profile5 from '../../img/images/profile5.jpg'
// import profile6 from '../../img/images/profile6.jpg'
// import profile7 from '../../img/images/profile7.jpg'


const Testimonial = () => {
  return (
    <div className='testimonials'>

      <h1>Testimonials</h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper slide-container swiper"
        //   ***************************************
        
            // slidesPerView= {3}
            // spaceBetween= {25}
            // loop={true}
            // centerSlide={'true'}
            // fade={true}
            // grabCursor={true}
            // pagination = {{
            // clickable: true
            // //   dynamicBullets=  true,
            // }}
            
        
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



          


                <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                          <div className="image-content">
                              <span className="overlay"></span>

                              <div className="card-image">
                                  <img src={profile1} alt="" className="card-img"/>
                              </div>
                          </div>

                          <div className="card-content">
                              <h2 className="name">Lisa Maglas</h2>
                              <p className="description"> 
                                “I never thought I would learn game development, 
                                the programme has given me more insight on which career to embark on.”
                                </p>

                              {/* <button className="button">View More</button> */}
                          </div>

                        </div>
                    </div>
                </SwiperSlide>
                
                {/* // Slide 2 ********************************************************************************************* */}
                
                <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                        <div className="image-content">
                             <span className="overlay"></span>

                             <div className="card-image">
                                 <img src={profile2} alt="" className="card-img"/>
                             </div>
                         </div>

                         <div className="card-content">
                             <h2 className="name">Khomotso Mpharoane</h2>
                             <p className="description">“ Techjam is literally making tech and gaming more accessible”</p>
                             <br />

                             {/* <button className="button">View More</button> */}
                         </div>

                        </div>
                    </div>
                </SwiperSlide>

                     {/* slide 3 */}
                <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="card-image">
                                    <img src={profile3} alt="" className="card-img"/>
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">Kwandokuhle Shusha</h2>
                                <p className="description"> “Techjam events are beautiful, authentic, measurable experiences.”</p>
                                <br />

                                {/* <button className="button">View More</button> */}
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                        {/* slide 4 */}
    
                {/* <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                            <div className="image-content">
                                 <span className="overlay"></span>

                            <div className="card-image">
                                 <img src={profile4} alt="" className="card-img"/>
                             </div>
                            </div>

                         <div className="card-content">
                             <h2 className="name">David Dell</h2>
                             <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            </div>

                        </div>
                    </div>
                </SwiperSlide> */}


                {/* <div class="swiper-button-next swiper-navBtn"></div>
                <div class="swiper-button-prev swiper-navBtn"></div>
                <div class="swiper-pagination"></div> */}
        </Swiper>

    </div>
  )
}

export default Testimonial