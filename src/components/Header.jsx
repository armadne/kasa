import "../styles/Header.scss";
import logo from "../assets/logo.png";


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <a href="#" className="active">Accueil</a>
        <a href="#">À propos</a>
      </nav>
    </header>
  );
}

export default Header;
