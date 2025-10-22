import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // Si l'id ne correspond à aucun logement → redirection vers 404
  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement">
      <div className="logement__banner">
        <img src={logement.cover} alt={logement.title} />
      </div>

      <div className="logement__content">
        <div className="logement__header">
          <div>
            <h1>{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
          </div>
          <div className="logement__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>

        <div className="logement__tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="logement__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
          ))}
        </div>

        <div className="logement__details">
          <div className="dropdown">
            <h3>Description</h3>
            <p>{logement.description}</p>
          </div>

          <div className="dropdown">
            <h3>Équipements</h3>
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Logement;
