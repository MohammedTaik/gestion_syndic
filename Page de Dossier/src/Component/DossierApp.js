import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import DossierCreator from "./DossierCreator";
import DossierFilter from "./DossierFilter";
import DossierList from "./DossierList";
import '../Style.css'
export default function DossierApp() {
  /*Use States*/
  const [Folders, setFolders] = useState([
    {
      id_folder: 1,
      titre: "folder1",
      categorie: "categ1",
      statut: "st1",
      description: "hada howa l folder 1",
    },
    {
      id_folder: 2,
      titre: "folder2",
      categorie: "categ1",
      statut: "st2",
      description: "hada howa l folder 2",
    },
    {
      id_folder: 3,
      titre: "folder3",
      categorie: "categ2",
      statut: "st2",
      description: "hada howa l folder 3",
    },
    {
      id_folder: 4,
      titre: "aaaaa",
      categorie: "categ2",
      statut: "st2",
      description: "hada howa l folder 4",
    },
  ]);
  const [foundUsers, setFoundUsers] = useState(Folders);
  const [Categorie, setCategorie] = useState([
    {
      id_Categorie: 1,
      categorie: "categ1",
    },
    {
      id_Categorie: 2,
      categorie: "categ2",
    },
    {
      id_Categorie: 3,
      categorie: "categ3",
    },
    {
      id_Categorie: 4,
      categorie: "categ4",
    },
  ]);
  const [Statut, setStatut] = useState([
    {
      id_Statut: 1,
      Statut: "st1",
    },
    {
      id_Statut: 2,
      Statut: "st2",
    },
    {
      id_Statut: 3,
      Statut: "st3",
    },
    {
      id_Statut: 4,
      Statut: "st4",
    },
  ]);
  const [statutcopy, setStatutcopy] = useState({
    id_Statut: null,
    Statut: "",
  });
  const [CategoryCopy, setCategoryCopy] = useState({
    id_Categorie: null,
    categorie: "",
  });
  /*------------------------------------------------------------*/
  /*Fonction */
  function handleChangeStatut(e) {
    e.preventDefault();
    setStatutcopy({ ...statutcopy, Statut: e.target.value });
  }

  function handeCreateStatut(e) {
    setStatut([...Statut, statutcopy]);
  }

  function handleChangeCategory(s) {
   s.preventDefault();
    setCategoryCopy({ ...CategoryCopy, Categorie: s.target.value });
  }

  function handleCreateCategory(s) {
    setCategorie([...Categorie, CategoryCopy]);
  }

  /*-------------------------------------------------------------*/
  return (
    <div>
      <Header />
      <SideBar />
      <DossierCreator
        Categorie={Categorie}
        Statut={Statut}
        onChange={handleChangeStatut}
        onClick={handeCreateStatut}
        onChangeCategory={handleChangeCategory}
        onClickCategory={handleCreateCategory}
      />
      <DossierFilter
        Categorie={Categorie}
        Statut={Statut}
        Folders={Folders}
        setFolders={setFolders}
        foundUsers={foundUsers}
        setFoundUsers={setFoundUsers}
      />
      <div className="postes">
        <DossierList Folders={Folders} foundUsers={foundUsers} />
      </div>
    </div>
  );
}
