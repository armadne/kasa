import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import "./styles/App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
