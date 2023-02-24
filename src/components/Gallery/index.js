import React,{useState,useEffect} from 'react'
import Footer from '../Footer'
// import data from '../../Data/Data.json'
import newData from './data.json'
import EventImage from './EventImage'

import event1 from '../../event-images-files/event-one/eventOneImages'
import event2 from '../../event-images-files/event-two/eventTwoImages'
import event3 from '../../event-images-files/event-three/eventThreeImages'
import event4 from '../../event-images-files/event-four/eventFourImages'

import './style.css'

const Gallery = () => {
  const [roadShow1,setRoadShow1] = useState(false);
  const [roadShow2,setRoadShow2] = useState(false);
  const [festival,setFestival] = useState(false);
  const [esport,setEsport] = useState(false);
  // state for the event heading & description
  const [eventName,setEventName]=useState("") 
  // const [description,setDescription]=useState("") 
 
  const handleRoadshowOne = () =>{
    setRoadShow1(true)
    setRoadShow2(false)
    setFestival(false)
    setEsport(false)
    setEventName("Into Gaming Roadshow-EC(Makhanda)")
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor") 
}
const handleRoadshowTwo = () =>{
    setRoadShow2(true)
    setRoadShow1(false)
    setFestival(false)
    setEsport(false)
    setEventName("Into Gaming Roadshow-EC(Qonce)")
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ")
}
const handleFestival = () =>{
    setFestival(true)
    setRoadShow1(false)
    setRoadShow2(false)
    setEsport(false)
    setEventName(" Basha Uhuru Festival- Animation & Gaming Masterclass ")
    // setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ")


}
const handleEsport = () =>{
  setEsport(true)
  setFestival(false)
  setRoadShow1(false)
  setRoadShow2(false)
  setEventName("2022 F1 Esports Event")
  // setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor")

}
const handleAll = () =>{
    setRoadShow1(true)
    setFestival(true)
    setRoadShow2(true)
    setEsport(true)
    setEventName("ALL")
    // setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor")

}

// style for button when 'active'
const allStyle ={
    backgroundColor:"#cb1a1a",
    borderColor:"#08213A",
    color:"#fff"

}

const style = {
    backgroundColor:"#ff2121",
    color:"#fff"
}

  useEffect(()=>{
    handleAll();
  },[])


  return (
    <>
      <div className="container-fluid">
          <div className="g-btns">
            <button className='gallery-btn' style={{allStyle}} onClick={()=>{handleAll()}}>All</button>
            <button className='gallery-btn' style={{...roadShow1 ? style :""}} onClick={()=>{handleRoadshowOne()}}>Into Gaming Roadshow-EC(Makhanda)</button>
            <button className='gallery-btn' style={{...roadShow2 ? style :""}} onClick={()=>{handleRoadshowTwo()}}>Into Gaming Roadshow-EC(Qonce)</button>
            <button className='gallery-btn' style={{...festival ? style :""}} onClick={()=>{handleFestival()}}>Animation & Gaming Masterclass</button>
            <button className='gallery-btn' style={{...esport ? style :""}} onClick={()=>{handleEsport()}}>F1 E-Sport</button>
          </div>

          <div className='gallery-text'>
            <h1>{eventName}</h1>
            <p>{description}</p>
          </div>

        <div className='gallery-container' >
            {
              roadShow1 && event1.map((event)=>{
                return(
                <>
                  <EventImage image={event} data-aos="fade-down"/>
                </>
                )
              })
            }
            {
              roadShow2 && event2.map((event)=>{
                return(
                <>
                  <EventImage image={event} />
                </>
                )
              })
            }
            {
              festival && event3.map((event)=>{
                return(
                <>
                  <EventImage image={event} />
                </>
                )
              })
            }
            {
              esport && event4.map((event)=>{
                return(
                <>
                  <EventImage image={event} />
                </>
                )
              })
            }
        </div>
      </div>
      
      <Footer/>

    </>
  )
}

export default Gallery