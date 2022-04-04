import React from "react";
import "./Modal.css";
function ModalVote({ setopen }) {
  return (
    <>
      <div class="modalBackground" onClick={() => setopen(false)}>
        <div className="modalContainer">
          <div className="Cree">
            <h1>Creer un Vote</h1>
          </div>
          <label className="Titre">Titre</label>
          <input type="text" class="inputTitre" />
          <br />
          <label className="Choix">Choix</label>
          <input type="text" class="inputChoix" />
          <button className="btn-ajoute-choix">Ajoute Choix</button>
          <br />
          <button className="btn-Creer" onClick={() => setopen(false)}>
            Creer
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalVote;
