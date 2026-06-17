import { useParams,Link} from "react-router-dom";
import { donneesLocales } from "../data";

export function Details(props){
    const {id} =useParams();
    const produit = donneesLocales.find((prod) => prod.id === Number(id))
    return(
        <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px"}}>
        <img src={produit.image} alt="image" style={{width: "500px",
      maxWidth: "100%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"}}  />
        <h1>{produit.titre}</h1>
        <p>{produit.description}</p>
        <small>{produit.stock}</small>
        <Link to ="/">Retour</Link>

        </div>
    )

}