import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import ScrollToTop from "./components/ScrollToTop";
import SecretariatMedical from "./pages/services/SecretariaMedical";
import AuxiliaireDeVie from "./pages/services/AuxiliareDeVie";
import DelegueMedical from "./pages/services/DelegueMedical";
import AssistantEnCabinetMedical from "./pages/services/AssistantEnCabinetMedical";
import VendeurPharmacie from "./pages/services/VendeurEnPharmacie";
import AgentTechniqueLaboratoire from "./pages/services/AgentTechniqueLaboratoire";
import AdminPage from "./components/Blog/pages/AdminPage";
import BlogPage from "./components/Blog/pages/BlogPage";

function App() {
  // Add preload links for critical images
  useEffect(() => {
    const preloadImages = [
      '/logo.png',  // Add your critical images here
      '/header1.jpg',
      '/header2.jpg'
    ];

    preloadImages.forEach(imageUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      document.head.appendChild(link);
    });
  }, []);

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
        <Route path="/" element={<BlogPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        {/* Healthcare Services Routes */}
        <Route path="/secretariatMedical" element={<SecretariatMedical />} />
        <Route path="/auxiliaireDeVie" element={<AuxiliaireDeVie />} />
        <Route path="/delegueMedical" element={<DelegueMedical />} />
        <Route
          path="/assistantEnCabinetMedical"
          element={<AssistantEnCabinetMedical />}
        />
        <Route path="/vendeurPharmacie" element={<VendeurPharmacie />} />
        <Route
          path="/AgentTechniqueLaboratoire"
          element={<AgentTechniqueLaboratoire />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
