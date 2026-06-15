import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Catalogue from './components/catalogue'

export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Routes>
          {/* Route par défaut pour le catalogue */}
          <Route path='/' element = {<Catalogue/>}></Route>
          {/* Route pour le detail d'un produit */}
          {/* <Route path='/detail/:id'></Route> */}
        </Routes>
    </BrowserRouter>
  )
}
