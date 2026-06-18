import React from 'react'
import { Link } from 'react-router-dom'
export default function ProduitComponent(props) {
  return (
    <>
      <tr>
      <td>
        <img src={props.image} alt={props.titre} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} /></td>
      <td>{props.titre}</td>
      <td>{props.prix} FCFA</td>
      <td>{props.stock}</td>

      {/* <td><button  onClick={() => props.onClickProp(props.id)}>X</button></td>
      <td><Link to={`/detail/${props.id}`}>Voir plus</Link></td> */}

      <td><button onClick={() => props.onClickProp(props.id)}><i class="bi bi-trash"></i></button><Link to={`/detail/${props.id}`} style={{textDecoration : 'none', color : "green"}}><i class="bi bi-eye"></i></Link></td>

    </tr>
    </>
  )
}
