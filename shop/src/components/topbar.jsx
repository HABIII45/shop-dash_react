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
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">ArtSen</a>
                <form className="d-flex" role="search"  onSubmit={Rechercher}>
                    <input className="form-control me-2" type="search" placeholder="Rechercher" value= {saisi} onChange={(e)=>setSaisi(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit" >Rechercher</button>
                    <button  className="btn btn-outline-success" type="button" onClick={() => {
                   setSaisi("");
                   saisir({ titre: "" });
                   }}>Refresh
                </button>
                </form>
            </div>
        </nav>
    </>
  )
}
