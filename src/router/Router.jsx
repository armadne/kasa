import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement"; // ✅ page de détail logement
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<Home />} />

        {/* Page "À propos" */}
        <Route path="/about" element={<About />} />

        {/*  Nouvelle route dynamique pour un logement */}
        <Route path="/logement/:id" element={<Logement />} />

        {/* Page 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}
