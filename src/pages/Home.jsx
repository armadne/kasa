import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";

const logements = [
  { id: 1, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
  { id: 2, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
  { id: 3, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
  { id: 4, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
  { id: 5, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
  { id: 6, title: "Titre de la location", cover: "https://via.placeholder.com/300x300/ff5a5f/ffffff" },
];

function Home() {
  return (
    <main className="home">
      <Banner />
      <section className="home__grid">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </section>
    </main>
  );
}

export default Home;
