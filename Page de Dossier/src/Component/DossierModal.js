import React, { useState } from "react";
import ModalStatut from "./Modal/ModalStatut";
import ModalCategorie from "./Modal/ModalCategorie";
export default function DossierModal({
  setopen,
  onChange,
  onClick,
  Statut,
  Categorie,
  onChangeCategory,
  onClickCategory
}) {
  const [openStatut, setopenStatut] = useState(false);
  const [openCategory, setopenCategory] = useState(false);
  return (
    <div class="modalBackground">
      <div class="modalContainer">
        <div class="Cree">
          <h1>Creer un Dossier</h1>
        </div>
        <label class="Titre">Titre</label>
        <input type="text" class="inputTitre" />
        <br />
        <label class="Description">Description</label>
        <input type="text" class="inputDescription" />
        <br />
        <button class="btn-Creer" onClick={() => setopen(false)}>
          Creer
        </button>
        <form className="formStatut">
          <select aria-label="State" className="combo" id="comboCategorie">
            <option value="Select">Statuts</option>
            {Statut.map((st) => {
              return <option value={st.Statut}>{st.Statut} </option>;
            })}
          </select>
          <img
            src="../Media/add.png"
            alt=""
            className="plus"
            id="ajouteStatut"
            onClick={() => setopenStatut(true)}
          />
          {openStatut ? (
            <ModalStatut
              setopenStatut={setopenStatut}
              onChange={onChange}
              onClick={onClick}
            />
          ) : null}
        </form>
        <form className="formCategory">
          <select aria-label="Category" className="combo" id="comboCategorie">
            <option value="Category">Categorie</option>
            {Categorie.map((cat) => {
              return <option value={cat.categorie}>{cat.categorie} </option>;
            })}
          </select>
          <img
            src="../Media/add.png"
            alt=""
            className="plus"
            id="ajouteCategorie"
            onClick={() => setopenCategory(true)}
          />
          {openCategory ? (
            <ModalCategorie
              setopenCategory={setopenCategory}
              onChangeCategory={onChangeCategory}
              onClickCategory={onClickCategory}
            />
          ) : null}
        </form>
      </div>
    </div>
  );
}
