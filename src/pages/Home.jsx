import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";
import logements from "../data/logements.json";
import bannerHomeNew from "../assets/banniere-home-new.png"; 

function Home() {
  return (
    <main className="home">
      <Banner image={bannerHomeNew} text={"Chez vous,\npartout et ailleurs"} />
      <section className="home__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
