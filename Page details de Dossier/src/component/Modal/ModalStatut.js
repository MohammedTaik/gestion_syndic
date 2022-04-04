import React from 'react'
import "./Modal.css";
function ModalStatut({setopen}) {
  return (
    <>
    <div class="modalBackground" onClick={() => setopen(false)}>
      <div className="modalContainer2">
        <div className="Cree">
          <h1>Ajouter un Statut</h1>
        </div>
        <label className="Titre2">Statut</label>
        <input type="text" class="inputTitre" />
        <button className="btn-Creer2" onClick={() => setopen(false)}> 
          Creer
        </button>
      </div>
    </div>
  </>
  )
}

export default ModalStatut
