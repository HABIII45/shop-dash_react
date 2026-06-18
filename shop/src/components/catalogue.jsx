import React from 'react'
import { donneesLocales } from '../data'
import { useEffect, useState } from 'react'
import ProduitComponent from './ProduitComponent'
import { Formulaire } from './form'
import TopBar from './topbar'
import "./catalogue.css"
import { Link } from 'react-router-dom'


export default function Catalogue() {
  // Création de l'état de la liste des produits + initialisatin du state 
  const [listeProduits, setListeProduits] = useState([])

  //copie du state + modification


   
  //Charger une fois le mock
  // useEffect(()=>{setListeProduits(mockProduits)}, [])
  useEffect(()=>{
  //  const donnees = donneesLocales
  const donnees = donneesLocales()
   if (donnees){
    setListeProduits(donnees)
   }
   else{
    setListeProduits([])
   }
  },[]);
 
  //state pour afficher le resultat trouvé
  const [recherche, setRecherche] = useState({titre:""})

    const ajout=(produit)=>{
    
     const newproduit = ([...listeProduits, produit])
     setListeProduits(newproduit)
     localStorage.setItem("produits",JSON.stringify(newproduit))
  }
  

  // Suppression d'un produit dans le catalogue

  const supprimerProduit = (id) => {
  const nouvelleListe = listeProduits.filter(produit => produit.id !== id);

  setListeProduits(nouvelleListe);

  localStorage.setItem("produits", JSON.stringify(nouvelleListe));
};


if (recherche.titre !== ""){
  return (
    
    <>
      <TopBar saisir = {setRecherche}/>
      <h1>Liste des produits</h1>
      <Link to = "/ajout" className='btn btn-primary'><i class="bi bi-plus"></i>Ajouter un produit</Link>
      <table className="table" >
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'right' }}>
            <th scope="col">Produit</th>
            <th scope="col">Libellé</th>
            <th scope="col">Prix</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {listeProduits
          .filter((produit) => produit.titre.toLowerCase().includes(recherche.titre.toLowerCase()))
          .map((produit) => (
            <ProduitComponent 
              key={produit.id} 
              id={produit.id}
              titre={produit.titre} 
              prix={produit.prix} 
              stock={produit.stock} 
              image={produit.image} 
              onClickProp={supprimerProduit}
            />
          ))}
        </tbody>
      </table>
      <Formulaire ajout = {ajout} />
    </>
  )
}
return (
    
    <>
      <TopBar saisir = {setRecherche}/>
      <div className='d-flex justify-content-between align-items-center mt-4'>
        <h1 className='mt-4'>Liste des produits</h1>
        <Link to = "/ajout" className='btn btn-primary btn-lg'><i class="bi bi-plus"></i>Ajouter un produit</Link>
      </div>
      <table className="table " style={{  borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'right' }}>
            <th scope="col">Produit</th>
            <th scope="col">Libellé</th>
            <th scope="col">Prix</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {listeProduits
          .map((produit) => (
            <ProduitComponent 
              key={produit.id} 
              id={produit.id}
              titre={produit.titre} 
              prix={produit.prix} 
              stock={produit.stock} 
              image={produit.image} 
              onClickProp={supprimerProduit}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
