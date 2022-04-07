import React from "react";

export default function Dossier({folder}) {
  return (
      <div className="note">
        <div className="dossier-image"></div>
        <div id="statut">
             {folder.statut}
        </div>
        <p>{folder.titre}</p>
    </div>
  );
}
