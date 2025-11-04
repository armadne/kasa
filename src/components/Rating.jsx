// components/Rating.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // une seule icône
import "../styles/Rating.scss";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: i < rating ? "#FF6060" : "#E3E3E3" }} // couleur conditionnelle
        />
      ))}
    </div>
  );
}

export default Rating;
