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
import '../index.css'

function App() {
  
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

  const [Categories ,setCategories] = useState([
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
   
  const [statut, setStatu] = useState({
    id_Categorie: null,
    categorie: "",
  })
  const [currentCategorie, setCurrentCategorie] = useState({
    id_Statut: null,
    Statut: "",
  })

  const [currentChoix , setcurrentChoix]=useState({
    id_choix:null,choix:"",id_vote:null
  })

  const [nouveauChoix,setNouveauChoix] = useState([
   
  ])  
   
  posts.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });

   function handleChangeStatut(e){ 
    e.preventDefault();
    setStatu({...statut,Statut:e.target.value})
  
   }

   function handeCreateStatut(e){
 
    setStatut([...Statuts,statut])
   
   }
   
   function handleChangeCategorie(e){ 
    setCurrentCategorie({...currentCategorie,categorie:e.target.value})
    
   }

   function handeCreateCategorie(e){
    setCategories([...Categories,currentCategorie])
   }
   
   function changeCreerChoix(e){
    setcurrentChoix({...currentChoix , choix:e.target.value ,id_vote:5,id_choix:nouveauChoix.length})
   }
   
   function ClickCreerChoix(){
    setNouveauChoix([...nouveauChoix,currentChoix])
  
   }

   function handlSupprChoix(choix){
    setNouveauChoix(nouveauChoix.filter(choi => choi.choix != choix.choix)) 
   }
   
   function handleCreerVote(){
      {nouveauChoix.map(function(n){
        setChoix([...choix,n])
        console.log(n)
      })}
      setposts([...posts,{id:posts.length+1,title:"hhhh",id_vote:5,id_dossier:7,date:555,Type:"vote"}])
   }

  return (
    <>
      <Header />

      <SideBare />

      <Categorie Categories={Categories}
                 onChange={handleChangeCategorie}
                 onClick={handeCreateCategorie}
                 />

      <Fichier />

      <Statut Statuts={Statuts} 
              onChange={handleChangeStatut}
              onClick={handeCreateStatut} 
              />
            
      <Vote nouveauChoix={nouveauChoix}
            onChange={changeCreerChoix}
            onClick={ClickCreerChoix}
            onSupprime={handlSupprChoix}
            onCreer={handleCreerVote}
      />
      
      <div className="postessimo">
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
