import { useState } from "react"
import "./form.css"

export function Formulaire({ajout}){
    //state
      //Creation de l'etat des données en rapport avec un produit(init à vide)
    const [newtitre, setNewTitre] = useState("")
    const [newdescription, setNewDescription] = useState("")
    const [newprix, setNewPrix] = useState("")
    const [newstock, setNewStock] = useState("")
    const [newimage, setNewImage] = useState("")
    //comportements
    const handleSubmit= (event) =>{
        event.preventDefault()

        //collecte
        const produit ={
            id:  Date.now(),
            titre: newtitre,
            description: newdescription,
            prix: newprix,
            stock: newstock,
            image: newimage
            
        }
        //ajouter le nouveau produit
        ajout(produit)
    }

   
    //return

    return(
        <>
        <h1>Ajout d'un produit</h1>
        <form className="product-form" onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Titre du produit" value={newtitre} onChange={(e)=>setNewTitre(e.target.value)}/>
             
            <textarea value={newdescription} placeholder= "Donnez une description" rows={5} cols={30} onChange={(e)=>setNewDescription(e.target.value)}/>
               
            <input type="number" placeholder="Mettre ici le prix du produit" value={newprix} onChange={(e)=>setNewPrix(e.target.value)}/>
            
            <input type="number" placeholder="Stock" value={newstock} onChange={(e)=>setNewStock(e.target.value)}/>
            {/* saisi une URL */}
            
            <input type="text" placeholder="Url de  l'image" value={newimage} onChange={(e)=>setNewImage(e.target.value)} />
            {/* Affiche l’image correspondant à cette URL */}
            {/* <img src={newimage} alt="image" width="150"/> */}
            <button>Ajouter un produit</button>
        </form>
        </>
    )
}