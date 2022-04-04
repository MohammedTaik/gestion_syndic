import React , { useState } from "react";
import ModalStatut from "./Modal/ModalStatut"
function Statut({ Statuts }) {

  const [isopen, setopen] = useState(false);



  return (
    <>
      <form>
        <select aria-label="State" className="combo" id="comboCategorie">
          <option value="Select">Select....</option>
          
          {Statuts.map((st) => {
            return <option value={st.Statut}>{st.Statut}</option>;
          })}
        </select>
        <img
          src="../image/plus.png"
          alt=""
          className="plus"
          id="ajouteCategorie"
          onClick={() => setopen(true)}
        />
      </form>
      {isopen ? <ModalStatut setopen={setopen} /> : null}
      <div id="title">
        <p>Augmentation des frais de syndic</p>
      </div>
      
    </>
  );
}
export default Statut;
