import React from "react";
import { useState } from "react";
import Header from "./Header";
import SideBare from "./SideBar";
import Categorie from "./Categorie";
import Fichier from "./Fichier";
import Statut from "./Statut";
import Vote from "./Vote";
import CreePost from "./PosteCreator";
import PosteList from "./PosteList";


function App() {

  const [input,setInput] = useState("");
  
  const [posts, setposts] = useState([
    {
      id: 1,title: "",id_vote: 1,id_dossier: "",date: "12-05-2022",Type: "vote",
    },
    {
      id: 1,title: "",id_vote: 3,id_dossier: "",date: "02-28-2001",Type: "vote",
    },
    {
      id: 2,id_fichier: "",id_dossier: 2,notes: "",fichier: "",date: "02-28-2018",Type: "Fichier",
    },
    {
      id: 3,id_note: "",description: "hbjhcxvbjhzxcjhvbhzxcvgxczvzxjhv",id_dossier: 5,date: "02-28-2015",Type: "note",
    },
    {
      id: 3,id_note: "",description: "hbjhcxvbjhzxcjhvbhzxcvgxczvzxjhv",id_dossier: 5,date: "02-28-1999", Type: "note"
    },
  ]);

  const [choix,setChoix] = useState([
    {id_choix:1,choix:"mohammed",id_vote:1},
    {id_choix:2,choix:"taik",id_vote:3}, 
    {id_choix:3,choix:"yassin",id_vote:1}
  ])


  const [results , setresult] = useState([
     {id_vote:1 , id_partisipant:null ,id_choix:1},
     {id_vote:1 , id_partisipant:null ,id_choix:1},
     {id_vote:1 , id_partisipant:null ,id_choix:3},
     {id_vote:3 , id_partisipant:null ,id_choix:2},
     {id_vote:3 , id_partisipant:null ,id_choix:2},
  ])

  const [Categories] = useState([
    {
      id_Categorie: 1,categorie: "categ1",
    },
    {
      id_Categorie: 2,categorie: "categ2",
    },
    {
      id_Categorie: 3,categorie: "categ3",
    },
    {
      id_Categorie: 4,categorie: "categ4",
    },
  ]);

  const [Statuts, setStatut] = useState([
    {
      id_Statut: 1,Statut: "stat1",
    },
    {
      id_Statut: 2,Statut: "stat2",
    },
    {
      id_Statut: 3,Statut: "stat3",
    },
    {
      id_Statut: 4,Statut: "stat4",
    },
  ]);

  posts.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <>
      <Header />
      <SideBare />
      <Categorie Categories={Categories}/>
      <Fichier />
      <Statut Statuts={Statuts}/>
      <Vote />
      
      <div className="postes">
        <PosteList posts={posts} setposts={setposts}
                   choix={choix} setChoix={setChoix}
                   results={results}
        />
      </div>
      <CreePost  input={input}
         setInput={setInput}
         posts={posts}
         setposts={setposts}
         />
    </>
  );
}

export default App;
