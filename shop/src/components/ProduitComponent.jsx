import React from 'react'
import { Link } from 'react-router-dom'
export default function ProduitComponent(props) {
  return (
    <>
      <tr>
      <td>
        <img src={props.image} alt={props.titre} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} />
        {props.titre}
      </td>
      <td>{props.prix} FCFA</td>
      <td>{props.stock}</td>
      <td><Link to={`/detail/${props.id}`}>Voir plus</Link></td>
    </tr>
    </>
  )
}
