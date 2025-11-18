
import { useState } from "react";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import "../styles/Slider.scss";

function Slider({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));

  return (
    <div className="slider">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - image ${currentIndex + 1}`}
        className="slider__image"
      />

      {pictures.length > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="slider__arrow left"
            onClick={prevImage}
          />
          <img
            src={arrowRight}
            alt="Suivant"
            className="slider__arrow right"
            onClick={nextImage}
          />
          <div className="slider__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
