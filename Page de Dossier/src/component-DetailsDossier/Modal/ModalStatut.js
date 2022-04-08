import React from "react";
import "./Modal.css";
function ModalStatut({ setopen, onChange, onClick }) {
  function onClickSave(e) {
    setopen(false);
  }
  return (
    <>
      <div class="modalBackground">
        <div className="modalContainer2">
          <div className="Cree">
            <h1>Ajouter un Statut</h1>
          </div>
          <label className="Titre2">Statut</label>
          <input type="text" class="inputTitre" onChange={onChange} />
          <button
            className="btn-Creer2"
            onClick={() => {
              onClickSave();
              onClick();
            }}
          >
            Creer
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalStatut;
