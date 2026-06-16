import React from 'react'
import { mockProduits } from '../data'
import { useEffect, useState } from 'react'
import ProduitComponent from './ProduitComponent'

export default function Catalogue() {
  // Création de l'état de la liste des produits + initialisatin du state 
  const [listeProduits, setListeProduits] = useState([])
  

  //Charger une fois le mock
  useEffect(()=>{setListeProduits(mockProduits)}, [])
  
  return (
<<<<<<< HEAD
    <div>
   
      </div>
=======
    <>
      <table className="table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <th scope="col">Produit</th>
            <th scope="col">Prix</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        
        <tbody>
          {listeProduits.map((produit) => (
            <ProduitComponent 
              key={produit.id} 
              titre={produit.titre} 
              prix={produit.prix} 
              stock={produit.stock} 
              image={produit.image} 
            />
          ))}
        </tbody>
      </table>
    </>
>>>>>>> 4ba5688cc033b154e12f1cc0103d776687d70863
  )
}
