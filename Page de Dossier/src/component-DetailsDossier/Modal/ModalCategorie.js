import React from 'react'

function ModalCategorie({setopen ,onChange, onClick}) {
    
  function onClickSave(e) {
    setopen(false);
  }

  return (
    <>
    <div class="modalBackground" >
      <div className="modalContainer2">
        <div className="Cree">
          <h1>Ajouter un Categorie</h1>
        </div>
        <label className="Titre2">Categorie</label>
        <input type="text" class="inputTitre" onChange={onChange}/>
        <button className="btn-Creer2"  onClick={() => {
              onClickSave();
              onClick();
            }}> 
          Creer
        </button>
      </div>
    </div>
  </>
  )
}

export default ModalCategorie
