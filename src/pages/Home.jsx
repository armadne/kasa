import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";
import logements from "../data/logements.json";

// 👉 Import de l'image de la bannière
import bannerHome from "../assets/banniere-home.png";

function Home() {
  return (
    <main className="home">
      <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
      <section className="home__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
