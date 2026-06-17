import React from 'react'
import { donneesLocales } from '../data'
import { useEffect, useState } from 'react'
import ProduitComponent from './ProduitComponent'
import { Formulaire } from './form'

export default function Catalogue() {
  // Création de l'état de la liste des produits + initialisatin du state 
  const [listeProduits, setListeProduits] = useState([])
  //copie du state + modification


   
  //Charger une fois le mock
  // useEffect(()=>{setListeProduits(mockProduits)}, [])
  useEffect(()=>{
   const donnees = donneesLocales
   if (donnees){
    setListeProduits(donnees)
   }
   else{
    setListeProduits([])
   }
  },[]);


    const ajout=(produit)=>{
    
     const newproduit = ([...listeProduits, produit])
     setListeProduits(newproduit)
     localStorage.setItem("produits",JSON.stringify(newproduit))
  }
  

  // Suppression d'un produit dans le catalogue

  const supprimerProduit = (id) => {
  const nouvelleListe = listeProduits.filter(produit => produit.id !== id);

  setListeProduits(nouvelleListe);

  localStorage.setItem(
    "produits",
    JSON.stringify(nouvelleListe)
  );
};

  return (
    
    <>
      <table className="table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <th scope="col">Produits</th>
            <th scope="col">Prix</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
            
          </tr>
        </thead>
        
        <tbody>
          {listeProduits.map((produit) => (
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
