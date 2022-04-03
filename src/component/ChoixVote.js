import React from "react";

function ChoixVote({ choix, post, results }) {
  const conteur = 0;
  return (
    <div className="scroll">
      <div className="choix">
        <input type="radio" name={`radio ${choix.id_vote}`} className="check" />
        <input type="text" className="value" value={choix.choix} readOnly />
      </div>

        

      <p className="resulta1">+1</p>
    </div>
  );
}

export default ChoixVote;
