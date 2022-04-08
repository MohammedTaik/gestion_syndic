import React from "react";
function ModalVote({ setopen ,nouveauChoix ,onChange ,onClick ,onSupprime ,onCreer}) {
 

  return (
    <>
      <div class="modalBackground">
        <div className="modalContainer">
          <div className="Cree">
            <h1>Creer un Vote</h1>
          </div>
          <label className="Titre">Titre</label>
          <input type="text" class="inputTitre" />
          <br />
          <label className="Choix">Choix</label>
          <input type="text" class="inputChoix" maxlength="15" onChange={onChange}/>
          <button className="btn-ajoute-choix" onClick={() =>{onClick() }}>Ajoute Choix</button>
    
          <br />
          <br />


          <div className="choixContainer">

              {nouveauChoix.map(function(n) {
                  return <div className="inputStatut">
                  <p className="choixP">{n.choix}</p>
                   <img src="../image/cancel.png" className="deletChoix"  onClick={() =>{onSupprime(n) }}/>
                 </div>
              })}
              
          </div>
          
          <button className="btn-Creer" onClick={() => {
            setopen(false);
             onCreer();}}>
            {" "}
            Creer{" "}
          </button>
          

        </div>
      </div>
    </>
  );
}

export default ModalVote;
