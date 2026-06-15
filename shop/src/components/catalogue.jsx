import React from 'react'
import { mockProduits } from '../data'
import { useEffect, useState } from 'react'

export default function Catalogue() {
  // Création de l'état de la liste des produits + initialisatin du state 
  const [listeProduits, setListeProduits] = useState([])
  

  //Charger une fois le mock
  useEffect(()=>{setListeProduits(mockProduits)}, [])
  
  return (
    <>
      <h1>JuiceLoc</h1>
      <div>{listeProduits.map((produit)=> <h1>{produit.titre}</h1> )} </div>
    </>
  )
}
