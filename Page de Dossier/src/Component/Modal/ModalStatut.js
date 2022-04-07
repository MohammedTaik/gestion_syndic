import React from "react";
function ModalStatut({ setopenStatut, onChange, onClick }) {
  function onClickSave(e) {
    setopenStatut(false);
  }
  return (
    <>
      <div class="StatutBackground">
        <div className="StatutContainer">
          <div className="CreeStatut">
            <h1>Ajouter un Statut</h1>
          </div>
          <label className="TitreStatut">Statut</label>
          <input type="text" class="inputStatut" onChange={onChange}  required/>
          <button
            className="btn-CreerStatut"
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
