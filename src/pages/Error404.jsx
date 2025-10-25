import { Link } from "react-router-dom";
import "../styles/Error404.scss";
import image404 from "../assets/404.png";

export default function Error404() {
  return (
    <main className="error404">
      <img src={image404} alt="Erreur 404" className="error404__img" />
      <h2 className="error404__text">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error404__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
