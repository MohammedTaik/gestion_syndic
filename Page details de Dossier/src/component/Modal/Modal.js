import React from 'react'
import './ModalVote.css'
function ModalVote() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
          <h1>Creer un vote</h1>
          <label className="labell"> Titre :</label>
          <input type="text" className="inputText"/><br/>
          <label className="labell"> Titre :</label>
          <input type="text" className="inputText"/><br/>
          <button className='validi'>Validi</button>
      </div>
    </div>
  )
}

export default ModalVote ;
