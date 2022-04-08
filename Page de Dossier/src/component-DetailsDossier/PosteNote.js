import React from "react";
function PosteNote({post}) {
   

   return (
    <>
      <div className="note" >
        <h4 className="dateNote">{post.date}</h4>
        <textarea className="areaBorder"  value={post.description}></textarea>
      </div>
    </>
  )
  
}

export default PosteNote;
