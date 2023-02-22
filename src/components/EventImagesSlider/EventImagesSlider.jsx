// import React ,{Component,arrows} from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import './style.css'

// // const EventImagesSlider = () => {
// //   return (
// //     <div>
// //       EventImagesSlider
// //     </div>
// //   )
// // }

// // export default EventImagesSlider 

// export default class EventImagesSlider extends Component{

//   // constructor(props) {
//   //   super(props);
//   //   this.next = this.next.bind(this);
//   //   this.previous = this.previous.bind(this);
//   // }
//   // next() {
//   //   this.slider.slickNext();
//   // }
//   // previous() {
//   //   this.slider.slickPrev();
//   // }

//   render(){

//     const settings = {
//       dots: true,
//       arrows:true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };


//     return(
//       <div className='main-container'>
//         <h2>EVENT SLIDER</h2>
//         <Slider className='my-slider' {...settings}>
//           <div className="my-container">
//              <img src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"  />
//           </div>
//           <div className="my-container">
//              <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"  />
//           </div>
//           <div className="my-container">
//              <img src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"  />
//           </div>
//           <div className="my-container">
//              <img src="https://images.unsplash.com/photo-1580746783973-b09d4894bf44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  />
//           </div>
//           <div className="my-container">
//              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//           </div>
//           <div className="my-container">
//             <img src="https://images.unsplash.com/photo-1544631008-534b4b6c1215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
//           </div>
//         </Slider>
// {/*         
//         <div style={{ textAlign: "center" }}>
//           <button className="button" onClick={this.previous}>
//             Previous
//           </button>
//           <button className="button" onClick={this.next}>
//             Next
//           </button>
//         </div> */}
//         <button>PREV</button>
//         <button>NEXT</button>
//       </div>
//     )
//   }
// }


import React, {useRef, useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'

import event1 from '../../event-images-files/event-one/eventOneImages';
import event2 from '../../event-images-files/event-two/eventTwoImages';
import event3 from '../../event-images-files/event-three/eventThreeImages';
import event4 from '../../event-images-files/event-four/eventFourImages';

 const EventImagesSlider = (props) => {
  return (
    <div className='s-container'>
      <div className='slides-container'>
        <h4>Event 1:</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Rem, fugit doloremque blanditiis cum voluptates voluptate quos, harum 
          quo eum ex reprehenderit totam minus odio eligendi illo accusamus sunt magnam a!
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
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
            event1.map((item)=>{
              return(
                <SwiperSlide className='my-slide'>
                  <img className='slider-img' src= {item.image} />
                </SwiperSlide>
              )
            })
          }
         
        </Swiper>
        
      </div>
      {/* ********************************Event 2 ****************************************** */}
      <div className='slides-container'>
        <h4>Event 2:</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Rem, fugit doloremque blanditiis cum voluptates voluptate quos, harum 
          quo eum ex reprehenderit totam minus odio eligendi illo accusamus sunt magnam a!
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
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
            event2.map((item)=>{
              return(
                <SwiperSlide className='my-slide'>
                  <img className='slider-img' src= {item.image} />
                </SwiperSlide>
              )
            })
          }
         
        </Swiper>
        
      </div>
        {/* ********************************Event 3 ****************************************** */}
        <div className='slides-container'>
        <h4>Event 3:</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Rem, fugit doloremque blanditiis cum voluptates voluptate quos, harum 
          quo eum ex reprehenderit totam minus odio eligendi illo accusamus sunt magnam a!
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
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
            event3.map((item)=>{
              return(
                <SwiperSlide className='my-slide'>
                  <img className='slider-img' src= {item.image} />
                </SwiperSlide>
              )
            })
          }
         
        </Swiper>
        
      </div>
        {/* ********************************Event 4 ****************************************** */}
        
        {/* ********************************Event 5 ****************************************** */}
    </div>
  )

}
export default EventImagesSlider
