import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './singlepost.css'
import axios from "axios"
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'
function SinglePost() {
    const location =  useLocation()
    const path = location.pathname.split("/")[2]
const [post,setPost]= useState({})
const {user}= useContext(Context)
const[title,setTitle]= useState('')
const[desc,setDesc]= useState('')
const[updateMode,setUpdateMode]= useState(false)

    useEffect(()=>{
const getPost = async()=>{
    const res = await axios.get('/posts/find/'+ path)
   setPost(res.data)
   setTitle(res.data.title)
   setDesc(res.data.desc)
}
getPost()
    },[path])
     const PF = "http://localhost:5000/images/"

     const handleDelete=async()=>{
         try {
              await axios.delete(`/posts/${post._id}`,{data: {username:user.username},})
              window.location.replace('/' )
         } catch (error) {
            console.log("DELETE POST ERROR");
         }
        
     }
     const handleUpdate=async()=>{
 try {
              await axios.put(`/posts/${post._id}`, {username:user.username,title,desc},{new:true})
              //window.location.reload( )
              setUpdateMode(false)
         } catch (error) {
            console.log("UPDATE POST ERROR");
         }
     }

    return (
        <div className="singlePost">
          <div className="singlepostWrapper">
              {post.photo && <img className="singlepostImg" src={PF + post.photo} alt="" />}
              {updateMode ? <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}className="singlepostTitleInput" autoFocus/> : <h1 className="singlepostTitle">{title}
              {post.username === user?.username &&  <div className="singlepostEdit">
                  <i className="singlepostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                  <i className="singlepostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>}
             
              </h1>}
             
              <div className="singlepostInfo">
                  <span className="singlepostAuthor">Author: 
                  <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                  </Link></span>
                  <span className="singlepostDate">{new Date(post.createdAt).toDateString()}</span>
              </div>
              {updateMode ? <textarea  value={desc} onChange={(e)=>setDesc(e.target.value)}className="singlepostDescInput" /> :<p className="singlepostDesc">
                 {desc}
              </p>}
              {updateMode &&  <button className="singlePostBtn" onClick={handleUpdate}>Update</button>}
            
          </div>
        </div>
    )
}

export default SinglePost
