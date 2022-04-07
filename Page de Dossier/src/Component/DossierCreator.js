import React, { useState } from "react";
import DossierModal from "./DossierModal";
export default function DossierCreator({
  Statut,
  onChange,
  onClick,
  Categorie,
  onChangeCategory,
  onClickCategory
}) {
  const [isopen, setopen] = useState(false);
  return (
    <>
      <div className="Dossier-Creator">
        <p>Les Dossiers</p>
        <div className="Button-CD" onClick={() => setopen(true)}>
          <img src="../Media/plus.png" alt="" />
          <p>Crée Un Dossier</p>
        </div>
      </div>
      {isopen ? (
        <DossierModal
          isopen={isopen}
          setopen={setopen}
          Statut={Statut}
          onChange={onChange}
          onClick={onClick}
          Categorie={Categorie}
          onChangeCategory={onChangeCategory}
          onClickCategory={onClickCategory}
        />
      ) : null}
    </>
  );
}
