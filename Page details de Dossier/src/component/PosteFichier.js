import React from "react";
function PosteFichier({post}) {
  
     return <>

        <div className="vote">
            <h4 className="dateNote">{post.date}</h4>
            <div className="posteChadow">
                <div className="fichier"></div>
            </div>
        </div>
        

    </>;
}
export default PosteFichier;