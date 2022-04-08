import React, { useState } from "react";
import ModalVote from "./Modal/Modal";
function Vote({nouveauChoix  ,onChange , onClick ,onSupprime ,onCreer}) {
  const [isopen, setopen ] = useState(false);

  return (
    <>
      <div>
        <div id="vote">
          <img
            src="../image/voting-box.png"
            alt=""
            id="logoVote"
            onClick={() => setopen(true)}
          />
        </div>
        {isopen ?   <ModalVote setopen={setopen} nouveauChoix={nouveauChoix} onChange={onChange} onClick={onClick} onSupprime={onSupprime} onCreer={onCreer}/>  : null}
      </div>
    </>
  );
}

export default Vote;
