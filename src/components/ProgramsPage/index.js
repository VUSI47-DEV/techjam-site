import React,{useEffect} from 'react'
import './style.css'
import { Row,Col } from 'react-bootstrap'

import IntoGaming from '../IntoGaming/IntoGaming'
import TechjamCareers from '../TechjamCareers/TechjamCareers'
import EsportEvents from '../EsportEvents/EsportEvents'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Programs = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
      <div className='programs-container'>
        <div className='bg-image'></div>
        <div className="intro-section">
          <h1 data-aos="fade-right">Our <span>Programs</span></h1>
          <p className='programs-paragraph' data-aos="fade-left">
            Techjam has a host of innovative programs and content designed to take your career to the next
            level. Tap into a vibrant community of creative professionals, gain access to training support and
            much, much more
          </p>
        </div>
      </div>
      <IntoGaming/>
      <TechjamCareers/>
      <EsportEvents/>
    </>
    
  )
}

export default Programs