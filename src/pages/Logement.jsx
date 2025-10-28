import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";
import "../styles/Logement.scss";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Redirection si l'ID du logement est invalide
  if (!logement) return <Navigate to="/404" replace />;

  const { pictures, title, location, host, tags, rating, description, equipments } = logement;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));

  return (
    <main className="logement">
      {/* ---------- Bannière ---------- */}
      <div className="logement__banner">
        <img
          src={pictures[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          className="banner-image"
        />

        {pictures.length > 1 && (
          <>
            <img
              src={arrowLeft}
              alt="Précédent"
              className="arrow left"
              onClick={prevImage}
            />
            <img
              src={arrowRight}
              alt="Suivant"
              className="arrow right"
              onClick={nextImage}
            />
            <div className="counter">
              {currentIndex + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>

      {/* ---------- Contenu principal ---------- */}
      <div className="logement__content">
        <div className="logement__header">
          <div>
            <h1>{title}</h1>
            <p className="logement__location">{location}</p>
            <div className="logement__tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="logement__host">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
        </div>

        <div className="logement__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        {/* ---------- Collapses Description + Équipements ---------- */}
        <div className="logement__collapses">
          <Collapse title="Description" content={<p>{description}</p>} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {equipments.map((eq, index) => (
                  <li key={index}>{eq}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </main>
  );
}

export default Logement;
