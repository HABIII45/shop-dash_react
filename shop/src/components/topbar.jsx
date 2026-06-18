import React, { useState } from 'react'

export default function TopBar({saisir}) {
    //state
    const [saisi, setSaisi] = useState("")
    
    
    
    //comportement
    const Rechercher =(event)=>{
            event.preventDefault()
        //recuperation de la saisi de l'utilisateur
        const motsaisi = {
           titre:saisi
        }
        saisir(motsaisi)
        
    }
  return (
    <>
        <nav className="navbar" style={{backgroundColor : "#428475"}}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color : "white"}}>ArtSen</a>
                <form className="d-flex" role="search" onSubmit={Rechercher}>
                    <input className="form-control me-2" type="search" placeholder="Rechercher" value= {saisi} onChange={(e)=>setSaisi(e.target.value)}/>

                    <button className="btn btn-outline-success" type="submit" >Rechercher</button>
                    {saisi !== "" &&
                    <button  className="btn btn-outline-success"  type="button" onClick={() => {

                   
                   setSaisi("");
                   saisir({ titre: "" });
                   }}>Refraichir
                </button>
}
                </form>
            </div>
        </nav>
    </>
  )
}
