import React from 'react';
function Categorie(){
    return<>
      <form >
            <select aria-label="State" className="combo">
                <option value="Select">Select....</option>
                <option value="java">Java</option>
                <option value="html">HTML</option>
                <option value="C++">C++</option>
                <option value="sap">SAP</option>
                </select>
                <img src="../image/plus.png" alt="" className="plus"/>
        </form>
    </>;
}
export default Categorie ;