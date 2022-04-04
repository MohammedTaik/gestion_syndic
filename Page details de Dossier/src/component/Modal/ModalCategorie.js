import React from 'react'

function ModalCategorie({setopen}) {
    
  return (
    <>
    <div class="modalBackground" onClick={() => setopen(false)}>
      <div className="modalContainer2">
        <div className="Cree">
          <h1>Ajouter un Categorie</h1>
        </div>
        <label className="Titre2">Categorie</label>
        <input type="text" class="inputTitre" />
        <button className="btn-Creer2" onClick={() => setopen(false)}> 
          Creer
        </button>
      </div>
    </div>
  </>
  )
}

export default ModalCategorie
