import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
 import { Context } from '../../context/Context' 
import axios from 'axios'
import './login.css'
function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
     const{dispatch,isFetching}= useContext(Context) 
    const handleSubmit=async(e)=>{
e.preventDefault()
  dispatch({type:"LOGIN_START"})
try {
    const res =await axios.post('/auth/login',{email:emailRef.current.value,password:passwordRef.current.value})
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  
} catch (error) {
    dispatch({type:"LOGIN_FAILURE"})
}  
    }
      //console.log("USER",user)
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
           <form  className="loginForm" onSubmit={handleSubmit}>
               <label >Email</label>
               <input className="loginInput" type="email" placeholder="Enter your email..."ref={emailRef} />
               <label >Password</label>
               <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
               <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
              
           </form> 
           <button className="loginRegisterButton"><Link  className="link" to="/register">Register </Link></button>
        </div>
    )
}

export default Login
