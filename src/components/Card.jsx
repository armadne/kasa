import { Link } from "react-router-dom";
import "../styles/Card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <div className="card__overlay">
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
