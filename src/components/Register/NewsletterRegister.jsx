import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './NewsletterRegister.css'
import Footer from '../Footer/index'
import { Link } from 'react-router-dom'

const NewsletterRegister = () => {

    const[name,setName] = useState("");
    const[surname,setSurname] = useState("");
    const[email,setEmail]=useState("");

    const URL = 'https://sheet.best/api/sheets/4c7e9cb6-55e4-4073-9548-59f843c75e55'
    const URL2 = 'https://sheet.best/api/sheets/ace62a07-f4d4-4100-b17d-12a2e8cb45bd'

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,surname,email)
        const data = {
            Name:name,
            Surname:surname,
            Email:email
        }
        axios.post(URL2,data).then((response)=>{
            setName("")
            setSurname("")
            setEmail("")
        })
            alert("Data Submitted")
    }
  return (
    <div className='register-container'>
        <h1> Register For Our <span>Newsletter</span></h1>
        <p>Dont Miss Out!</p>
        <form className='register-form' onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="">Name:</label>
                <input 
                    type="text" 
                    placeholder='Your Name' 
                    required
                    onChange={(e)=>{setName(e.target.value)}}
                    value = {name}
                />
            </div>
            <br/>
            <div className="input-container">
                <label htmlFor="">Surname:</label>
                <input 
                    type="text" 
                    required 
                    placeholder='Your Last Name'
                    onChange={(e)=>{setSurname(e.target.value)}}
                    value = {surname}
                    />
            </div>
            <br/>
            <div className="input-container">
                <label htmlFor="">Email Address:</label>
                <input 
                    type="email" 
                    placeholder='example@email.com' 
                    required
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value = {email}
                    />
            </div>
            <br/>
            <div className="btn-submit">
                <button type="submit">SUBMIT</button>
            </div>
            {/* <div className="go-back-link">
                <a className='back' href='/'>GO BACK</a>
            </div> */}
            {/* <button type='' onClick={}></button> */}
            <form className='go-home' action="/">
                <input type="submit" value="Go Back" />
            </form>
        </form>
    </div>
  )
}

export default NewsletterRegister