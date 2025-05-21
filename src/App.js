import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AuthPage from "./pages/AuthPage";
import BlogPage from "./pages/Blog/BlogPage";
import AdminArticles from "./pages/Admin/Articles";
import Dashboard from "./pages/Admin/Dashboard";
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
import SingleArticle from "./pages/Blog/SingleArticle";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          // In your router configuration
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleArticle />} />F
          <Route path="/login" element={<AuthPage />} />
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute adminOnly>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <PrivateRoute adminOnly>
                <AdminArticles />
              </PrivateRoute>
            }
          />
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Admin" element={<Admin />} />
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
    </Provider>
  );
}

export default App;
