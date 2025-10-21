import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.scss";

const logements = [
  { id: 1, title: "Titre de la location", cover: "/images/photo1.jpg" },
  { id: 2, title: "Titre de la location", cover: "/images/photo2.jpg" },
  // ...
];

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__grid">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
