import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
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
            <h1 data-aos="fade-down">TechJam <span style={{color:"#ff2121"}}>NXT-LEVEL</span></h1>
            <p data-aos="fade-up">
                Early career technology-oriented individuals have the opportunity to learn and talk to a
                number of our partners about their graduate opportunities. Workshops and interactive
                sessions will provide you with firsthand insight into how you can enter the tech industry
                (partner with brands to offer learnership).
            </p>

            {
                showInfo ?
                <>
                    <div className='more-info'>
                        <p className='nxt-level-p'>
                            <span>The NXTlevel</span>is the latest evolution of TechJam's leading career events for students,
                            professionals, and tech companies. The festival is aimed at inspiring people from all
                            backgrounds to explore careers in Africa's fastest-growing industry. Young people in
                            Africa will be able to explore careers in the technology sector through this festival, which
                            will connect education and industry.
                            Here's what you can expect:
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
                <button className='btn-notify'><Link to="/register">Notify Me</Link></button>
                <button className='btn-info' onClick={handleInfo}> {showInfo ? "Show Less" : "More Info..."}</button>
            </div>
            
        </div>
        </div>
       
    </div>
  )
}

export default TechjamCareers