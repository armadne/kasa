import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}
