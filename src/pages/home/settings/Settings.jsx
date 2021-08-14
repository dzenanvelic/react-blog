import React, { useContext, useRef, useState } from 'react'
import './settings.css'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Context } from '../../../context/Context'
import axios from 'axios'
function Settings() {
     const PF = "http://localhost:5000/images/"
    const{user,dispatch}= useContext(Context)
       const[file,setFile]=useState(null)
       const[username,setUsername]=useState("")
       const[email,setEmail]=useState("")
       const[password,setPassword]=useState("")
       const[success,setSuccess]=useState(false)

 const handleSubmit=async(e)=>{
        e.preventDefault()
        dispatch({type:"UPDATE_START"})
        const updatedUser={
email,
password,
username,
        }
        if(file){
            const data = new FormData()
            const filename= Date.now() + file.name
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilePic = filename;
            try {
               await axios.post('/upload',data)
             
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        try {
              const res = await axios.put('/users/'+ user._id,updatedUser,{
               headers:{ token:"Bearer " + JSON.parse(localStorage.getItem("bloguser")).accessToken,} 
             })
             setSuccess(true)
             dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        } catch (error) {
            console.log('====================================');
            console.log("POST CREATE ERROR",error);
            console.log('====================================');
            dispatch({type:"UPDATE_FAILURE"})
        }
       
    }
    return (
        <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm" onSubmit={handleSubmit}>
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                        <i className=" settingsPPIcon fas fa-user"></i>
                    </label>
                    <input type="file"id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                        
                    
                </div>
                <label >Username</label>
                <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
                <label >Email</label>
                <input type="email" placeholder={user.email}onChange={(e)=>setEmail(e.target.value)} />
                <label >Password</label>
                <input type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color:'green',textAlign:"center",marginTop:'20px'}}>Profile has been updated...</span>}
            </form>
         </div>
          <Sidebar/>
        </div>
    )
}

export default Settings
