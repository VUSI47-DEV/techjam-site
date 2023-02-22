import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import axios from "axios";

import "./style.css";

function Register(props) {

// MY IMPORTED CODE
const [values,setValues] = useState({
  firstName:"",
  lastName:"",
  email:"",
  // birthday:"",
  // password:"",
  // confirmPassword:"",
});

// map through this:
const inputs = [
  {
    id:1,
    name:"firstName",
    type:"text",
    placeholder:"First Name",
    label:"Firstname",
    errorMessage:"Username should be 3-16 characters and should not include speacial characters",
    required :true,
    // pattern:"^[A-Za-z0-9]{3,16}$",
  },
  {
    id:2,
    name:"lastName",
    type:"text",
    placeholder:"Last Name",
    // errorMessage:"",
    label:"Last Name",
    required :true
  },
  {
    id:3,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    required :true
    
  },
  // {
  //   id:4,
  //   name:"birthday",
  //   type:"date",
  //   placeholder:"Birthday",
  //   label:"Birthday",
  // },
  // {
  //   id:5,
  //   name:"password",
  //   type:"password",
  //   placeholder:"Password",
  //   errorMessage:"Passsword should be 8 - 20 characters and include at least 1 letter, 1 number and 1 special character",
  //   label:"Password",
  //   pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
  //   required :true,

  // },
  // {
  //   id:6,
  //   name:"confirmPassword",
  //   type:"password",
  //   placeholder:"Confirm Password",
  //   errorMessage:"Passwords don't match!",
  //   label:"Confirm Password",
  //   required :true,
  //   pattern: values.password,
  
  // },
 
]

const handleSubmit = (e) =>{
  e.preventDefault();
  axios.post('https://sheet.best/api/sheets/7b47503e-6fca-42b1-9666-c3c1f9651008',values).then((res) =>{
    console.log(res)
  })
}

const onChange = (e)=>{
  setValues({...values, [e.target.name]: e.target.value})
}

const holder = values.name
console.log(holder)

// Connecting Spreadsheet

  // const scriptURL = 'https://script.google.com/macros/s/AKfycby4biq3DaAjODfJ7lwoSGvOmLZ5AZXCOiR8g_d4ZdD5QA98ALnT7Acxd1v7iRtKI41uCA/exec'
  // const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })


  return (
    <div className="register-container">

      <form onSubmit={handleSubmit} className="register-form" name="submit-to-google-sheet">
                <h1>Register</h1>
                  {
                    inputs.map((input)=>{
                      return(
                        <FormInput
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}   
                        />
                      )
                      
                    })
                  }

                <button>Submit</button>
              </form>




















      {/* <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <h3>Create Account</h3>
                  <form>
                    <div className="form-row">
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="form-row">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="form-row">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-row">
                      <div className="custom-checkbox">
                        <input
                          id="terms"
                          type="checkbox"
                          name="terms"
                          defaultChecked="checked"
                        />
                        <label htmlFor="terms">
                          I agree to the{" "}
                          <Link to="/" onClick={onClick}>
                            Privacy Policy
                          </Link>
                        </label>
                        <span className="checkbox" />
                      </div>
                    </div>
                    <div className="form-row" />
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Create your Account!
                      </button>
                    </div>
                  </form>
                  <div className="socials-wrapper">
                    <p>Signup with your Social Account</p>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick} className="facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitch">
                          <FaTwitch />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

    </div>
  );
}

export default Register;
