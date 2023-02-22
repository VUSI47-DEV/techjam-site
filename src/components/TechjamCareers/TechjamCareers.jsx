import React, {useState,useEffect} from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TechjamCareers = () => {
 
    const[showInfo,setShowInfo] = useState(false)
    
    const handleInfo = () =>{
        setShowInfo(!showInfo);
    }

    useEffect(()=>{
        Aos.init({duration:2000})
    })
 
    return (
    <div className='careers-container'>
        <div className="bg-careers">
        <div className="careers-content">
            <h1 data-aos="fade-down">Techjam <span style={{color:"#ff2121"}}>NXT-LEVEL</span></h1>
            <p data-aos="fade-up">
                Early Career starters interested in technology. Learn about career
                opportunities, and talk to many of the partners about their graduate opportunities.
                With workshops and interactive sessions, you'll hear firsthand from industry leaders,
                engineers and entrepreneurs about how you can join the tech industry and what it takes
                to succeed. ( partner with brands to give out a learnership)
            </p>

            {
                showInfo ?
                <>
                    <div className='more-info'>
                        <p className='nxt-level-p'>
                            <span>TechJam NXTlevel</span> is the latest evolution of our leading series of careers events for students,
                            professionals and tech companies. A festival to inspire people from every background to discover careers
                            in Africa's fastest growing industry to a more diverse section of the public connecting the dots between
                            education and industry, making a career in the tech sector more accessible to young people in Africa.
                            What you'll experience:
                        </p>
                        <ul className='more-info-list'>
                            <li>● Career and networking opportunities</li>
                            <li>● Exclusive giveaways and job opportunities</li>
                            <li>● Inspirational tech leaders sharing their journeys</li>
                        </ul>

                    </div>
                </>
                :
                <></>
            }
            <div className="career-btns" data-aos="zoom-in">
                <button className='btn-notify'><a href="/register">Register</a></button>
                <button className='btn-info' onClick={handleInfo}> {showInfo ? "Show Less" : "More Info..."}</button>
            </div>
            
        </div>
        </div>
       
    </div>
  )
}

export default TechjamCareers