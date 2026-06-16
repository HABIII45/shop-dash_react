import React from 'react'
import { mockProduits } from '../data'
import { useEffect, useState } from 'react'

export default function Catalogue() {
  // Création de l'état de la liste des produits + initialisatin du state 
  const [listeProduits, setListeProduits] = useState([])
  

  useEffect(()=>{setListeProduits(mockProduits)}, [])
  
  return (
    <div>
   
      </div>
  )
}
