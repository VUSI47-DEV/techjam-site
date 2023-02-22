import React,{ useEffect, useState } from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css' 


import './style.css'

const IntoGaming = () => {
    
    const[showInfo,setShowInfo] = useState(false)
    
    const handleInfo = () =>{
        setShowInfo(!showInfo);
    }

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
    <div>
        <div className="into-gaming-container">
            <div className="bg-into-gaming">
            <div className="into-gaming-text">
                <h2 className='into-gaming-heading ' data-aos="fade-down">
                    Into <span>Gaming </span>Roadshow
                </h2>
                <p className='into-gaming-paragraph' data-aos="fade-up">
                    This is a highly engaging roadshow that showcases the
                    numerous career opportunities within the video game industry. From the evolution of a
                    game concept into the detailed designs that map out the way a game will play, going into
                    the production process of making games.
                </p>
                <p data-aos="fade-in">We might be coming to your hometown soon...</p>
                <div className="into-gaming-btns" data-aos="zoom-in">
                    <button className='btn-notify'><a href="/register">Notify Me</a></button>
                    <button className='btn-info' onClick={handleInfo}>
                        {showInfo ? "Show Less" : "More Info..."}
                    </button>
                </div>

                {
                    showInfo ?
                    <div className='more-info-roadshow'>
                        <div className='line'></div>
                        <p>
                            <span>Techjam</span> aims to spark youth people’s interest in working in this ever-growing industry. It is a
                            long-term vision for the industry as with art being canceled at school it poses a real crisis for the
                            fields of animation and gaming. With the rise of the creative industry in recent years and the
                            Fourth Industrial Revolution at our doorsteps, arts education is vital to teach the future skills
                            required for the jobs of the future. We do this through a comprehensive program of events,
                            activities and resources. Games is our fastest growing entertainment industry, the industry
                            needs a wide range of skills, ranging from art to programming. Starting with programs in Rural
                            Areas and Townships in the Eastern Cape, Limpopo and Mpumalanga, the idea is to provide
                            them with access and ongoing mentorship of interactive digital content within the fields of
                            gaming and animation. Our goal is to inspire the next generation of designers, creators, and
                            engineers.
                        </p>
                        <div className='roadshow-video-container'>
                            <iframe
                                className="roadshow-video modal__video-style"
                                loading="lazy"
                                width="1100"
                                height="600"
                                src="https://www.youtube.com/embed/V6nhQCgeYUE"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div> 
                    
                    : <></>
                }
                
                
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default IntoGaming