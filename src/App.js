import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Admin = lazy(() => import("./pages/Admin"));
const BlogPage = lazy(() => import("./components/Blog/pages/BlogPage"));
const AdminPage = lazy(() => import("./components/Blog/pages/AdminPage"));

// Lazy load service pages
const SecretariatMedical = lazy(() => import("./pages/services/SecretariaMedical"));
const AuxiliaireDeVie = lazy(() => import("./pages/services/AuxiliareDeVie"));
const DelegueMedical = lazy(() => import("./pages/services/DelegueMedical"));
const AssistantEnCabinetMedical = lazy(() => import("./pages/services/AssistantEnCabinetMedical"));
const VendeurPharmacie = lazy(() => import("./pages/services/VendeurEnPharmacie"));
const AgentTechniqueLaboratoire = lazy(() => import("./pages/services/AgentTechniqueLaboratoire"));

function App() {
  // Add performance optimizations
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload critical images
      const criticalImages = [
        '/logo.png',
        '/header1.jpg',
        '/header2.jpg'
      ];

      // Add preload links for critical resources
      criticalImages.forEach(imageUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
      });

      // Preconnect to external domains
      const preconnectUrls = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    preloadResources();
  }, []);

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4">
        <div className="h-12 w-12 bg-green-200 rounded-full mx-auto"></div>
        <div className="h-4 w-48 bg-green-100 rounded mx-auto"></div>
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/assistantEnCabinetMedical" element={<AssistantEnCabinetMedical />} />
          <Route path="/vendeurPharmacie" element={<VendeurPharmacie />} />
          <Route path="/AgentTechniqueLaboratoire" element={<AgentTechniqueLaboratoire />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
