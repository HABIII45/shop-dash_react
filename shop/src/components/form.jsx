import { useState } from "react"
import "./form.css"
import { Link } from "react-router-dom"


export function Formulaire({ ajout }) {
    const [erreurs, setErreurs] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault() 

        const form = event.currentTarget
        const formData = new FormData(form) 

        
        const titre = formData.get("titre") || ""
        
        const description = formData.get("description") || ""
        const prix = formData.get("prix") || ""
        const stock = formData.get("stock")|| ""
        const image = formData.get("image")|| ""


        let nouvellesErreurs = {};

        if (!titre.trim()) {
            nouvellesErreurs.titre = "Le titre ne peut pas etre vide";
        }

        if (!description.trim()) {
            nouvellesErreurs.description = "La description ne peut pas etre vide";
        } else if (description.length < 20 || description.length > 150) {
            nouvellesErreurs.description = "La description doit contenir entre 20 et 150 caractères";
        }


        if (!prix.trim()) {
            nouvellesErreurs.prix = "Le prix ne peut pas etre vide";
        } else if (!/^[0-9]+?$/.test(prix)) {
            nouvellesErreurs.prix = "Le prix doit etre un nombre positif";
        }

        if (!stock.trim()) {
            nouvellesErreurs.stock = "Le stock ne peut pas etre vide";
        } else if (!/^[0-9]+$/.test(stock)) { 
            nouvellesErreurs.stock = "Le stock doit etre un nombre entier positif";
        }

        setErreurs(nouvellesErreurs);

        // Soumettre formulaire
        if (Object.keys(nouvellesErreurs).length === 0) {

            //collecte
            const produit = {
                id: Date.now(),
                titre,
                description,
                prix,
                stock,
                image
            }
            
            ajout(produit)
            form.reset() 
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Ajout d'un produit</h1> 
            <Link to = "/"><i class="bi bi-house"></i>Retour au catalogue</Link>
            <form className="product-form" onSubmit={handleSubmit} noValidate>
                
                <label>Titre du produit</label>
                <input type="text" name="titre" placeholder="Titre du produit" />
                {erreurs.titre && <span style={{ color: 'red' }}>{erreurs.titre}</span>}
                
                <label>Description du produit</label>
                <textarea name="description" placeholder="Donnez une description" rows={5} cols={30} />
                {erreurs.description && <span style={{ color: 'red' }}>{erreurs.description}</span>}
                   
                <label>Prix du produit</label>
                <input type="number" name="prix" placeholder="Mettre ici le prix du produit" />
                {erreurs.prix && <span style={{ color: 'red' }}>{erreurs.prix}</span>}
                
                <label>Stock du produit</label>
                <input type="number" name="stock" placeholder="Stock" />
                {erreurs.stock && <span style={{ color: 'red' }}>{erreurs.stock}</span>}
                
                <label>Image du produit</label>
                <input type="text" name="image" placeholder="Url de l'image" />
                
                <button type="submit" >Ajouter un produit</button>
            </form>
        </div>
    )
}


