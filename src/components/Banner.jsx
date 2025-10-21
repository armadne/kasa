import "../styles/Banner.scss";
import bannerImg from "../assets/banniere-home.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Bord de mer" className="banner__img" />
      <h1 className="banner__text"></h1>
    </div>
  );
}

export default Banner;
