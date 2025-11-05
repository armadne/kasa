import "../styles/Banner.scss";

function Banner({ image, text, className }) {
  return (
    <div className={`banner ${className || ""}`}>
      <img src={image} alt="Bannière" className="banner__img" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
