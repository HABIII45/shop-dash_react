import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Catalogue from './components/catalogue.jsx'
import  { Details }   from './components/details.jsx'
import { Formulaire } from './components/form.jsx'
export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Routes>
          {/* Route par défaut pour le catalogue */}
          <Route path='/' element = {<Catalogue/>}></Route>
          {/* Route pour le detail d'un produit */}
         <Route path='/detail/:id' element = {<Details />}></Route> 
          <Route path='/ajout' element = {<Formulaire />}></Route> 
        </Routes>
    </BrowserRouter>
  )
}
