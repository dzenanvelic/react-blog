import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './register.css'
function Register() {
    const [username,setUserName]= useState('')
    const [password,setPassword]= useState('')
    const [email,setEmail]= useState('')
    const [error,setError]= useState(false)
    const handleSubmit=async(e)=>{
e.preventDefault()
setError(false)
const user ={
    username:username,
    password:password,
    email:email
     }
     try {
        
      const res = await axios.post('/auth/register',user)

      res.data && window.location.replace('/login')
      
     } catch (error) {
         setError(true)
        console.log("REGISTER USER ERROR",error) 
     }
   
     
  


    }
  return (
        <div className="register">
            <span className="registerTitle">Register</span>
           <form  className="registerForm" onSubmit={handleSubmit}>
               <label >Username</label>
               <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e)=>setUserName(e.target.value)}/>
               <label >Email</label>
               <input className="registerInput" type="email" placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)}/>
               <label >Password</label>
               <input className="registerInput" type="password" placeholder="Enter your password..."onChange={(e)=>setPassword(e.target.value)} />
               <button className="registerButton">Register</button>
              
           </form> 
           <button className="registerLoginButton" type="submit"><Link className="link" to="/login">Login </Link></button>
          {error && <span style={{color:'red',marginTop:'10px'}}>Something went wrong :(</span>}
        </div>
    )
}

export default Register
