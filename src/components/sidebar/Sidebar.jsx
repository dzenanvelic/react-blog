import React,{useState,useEffect} from 'react'
import './sidebar.css'
import axios from 'axios'
import {Link } from 'react-router-dom'
function Sidebar() {
    const [cat,setCats]= useState([])

    useEffect(()=>{
const getCat = async()=>{
    const res = await axios.get('/categories/allcat')
    setCats(res.data)
}
getCat()
    },[])
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img src="https://images.unsplash.com/photo-1627495882227-ea8e58150e83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
               <p className="about">I am full stack MERN develloper. Love programming and everything about it. </p>
           </div>
           <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cat.map((cate)=>{
                        return <Link to={`/?cat=${cate.name}`} className="link"key={cate._id}>
                         <li className="sidebarListItem" >
                       {cate.name}
                    </li>
                        </Link>
                       
                    })}
                   
                   
                </ul>
           </div>
           <div className="sidebarItem">
               <div className="sidebarTitle">FOLLOW US</div>
               <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
             <i className="sidebarIcon fab fa-twitter-square"></i>
             <i className="sidebarIcon fab fa-linkedin"></i>
             <i className="sidebarIcon fab fa-instagram-square"></i>
               </div>
           </div>
        </div>
    )
}

export default Sidebar
