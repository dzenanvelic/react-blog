import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context'
import './topbar.css'
function Topbar() {
      const PF = "http://localhost:5000/images/"
 const {user,dispatch} = useContext(Context)
 const handleLogout=()=>{
    
     dispatch({type:"LOGOUT"})
 }
    return (
        <div className="top">
         <div className="topLeft">
             <i className="topIcon fab fa-facebook-square"></i>
             <i className="topIcon fab fa-twitter-square"></i>
             <i className="topIcon fab fa-linkedin"></i>
             <i className="topIcon fab fa-instagram-square"></i>
             </div>
         <div className="topCenter">
             <ul className="topList">
                
                 <li className="topListItem"> <Link className="link" to="/">Home </Link></li>
                
                 
                 <li className="topListItem"><Link className="link" to="/about">About </Link></li>
                 <li className="topListItem"><Link className="link" to="/contact">Contact </Link></li>
                 
                 <li className="topListItem"><Link className="link" to="/write">Write </Link></li>
                 <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
             </ul>
         </div>
         <div className="topRight">
             {user ? 
             <Link to='/settings'><img className="topImg" src={ PF+user.profilePic}alt="" /></Link>  : <ul className="topList">
                 <li className="topListItem"> <Link className="link" to="/login">LOGIN </Link></li>
            
             <li className="topListItem"> <Link className="link" to="/register">REGISTER </Link></li>
            
             </ul>
             }
            
             <i className=" topSearchIcon fas fa-search-plus"></i>
         </div>
        </div>
    )
}

export default Topbar
