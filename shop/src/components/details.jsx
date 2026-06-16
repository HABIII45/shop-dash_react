import { useParams,Link} from "react-router-dom";
import { mockProduits } from "../data";

export function Details(){
    const {id} =useParams();
    const produit = mockProduits.find((prod) => prod.id === Number(id))
    return(
        <>
        <img src={produit.image} alt="image" />
        <h1>{produit.titre}</h1>
        <p>{produit.description}</p>
        <small>{produit.stock}</small>
        <Link to ="/">Retour</Link>

        </>
    )

}