import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";

// ✅ Importation du fichier JSON (situé dans src/data/logements.json)
import logements from "../data/logements.json";

function Home() {
  return (
    <main className="home">
      <Banner />
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
