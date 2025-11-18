import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";
import Profile from "../components/Profile";
import Rating from "../components/Rating";
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  const { pictures, title, location, host, tags, rating, description, equipments } = logement;

  return (
    <main className="logement">
      <Slider pictures={pictures} title={title} />

      <div className="logement__content">
        <div className="logement__header">
          <div>
            <h1>{title}</h1>
            <p className="logement__location">{location}</p>
            <div className="logement__tags">
              {tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="profile-rating">
            <Profile name={host.name} picture={host.picture} />
            <Rating rating={rating} />
          </div>
        </div>

        <div className="logement__collapses">
          <Collapse title="Description" content={<p>{description}</p>} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {equipments.map((eq, i) => (
                  <li key={i}>{eq}</li>
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
