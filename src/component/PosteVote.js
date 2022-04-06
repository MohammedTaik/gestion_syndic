import React from "react";
import ChoixVote from "./ChoixVote";

function PosteVote({ post, choix, setChoix ,results} ) {
  
  return (
    <>
      <div className="vote">
        <h4 className="dateNote">{post.date}</h4>
        <div className="voteshadow">
          <p className="titleVote">cvkgjkb</p>
         
          {choix.map(function (choix) {
            if (choix.id_vote == post.id_vote) {
               return <ChoixVote choix={choix} results={results}/>
            }
            return null;
          })}

        </div>
      </div>
    </>
  );
}

export default PosteVote;
