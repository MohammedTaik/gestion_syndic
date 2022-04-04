import React from "react";
function Statut() {
  return (
    <>
      <form>
        <select aria-label="State" className="combo" id="comboCategorie">
          <option value="Select">Select....</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
          <option value="C++">C++</option>
          <option value="sap">SAP</option>
        </select>
        <img src="../image/plus.png" alt="" className="plus" id="ajouteCategorie" />
      </form>
      
      <div id="title">
        <p>Augmentation des frais de syndic</p>
      </div>
    </>
  );
}
export default Statut;
