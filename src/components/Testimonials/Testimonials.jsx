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
import profile4 from '../../img/Testimonial-mages/profile-pic-4.jpg'
import profile5 from '../../img/Testimonial-mages/profile-pic-5.jpg'
import profile6 from '../../img/Testimonial-mages/profile-pic-6.jpg'
// import profile6 from '../../img/Testimonial-mages/profile-pic-6.png'
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
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                             <br/>


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
                             <p className="description">“ Techjam is literally making tech and gaming more accessible. I really learned a lot and would recommend others to also attend, I had a great time.”</p>
                            <br />
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

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
                                <p className="description"> “Techjam events are beautiful, authentic, measurable experiences. It was really amazing learning about game development this way.”</p>
                                <br />
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                {/* <button className="button">View More</button> */}
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                        {/* slide 4 */}
    
                <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                            <div className="image-content">
                                 <span className="overlay"></span>

                            <div className="card-image">
                                 <img src={profile4} alt="" className="card-img"/>
                             </div>
                            </div>

                         <div className="card-content">
                             <h2 className="name">Amogelang Botlala</h2>
                             <p className="description">
                             "What really enjoyed today about todays masterclass was the introduction to game development, and it influenced me in way that I now know that  I want to do game development. And the masterclass was amazing, honestly"
                             </p>
                             <br/>
                            <br/>
                            <br/>
                            <br/>
                            </div>

                        </div>
                    </div>
                </SwiperSlide> 
                      {/* slide 5 */}
    
                      <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                            <div className="image-content">
                                 <span className="overlay"></span>

                            <div className="card-image">
                                 <img src={profile5} alt="" className="card-img"/>
                             </div>
                            </div>

                         <div className="card-content">
                             <h2 className="name">Kara Reddy</h2>
                             <p className="description">
                                "I'm Kara Reddy. And I attended the Tech Gem master class today. And one of the main things
                                 that I learned was coding isn't that hard to get into, and it helps especially when there's 
                                 someone learning and going through the same struggles right next to you. 
                                 And yeah, I just hope more people will come and attend these classes and 
                                 just have more fun with the  community."

                            </p>

                            </div>

                        </div>
                    </div>
                </SwiperSlide> 
                  {/* slide 6 */}
    
                  <SwiperSlide className='slide-container swiper'>
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">

                            <div className="image-content">
                                 <span className="overlay"></span>

                            <div className="card-image">
                                 <img src={profile6} alt="" className="card-img"/>
                             </div>
                            </div>

                         <div className="card-content">
                             <h2 className="name">Kgomotso</h2>
                             <p className="description">
                                 "Just attended the gaming masterclass. It was eyeopening, and I think it's what I needed to basically get me going. I've always had a mental block, needed something to get me started, and I think this was perfect. "                                
                             </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            </div>

                        </div>
                    </div>
                </SwiperSlide> 



                {/* <div class="swiper-button-next swiper-navBtn"></div>
                <div class="swiper-button-prev swiper-navBtn"></div>
                <div class="swiper-pagination"></div> */}
        </Swiper>

    </div>
  )
}

export default Testimonial