import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/About.scss";
import bannerAbout from "../assets/banniere-about.png"; 

function About() {
  return (
    <div className="about-page">
      {/* Ajout de la classe spécifique "about-banner" */}
      <Banner image={bannerAbout} className="about-banner" /> 

      <div className="about-collapses">
        <Collapse 
          title="Fiabilité" 
          content="Les annonces publiées sur Kasa garantissent une fiabilité totale. Les photos correspondent fidèlement aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes pour assurer une transparence maximale." 
        />
        <Collapse 
          title="Respect" 
          content="La bienveillance est au cœur des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur envers le voisinage entraînera une exclusion immédiate de notre plateforme." 
        />
        <Collapse 
          title="Service" 
          content="La qualité du service est essentielle à notre engagement chez Kasa. Nous veillons à ce que chaque échange, qu’il soit entre hôtes ou locataires, se déroule dans un esprit de respect, de disponibilité et de bienveillance." 
        />
        <Collapse 
          title="Sécurité" 
          content="La sécurité est une priorité absolue chez Kasa. Chaque logement respecte des critères stricts établis par nos équipes. En laissant une note, les voyageurs aident à garantir le maintien de ces standards. Nous proposons également des ateliers sur la sécurité domestique pour nos hôtes." 
        />
      </div>
    </div>
  );
}

export default About;
