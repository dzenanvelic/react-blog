import React from 'react'
import './header.css'
function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm">React & Node</span>
               <span className="headerTitleLg">Blog</span>
           </div>
           <img className="headerImg" src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt=""></img>
        </div>
    )
}

export default Header
