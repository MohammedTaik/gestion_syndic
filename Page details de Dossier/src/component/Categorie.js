import React , { useState } from "react";
import ModalCategorie from "./Modal/ModalCategorie"

function Categorie({ Categories }) {
  const [isopen, setopen] = useState(false);
  return (
    <>
      <form>
        <select aria-label="State" className="combo">
          <option value="Select">Select....</option>
          {Categories.map((Categorie) => {
            return <option>{Categorie.categorie}</option>;
          })}
        </select>
        <img src="../image/plus.png" alt="" className="plus" onClick={() => setopen(true)}/>
      </form>
      {isopen ? <ModalCategorie setopen={setopen}/> : null}
    </>
  );
}
export default Categorie;
