import React from 'react';
function CreePost({ input , setInput ,posts,setposts}){


    const onInputChange =(e)=>{
        setInput(e.target.value);
        console.log(e.target.value)
    };
    
   const onClickSubmit =(e)=>{
    e.preventDefault();
    setposts([...posts,{id:posts.length+1,id_note:posts.length+1
        ,description: input,id_dossier: 5,date: "02-28-2001",Type: "note"}]); 
        console.log(posts);
   }

    return<>
    <form onSubmit={onClickSubmit} >

        <input type="text" className='creeNote' 
        placeholder='Saisissez une note...' 
        onChange={onInputChange}/>
        <div id="afficheNote">
            <button type="submit" id="logoAffiche" />
           
        </div>
    </form>
    </>;
}
export default CreePost ;