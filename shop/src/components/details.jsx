import { useParams,Link} from "react-router-dom";
import { donneesLocales } from "../data";

export function Details(props){
    const {id} =useParams();
    const produit = donneesLocales.find((prod) => prod.id === Number(id))
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