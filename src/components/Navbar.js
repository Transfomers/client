import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logos/logo.png";
import MedicalFile from "../assets/NewIcons/av.png";
import NursingCare from "../assets/NewIcons/dm.png";
import PharmaRep from "../assets/NewIcons/sm.png";
import MedicalAssistant from "../assets/NewIcons/vp.png";
import PharmacySales from "../assets/NewIcons/image.png";
import ChildCare from "../assets/NewIcons/dm.png";
import hamburger1 from "../assets/icons/hamburger1.svg";
import down from "../assets/icons/chevron-down.svg";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navLinkStyle = `font-body text-lg transition-colors duration-300 ${
    isHomePage && !isScrolled ? "text-white" : "text-green-700"
  } hover:text-green-800`;

  const socialIconStyle = `text-xl transition-colors duration-300 ${
    isHomePage && !isScrolled ? "text-white" : "text-green-800"
  } hover:text-green-800`;
  const services = [
    {
      to: "/SecretariatMedical",
      icon: MedicalFile,
      title: "Secrétariat Médical",
      desc: "Formation complète en gestion des dossiers médicaux et accueil des patients",
    },
    {
      to: "/AuxiliaireDeVie",
      icon: NursingCare,
      title: "Auxiliaire de Vie",
      desc: "Formation aux soins d'accompagnement et soutien aux personnes dépendantes",
    },
    {
      to: "/DelegueMedical",
      icon: PharmaRep,
      title: "Délégué Médical",
      desc: "Formation en visite médicale et représentation pharmaceutique",
    },
    {
      to: "/AssistantEnCabinetMedical",
      icon: MedicalAssistant,
      title: "Assistant en Cabinet Médical",
      desc: "Apprentissage des techniques d'assistance aux professionnels de santé",
    },
    {
      to: "/VendeurPharmacie",
      icon: PharmacySales,
      title: "Vendeur en Pharmacie",
      desc: "Formation en dispensation pharmaceutique et conseil client",
    },
    {
      to: "/AgentTechniqueLaboratoire",
      icon: ChildCare,
      title: "Agent Technique Laboratoire",
      desc: "Spécialisation en soins néonatals et développement de l'enfant",
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://web.facebook.com/profile.php?id=61574957061667",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/itc_sante_cameroun?igsh=MTF1aGVyZmNyNTN3YQ==",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/itc-santé/?viewAsMember=true",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@itcsant3?_t=ZS-8vbgt98kamd&_r=1",
    },
    { icon: FaWhatsapp, url: "https://wa.me/237651245653" },
    { icon: FaYoutube, url: "https://youtube.com/@laminutesante-h5t?si=iGkT-Dv0wnkuIu2a" },
  ];

  return (
    <nav
      className={`${
        isScrolled || !isHomePage
          ? "sticky bg-white shadow-md"
          : "absolute bg-transparent"
      } z-50 w-full px-12 py-4 top-0 flex justify-between items-center transition-colors duration-300 max-sm:px-6`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="ITC Santé"
          className="h-24 w-auto hover:opacity-80 transition-opacity"
        />
      </Link>
     

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link to="/" className={navLinkStyle}>
          Accueil
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div
            className={`${navLinkStyle} group flex items-center gap-1 cursor-pointer`}
          >
            <span>Formations</span>
            <img
              src={down}
              alt="dropdown"
              className="w-4 mt-1 transition-transform group-hover:rotate-180"
            />
          </div>
          <div
            className={`
      absolute top-10 left-0 bg-white rounded-xl shadow-lg p-4 w-[500px] z-50
      transition-all duration-300 ease-out
      ${
        isServicesOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      }
    `}
            style={{ boxShadow: "0 8px 32px rgba(166, 198, 118, 0.12)" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map(({ to, icon, title, desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex gap-3 items-start p-3 rounded-xl transition-colors duration-200
            hover:bg-green-100 group"
                >
                  <img src={icon} alt={title} className="w-6 pt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 group-hover:text-yellow-400 transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="opacity-60 text-sm">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link to="/about" className={navLinkStyle}>
          À propos
        </Link>
        <Link to="/contact" className={navLinkStyle}>
          Contact
        </Link>
        <Link to="/blog" className={navLinkStyle}>
          Blog
        </Link>

        {/* Social Media - Desktop */}
        <div className="flex gap-4 ml-4">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconStyle}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden hover:filter bg-green-800 hover:brightness-90 transition-all"
      >
        <img
          src={hamburger1}
          alt="menu"
          className="h-8"
          style={{
            filter: isHomePage && !isScrolled ? "invert(100%)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col">
          <Link
            to="/"
            className="text-lg font-bold text-green-800 mb-4"
            onClick={toggleMenu}
          >
            Accueil
          </Link>

          {/* Dropdown Formations Mobile */}
          <div>
            <button
              className="flex justify-between items-center text-green-800 font-semibold text-lg mb-2 w-full"
              onClick={toggleServices}
            >
              <span>Formations</span>
              <img
                src={down}
                alt="toggle"
                className={`w-4 transform transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isServicesOpen && (
              <div className="ml-4 space-y-2">
                {services.map(({ to, title }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-green-800 block py-2"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-green-800 hover:text-green-600 mt-4 font-semibold py-2"
            onClick={toggleMenu}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="text-green-800 hover:text-green-600 mt-2 font-semibold py-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-green-800 hover:text-green-600 mt-2 font-semibold py-2"
            onClick={toggleMenu}
          >
            Blog
          </Link>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-green-800 mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 hover:text-green-600 transition-colors text-2xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
