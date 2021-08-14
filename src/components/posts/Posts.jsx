import React from 'react'
import Post from '../post/Post'
import './posts.css'
function Posts({posts}) {
    return (
        <div className="posts">
            {posts.map((post)=>{
               
               // console.log("POST",post);
               
                return   <Post key={post._id} post={post}/>
    })}
              
         
        
        
        </div>
    )
}

export default Posts
