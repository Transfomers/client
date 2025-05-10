import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArticleList from './pages/ArticleList';
import CreateArticle from './pages/CreateArticle'
// import Sidebar from '../components/Sidebar';
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin"
import ScrollToTop from "./components/ScrollToTop";
import SecretariatMedical from "./pages/services/SecretariaMedical";
import AuxiliaireDeVie from "./pages/services/AuxiliareDeVie";
import DelegueMedical from "./pages/services/DelegueMedical";
import AssistantEnCabinetMedical from "./pages/services/AssistantEnCabinetMedical";
import VendeurPharmacie from "./pages/services/VendeurEnPharmacie";
import AgentTechniqueLaboratoire from "./pages/services/AgentTechniqueLaboratoire";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
        <Route path="/ArticleList" element={<ArticleList />} />
        {/* Healthcare Services Routes */}
        <Route path="/secretariatMedical" element={<SecretariatMedical />} />
        <Route path="/auxiliaireDeVie" element={<AuxiliaireDeVie />} />
        <Route path="/delegueMedical" element={<DelegueMedical />} />
        <Route path="/assistantEnCabinetMedical" element={<AssistantEnCabinetMedical />} />
        <Route path="/vendeurPharmacie" element={<VendeurPharmacie />} />
        <Route path="/AgentTechniqueLaboratoire" element={<AgentTechniqueLaboratoire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;